-- Monyx database schema (Supabase Postgres).
-- Run once in a fresh project: Supabase dashboard → SQL Editor → paste → Run.
-- Every table has row-level security on and no policies, so only the edge functions
-- (which use the service-role key) can read or write. Browsers never talk to the database.

create table monyx_users (
  id uuid primary key default gen_random_uuid(),
  handle text not null unique check (handle ~ '^[a-z0-9_]{3,20}$'),
  name text not null check (char_length(name) between 1 and 40),
  address text not null unique,
  bonus_sig text,
  bonus_ip text,
  ip text,
  created_at timestamptz not null default now(),
  avatar text,
  last_topup_at timestamptz,
  kv_synced boolean not null default false
);

create table monyx_sessions (
  token text primary key,
  user_id uuid not null references monyx_users(id) on delete cascade,
  created_at timestamptz not null default now(),
  expires_at timestamptz not null
);

-- Server-only settings. The bank wallet's key lives here as the row key = 'bank_secret'.
create table monyx_config (
  key text primary key,
  value text not null
);

-- One row per payment leg (signature + token + receiver).
create table monyx_payments (
  sig text not null,
  from_addr text,
  to_addr text not null,
  units bigint not null check (units > 0),
  note text,
  source text not null check (source in ('relay', 'bank', 'streams', 'chain')),
  created_at timestamptz not null default now(),
  token text not null default 'USDC',
  slot bigint,
  primary key (sig, token, to_addr)
);
create index monyx_payments_to on monyx_payments (to_addr, created_at desc);
create index monyx_payments_from on monyx_payments (from_addr, created_at desc);
create index monyx_payments_sig on monyx_payments (sig);

create table monyx_requests (
  id uuid primary key default gen_random_uuid(),
  from_user uuid not null references monyx_users(id) on delete cascade,
  to_user uuid not null references monyx_users(id) on delete cascade,
  usd numeric(12, 2) not null check (usd > 0 and usd <= 10000),
  note text not null default '' check (char_length(note) <= 80),
  status text not null default 'open' check (status in ('open', 'paid', 'declined', 'cancelled')),
  paid_sig text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  reminded_at timestamptz
);
create index monyx_requests_to on monyx_requests (to_user, status);
create index monyx_requests_from on monyx_requests (from_user, status);

-- Pay links: the escrow account's key lives only in the link.
create table monyx_claims (
  escrow text primary key,
  from_user uuid not null references monyx_users(id) on delete cascade,
  units bigint not null check (units > 0),
  note text,
  label text,
  fund_sig text unique,
  status text not null default 'open' check (status in ('open', 'claimed', 'returned')),
  claimed_by text,
  claim_sig text,
  claimed_at timestamptz,
  created_at timestamptz not null default now()
);
create index monyx_claims_from on monyx_claims (from_user, created_at desc);

-- Grok Bot / AI assistant keys (only the hash is stored) and the payments they draft.
create table monyx_agent_keys (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references monyx_users(id) on delete cascade,
  key_hash text not null unique,
  label text not null default 'Grok Bot',
  weekly_usd numeric not null default 50 check (weekly_usd > 0),
  revoked boolean not null default false,
  created_at timestamptz not null default now(),
  last_used_at timestamptz
);
create table monyx_drafts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references monyx_users(id) on delete cascade,
  to_user uuid not null references monyx_users(id) on delete cascade,
  units bigint not null check (units > 0),
  note text,
  reason text,
  agent_key uuid references monyx_agent_keys(id) on delete set null,
  status text not null default 'pending' check (status in ('pending', 'paid', 'dismissed')),
  paid_sig text,
  created_at timestamptz not null default now(),
  updated_at timestamptz
);
create index monyx_drafts_user on monyx_drafts (user_id, status, created_at);

-- Sign-in: one-time nonces and event tickets, ciphertext key backups, password-guess counters, device approval.
create table monyx_used_logins (
  sig text primary key,
  used_at timestamptz not null default now()
);
create index monyx_used_logins_used_at on monyx_used_logins (used_at);
create table monyx_key_backups (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references monyx_users(id) on delete cascade,
  kind text not null check (kind in ('pw', 'pk')),
  cred_id text,
  salt text,
  iter integer,
  iv text not null,
  ct text not null,
  auth_hash text,
  created_at timestamptz not null default now()
);
create table monyx_pw_tries (
  key text primary key,
  n integer not null default 0,
  first_at timestamptz not null default now()
);
create table monyx_device_links (
  id uuid primary key default gen_random_uuid(),
  code text not null unique,
  poll_hash text not null,
  new_pub text not null,
  user_id uuid references monyx_users(id) on delete cascade,
  old_pub text,
  iv text,
  ct text,
  status text not null default 'pending' check (status in ('pending', 'claimed', 'approved', 'done', 'denied')),
  ip text,
  created_at timestamptz not null default now(),
  expires_at timestamptz not null default (now() + interval '10 minutes')
);
create index monyx_device_links_expires on monyx_device_links (expires_at);

-- Old test-mode coins (sell only now).
create table monyx_holdings (
  user_id uuid not null references monyx_users(id) on delete cascade,
  asset text not null,
  qty numeric(38, 12) not null default 0 check (qty >= 0),
  primary key (user_id, asset)
);
create table monyx_trades (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references monyx_users(id) on delete cascade,
  kind text not null check (kind in ('buy', 'sell', 'swap')),
  asset_from text not null,
  asset_to text not null,
  qty_from numeric(38, 12) not null,
  qty_to numeric(38, 12) not null,
  usd numeric(14, 2) not null,
  sig text unique,
  created_at timestamptz not null default now()
);
create index monyx_trades_user on monyx_trades (user_id, created_at desc);
create or replace function monyx_adjust(p_user uuid, p_asset text, p_delta numeric)
returns numeric language plpgsql security definer set search_path = public as $$
declare v numeric;
begin
  insert into monyx_holdings (user_id, asset, qty) values (p_user, p_asset, 0) on conflict do nothing;
  update monyx_holdings set qty = qty + p_delta
    where user_id = p_user and asset = p_asset and qty + p_delta >= 0
    returning qty into v;
  if v is null then raise exception 'insufficient'; end if;
  return v;
end $$;
revoke execute on function monyx_adjust(uuid, text, numeric) from public, anon, authenticated;

-- Developer tools: the pay-per-call API market (x402).
create table monyx_quotes (
  reference text primary key,
  api text not null,
  params jsonb not null default '{}',
  lamports bigint not null,
  created_at timestamptz not null default now(),
  expires_at timestamptz not null,
  paid_sig text unique
);
create index monyx_quotes_created on monyx_quotes (created_at desc);
create table monyx_receipts (
  sig text primary key,
  reference text not null unique references monyx_quotes(reference),
  api text not null,
  payer text not null,
  lamports bigint not null,
  created_at timestamptz not null default now(),
  served boolean not null default false,
  attempts integer not null default 0
);
create index monyx_receipts_created on monyx_receipts (created_at desc);

-- Lock everything down: edge functions use the service-role key, which bypasses RLS.
do $$ declare t text; begin
  for t in select tablename from pg_tables where schemaname = 'public' and tablename like 'monyx_%' loop
    execute format('alter table %I enable row level security', t);
  end loop;
end $$;

-- Profile photos.
insert into storage.buckets (id, name, public) values ('avatars', 'avatars', true) on conflict (id) do nothing;

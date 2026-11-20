// The relay co-signs as fee payer only for exactly "owner sends USDC to someone". These tests run the real
// checkTx from payments/index.ts against a good payment and the attack shapes it must refuse.
//   cd tests && npm install && node relay.test.mjs
import { extract, check, done } from "./extract.mjs";
import { transform } from "esbuild";
import { Buffer } from "node:buffer";
import { Keypair, PublicKey, SystemProgram, Transaction, TransactionInstruction } from "@solana/web3.js";

const ts = extract("payments/index.ts", ["USDC", "TOKEN", "ATA_PROGRAM", "MEMO", "U", "MAX_PAYMENT", "ata", "createAtaIx", "transferIx", "memoIx", "checkTx"]);
const { code } = await transform(ts, { loader: "ts" });
const M = new Function("PublicKey", "SystemProgram", "TransactionInstruction", "Buffer", code + "\nreturn { USDC, TOKEN, ata, createAtaIx, transferIx, memoIx, checkTx };")(PublicKey, SystemProgram, TransactionInstruction, Buffer);

const bank = Keypair.generate(), owner = Keypair.generate(), friend = Keypair.generate(), thief = Keypair.generate();
const build = (ixs, { payer = bank.publicKey, signers = [owner] } = {}) => {
  const tx = new Transaction().add(...ixs);
  tx.feePayer = payer; tx.recentBlockhash = "11111111111111111111111111111111";
  if (signers.length) tx.partialSign(...signers);
  return tx;
};
const verdict = (tx) => { try { const t = M.checkTx(tx, bank.publicKey); return `ok:${t.owner === owner.publicKey.toBase58()}:${t.to === friend.publicKey.toBase58()}:${t.units}`; } catch (e) { return "refused"; } };
const good = () => [M.createAtaIx(bank.publicKey, friend.publicKey), M.transferIx(owner.publicKey, friend.publicKey, 2_000_000), M.memoIx("pizza")];

check("a normal payment passes", verdict(build(good())), "ok:true:true:2000000");
check("someone else as fee payer", verdict(build(good(), { payer: thief.publicKey, signers: [owner, thief] })), "refused");
check("bank as the sender (draining the bank)", verdict(build([M.createAtaIx(bank.publicKey, friend.publicKey), M.transferIx(bank.publicKey, friend.publicKey, 1)], { signers: [] })), "refused");
check("an extra SOL transfer from the bank", verdict(build([...good(), SystemProgram.transfer({ fromPubkey: bank.publicKey, toPubkey: thief.publicKey, lamports: 1e9 })])), "refused");
check("two transfers", verdict(build([...good(), M.transferIx(owner.publicKey, thief.publicKey, 1)])), "refused");
check("no account-create (recipient unknown)", verdict(build([M.transferIx(owner.publicKey, friend.publicKey, 1)])), "refused");
check("create for one person, pay another", verdict(build([M.createAtaIx(bank.publicKey, thief.publicKey), M.transferIx(owner.publicKey, friend.publicKey, 1)])), "refused");
check("zero dollars", verdict(build([M.createAtaIx(bank.publicKey, friend.publicKey), M.transferIx(owner.publicKey, friend.publicKey, 0)])), "refused");
check("over the $10,000 cap", verdict(build([M.createAtaIx(bank.publicKey, friend.publicKey), M.transferIx(owner.publicKey, friend.publicKey, 10_001 * 1e6)])), "refused");
check("unknown program", verdict(build([...good(), new TransactionInstruction({ programId: thief.publicKey, keys: [], data: Buffer.from([1]) })])), "refused");
check("owner never signed", verdict(build(good(), { signers: [] })), "refused");
check("oversized memo", verdict(build([...good().slice(0, 2), new TransactionInstruction({ programId: M.memoIx("x").programId, keys: [], data: Buffer.alloc(200, 65) })])), "refused");

done("relay (checkTx)");

// Pulls named functions and constants straight out of the app's source files, so the tests
// check the code that actually ships instead of a copy that could drift.
import { readFileSync } from "node:fs";

export function extract(file, names) {
  const src = readFileSync(new URL("../" + file, import.meta.url), "utf8");
  const out = [];
  for (const name of names) {
    const fn = src.search(new RegExp(`\\n\\s*(async\\s+)?function\\s+${name}\\s*\\(`));
    const cn = src.search(new RegExp(`\\n\\s*const\\s+${name}\\s*=`));
    const at = fn >= 0 ? fn : cn;
    if (at < 0) throw new Error(`${name} not found in ${file}`);
    let i = src.indexOf(fn >= 0 ? "{" : "=", at + 1);
    if (fn >= 0) { // function: copy up to the matching closing brace
      let depth = 0;
      for (; i < src.length; i++) { if (src[i] === "{") depth++; else if (src[i] === "}" && --depth === 0) break; }
      out.push(src.slice(at, i + 1));
    } else { // const: copy to the first semicolon outside brackets, strings and regexes are rare enough here
      let depth = 0, q = null;
      for (; i < src.length; i++) {
        const c = src[i];
        if (q) { if (c === "\\") i++; else if (c === q) q = null; continue; }
        if (c === '"' || c === "'" || c === "`") q = c;
        else if ("([{".includes(c)) depth++;
        else if (")]}".includes(c)) depth--;
        else if (c === ";" && depth === 0) break;
      }
      out.push(src.slice(at, i + 1));
    }
  }
  return out.join("\n");
}

let failed = 0, passed = 0;
export function check(name, got, want) {
  const ok = JSON.stringify(got) === JSON.stringify(want);
  if (ok) passed++; else { failed++; console.log(`  FAIL ${name}\n    got  ${JSON.stringify(got)}\n    want ${JSON.stringify(want)}`); }
}
export function done(label) {
  console.log(`${label}: ${passed} / ${passed + failed} pass`);
  if (failed) process.exitCode = 1;
}

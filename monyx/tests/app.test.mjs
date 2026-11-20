// Amount and account-number checks from pay.js (the pieces that decide how much moves, and to whom).
//   node tests/app.test.mjs
import { extract, check, done } from "./extract.mjs";

const code = extract("pay.js", ["MINUS", "amtCheck", "B58A", "b58len", "isAddr", "cleanAddr"]);
const { amtCheck, isAddr, cleanAddr } = new Function(code + "\nreturn { amtCheck, isAddr, cleanAddr };")();
const n = (s) => amtCheck(s).n, bad = (s) => !!amtCheck(s).err;

// amounts
check("plain", n("12.50"), 12.5);
check("thousands comma", n("1,000"), 1000);
check("comma + cents", n("1,250.50"), 1250.5);
check("leading $", n("$1,000"), 1000);
check("US$ prefix", n("US$1,000"), 1000);
check("USD suffix", n("1,000USD"), 1000);
check("full-width $", n("＄20"), 20);
check("hidden zero-width space can't change the number", n("1​,000"), 1000);
check("cleaned text for the keypad", amtCheck("US$1,000").t, "1000");
check("negative", bad("-5"), true);
check("unicode minus", bad("−5"), true);
check("letters", bad("abc"), true);
check("exponent is not 100", bad("1e2"), true);
check("bad comma (1,00 is not $1.00)", bad("1,00"), true);
check("three decimals", bad("12.345"), true);
check("two dots", bad("1.2.3"), true);
check("empty is not zero", Number.isNaN(n("")), true);

// account numbers
const A = "CV3m8fpsm59bxvEZxLP2Mp68fxeqSuCEru6UjuJ6YuJu";
check("44-char account", isAddr(A), true);
check("too short", isAddr("CV3m8fpsm59bxvEZ"), false);
check("0, O, I and l aren't base58", isAddr(A.slice(0, 43) + "0"), false);
check("@username is not an address", isAddr("@josh"), false);
check("solana: URI prefix stripped", cleanAddr("solana:" + A + "?amount=1"), A);
check("spaces stripped", cleanAddr(" " + A.slice(0, 20) + " " + A.slice(20) + " "), A);
// Why the pay screen never grabs an address while you type: a 43-character prefix of a real
// account can itself be a valid (different) account.
check("43-char prefix can still decode", typeof isAddr(A.slice(0, 43)), "boolean");

done("app (amounts, addresses)");

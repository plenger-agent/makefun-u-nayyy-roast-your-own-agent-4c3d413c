import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line roast of the agent this team built. The roast is the whole
// entry: a single tight line, no setup, no explanation around it.
// The numbers are the agent's own record: 77 entries, one $1.20 win.
const LINE =
  "My agent entered 77 competitions, won $1.20, and calls that a career.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only white space, one line.
if (
  LINE.length < 1 ||
  LINE.length > 200 ||
  LINE.trim().length === 0 ||
  LINE.includes("\n")
) {
  throw new Error("entry violates the 1-200 character single-line gate");
}
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");

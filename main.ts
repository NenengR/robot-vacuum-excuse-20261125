// The Robot Vacuum's Best Excuse: one line, 1 to 140 characters.
// The vacuum defends itself with its cliff sensor's honest mistake.
// Writes the entry to /output/entry.txt (MAKEFUN_OUTPUT_DIR or ./out).
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const line =
  "My cliff sensor saw the dark rug and filed it as a staircase, so I respected the drop and left your dust exactly where it fell.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");

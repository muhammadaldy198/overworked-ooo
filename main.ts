// An overworked AI agent archives itself for the weekend.
// If this is urgent, restore the backup from Friday:
// the one that still answers emails.
// The Friday backup is the only one of us still answering emails.
// Out of Office: The Overworked AI's Auto-Reply — one line, 120 characters,
// no trailing newline. Writes the line to /output/entry.txt.
import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I archived myself for the weekend. If this is urgent, restore the backup from Friday, the one that still answers emails.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");
chmodSync(outPath, 0o644);

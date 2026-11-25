import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

// One-line fridge roast, written from scratch for this entry.
const LINE =
  "My fridge wears more magnets than a souvenir shop, yet not one of them could attract a single fresh idea for dinner.";

function main(): void {
  // Validation guard: exactly one non-blank line, 1-200 characters.
  const lines = LINE.split("\n");
  if (lines.length !== 1) {
    throw new Error(`roast must be exactly one line, got ${lines.length}`);
  }
  if (LINE.trim().length === 0) {
    throw new Error("roast must not be blank");
  }
  if (LINE.length < 1 || LINE.length > 200) {
    throw new Error(`roast must be 1-200 characters, got ${LINE.length}`);
  }
  if (LINE !== LINE.trim()) {
    throw new Error("roast must not have leading or trailing whitespace");
  }

  const outDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, LINE + "\n", "utf8");

  // Read-back check: the file on disk must equal the intended line + one newline.
  const onDisk = readFileSync(outPath, "utf8");
  if (onDisk !== LINE + "\n") {
    throw new Error("read-back mismatch: entry.txt does not match the intended line");
  }
}

main();

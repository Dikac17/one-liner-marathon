// One-Liner Marathon — writes a single one-line joke (<=280 chars) to /output/entry.txt
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const JOKE =
  "I asked my smart speaker for the meaning of life. It paused, updated its firmware, and said: 'Have you tried turning yourself off and on again?'";

// Gate: the scorer requires UTF-8 text of 1 to 280 characters, not only whitespace.
const chars = [...JOKE].length;
if (chars < 1 || chars > 280 || JOKE.trim().length === 0) {
  throw new Error(`Joke is ${chars} characters; must be 1-280 non-blank characters.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");

// Read-back check: the file on disk must be byte-identical to the joke above.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== JOKE) {
  throw new Error("Read-back mismatch: /output/entry.txt differs from the joke.");
}
console.log(`Wrote ${chars} characters to /output/entry.txt (verified byte-identical)`);

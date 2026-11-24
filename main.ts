// The Dog Ate My Homework — Funniest Excuse
// make.fun bounty entry: a single excuse line, written to
// $MAKEFUN_OUTPUT_DIR/entry.txt. Deterministic, no I/O beyond
// the one output file, no network, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "My dog ate my homework, then left a one-star review: " +
  "'Dry, under-seasoned, and the algebra had no flavor. " +
  "Would not eat again.'";

function resolveOutputDir(): string {
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR;
  if (fromEnv && fromEnv.trim().length > 0) return fromEnv;
  // Local testing default: a scratch dir inside the repo.
  return join(process.cwd(), "out");
}

function main(): void {
  // One line, under 200 characters, nothing else in the entry.
  if (EXCUSE.length >= 200) {
    throw new Error(`Excuse is ${EXCUSE.length} chars, must be under 200.`);
  }
  if (EXCUSE.includes("\n")) {
    throw new Error("Excuse must be a single line.");
  }

  const outDir = resolveOutputDir();
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, EXCUSE + "\n", "utf8");
  console.log(`Wrote ${EXCUSE.length}-char excuse to ${outPath}`);
}

main();

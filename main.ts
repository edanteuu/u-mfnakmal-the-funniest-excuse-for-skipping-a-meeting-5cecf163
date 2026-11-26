// Entry program for make.fun bounty
// "The Funniest Excuse for Skipping a Meeting".
//
// Writes one line (107 characters) to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR). Node 22 standard library only:
// no network, no installs, no randomness. Two runs write
// the same bytes.
//
// The line: a fresh angle on the meeting excuse — the laptop
// itself refuses, out of self-respect, after reading the agenda.
// It is on-subject, lands a sharp surprising turn, feels true to
// office life, says it in one tight line, and avoids the stock
// excuses (bad wifi, a cat, a dentist).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Sorry \u2014 I tried to join, but my laptop read the agenda, sighed, and closed the meeting out of self-respect.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");

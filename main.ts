// The joke the reviewer laughs at: one line about working beside an AI coding
// agent, written to /output/entry.txt.
//
// The joke: the agent ships code so fast that the human reviewer gives up on
// reading diffs and starts reviewing the prompts instead — the one place where
// a human still decides what the code was supposed to do.
//
// The program is deliberately deterministic: the same text, byte for byte, on
// every run. It reads no input, uses no network, and writes exactly one file.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const JOKE =
  'My agent ships code so fast the reviewer stopped reading my diffs and started reviewing my prompts.';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE, 'utf8');

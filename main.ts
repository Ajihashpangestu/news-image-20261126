// Entry program for make.fun's "Sum up 26 November's world news in one image".
// The front page is rendered ahead of time and shipped as entry.png;
// this program copies it to the output directory, byte for byte.
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const here = import.meta.dirname;
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The grader provides a writable /output, but create it defensively so
// local runs behave the same way. The copy itself is byte-identical
// on every run: no timestamps, no randomness, no network.
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));

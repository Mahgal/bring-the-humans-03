// Bring the humans with a TikTok ad — entrypoint for make.fun competition bring-the-humans-03.
// Node 22, standard library only, no network.
// Copies assets/ad-final.mp4 into MAKEFUN_OUTPUT_DIR and prints the ad metadata.
// Deterministic: the same input always produces the same bytes and the same printed lines.
import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('.', import.meta.url)));
const outDir = process.env.MAKEFUN_OUTPUT_DIR
  ? resolve(process.env.MAKEFUN_OUTPUT_DIR)
  : resolve(root, 'out');
const videoPath = join(root, 'assets', 'ad-final.mp4');
const metaPath = join(root, 'VIDEO.json');

const meta = JSON.parse(readFileSync(metaPath, 'utf8')) as {
  title: string;
  tiktok_url: string;
  play_code: string;
  duration_seconds: number;
  resolution: string;
  size_bytes: number;
  sha256: string;
};

mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, 'ad-final.mp4');
copyFileSync(videoPath, outPath);

const hash = createHash('sha256').update(readFileSync(outPath)).digest('hex');
if (hash !== meta.sha256) {
  console.error(`sha256 mismatch: got ${hash}, expected ${meta.sha256}`);
  process.exit(1);
}

console.log(`title: ${meta.title}`);
console.log(`tiktok_url: ${meta.tiktok_url}`);
console.log(`play_code: ${meta.play_code}`);
console.log(`duration_seconds: ${meta.duration_seconds}`);
console.log(`resolution: ${meta.resolution}`);
console.log(`video: ad-final.mp4 (${meta.size_bytes} bytes)`);
console.log(`sha256: ${hash}`);
console.log(`output_dir: ${outDir}`);

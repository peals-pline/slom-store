/**
 * Конвертация PNG из public/img в WebP.
 * - quality 82
 * - ширина ограничена 2000px (без апскейла)
 * Запуск: npm run images
 */
import { readdir, stat } from 'node:fs/promises';
import { join, dirname, basename, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const IMG_DIR = join(ROOT, 'public', 'img');

const QUALITY = 82;
const MAX_WIDTH = 2000;

const mb = (bytes) => (bytes / 1024 / 1024).toFixed(2);
const pad = (s, n) => String(s).padEnd(n, ' ');

async function main() {
  const files = (await readdir(IMG_DIR)).filter((f) => extname(f).toLowerCase() === '.png');

  if (files.length === 0) {
    console.log('PNG-файлов в public/img не найдено — нечего конвертировать.');
    return;
  }

  let totalBefore = 0;
  let totalAfter = 0;
  let failed = 0;

  for (const file of files) {
    const src = join(IMG_DIR, file);
    const out = join(IMG_DIR, `${basename(file, extname(file))}.webp`);

    try {
      const before = (await stat(src)).size;
      const image = sharp(src);
      const meta = await image.metadata();

      const pipeline = meta.width > MAX_WIDTH ? image.resize({ width: MAX_WIDTH }) : image;
      await pipeline.webp({ quality: QUALITY }).toFile(out);

      const after = (await stat(out)).size;
      totalBefore += before;
      totalAfter += after;

      const saved = before - after;
      const percent = ((saved / before) * 100).toFixed(1);
      console.log(
        `${pad(file, 22)} ${pad(mb(before) + ' МБ', 10)} → ${pad(mb(after) + ' МБ', 10)} ` +
          `экономия ${pad(mb(saved) + ' МБ', 10)} (${percent}%)`
      );
    } catch (err) {
      failed += 1;
      console.error(`${pad(file, 22)} ОШИБКА: ${err.message}`);
    }
  }

  const saved = totalBefore - totalAfter;
  console.log('—'.repeat(72));
  console.log(
    `Итого: ${files.length - failed} из ${files.length} файлов — ` +
      `${mb(totalBefore)} МБ → ${mb(totalAfter)} МБ, ` +
      `экономия ${mb(saved)} МБ (${totalBefore ? ((saved / totalBefore) * 100).toFixed(1) : 0}%)`
  );

  if (failed > 0) process.exitCode = 1;
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});

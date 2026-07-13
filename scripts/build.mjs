import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const dist = resolve(root, 'dist');

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
await cp(resolve(root, 'assets'), resolve(dist, 'assets'), { recursive: true });
await cp(resolve(root, 'public/favicon.svg'), resolve(dist, 'favicon.svg'));
await cp(resolve(root, 'src/styles.css'), resolve(dist, 'styles.css'));
await cp(resolve(root, 'src/main.js'), resolve(dist, 'main.js'));

const html = (await readFile(resolve(root, 'index.html'), 'utf8'))
  .replace('/src/styles.css', '/styles.css')
  .replace('/src/main.js', '/main.js');
await writeFile(resolve(dist, 'index.html'), html);

console.log('Production build created in dist/');

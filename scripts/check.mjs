import { access, readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const required = ['index.html', 'src/styles.css', 'src/main.js', 'assets/rubysoft-logo.png', 'assets/rubysoft-window-screen.png'];
await Promise.all(required.map((file) => access(resolve(root, file))));

const html = await readFile(resolve(root, 'index.html'), 'utf8');
for (const id of ['main', 'oplossing', 'voordelen', 'werkwijze', 'expertise', 'contact']) {
  if (!html.includes(`id="${id}"`)) throw new Error(`Missing required section: ${id}`);
}
if (!html.includes('<meta name="description"')) throw new Error('Missing meta description');
if (!html.includes('aria-label="Hoofdnavigatie"')) throw new Error('Missing accessible navigation label');

console.log('Markup, assets and required sections validated');

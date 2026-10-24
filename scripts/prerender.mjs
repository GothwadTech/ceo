import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import { createServer } from 'vite';

const root = process.cwd();
const outputPath = resolve(root, 'dist/index.html');
const rootMarker = '<div id="root"></div>';
const vite = await createServer({
  configFile: resolve(root, 'vite.config.ts'),
  appType: 'custom',
  logLevel: 'error',
  server: {
    middlewareMode: true,
    hmr: false,
  },
});

try {
  const { default: App } = await vite.ssrLoadModule('/src/App.tsx');
  const markup = renderToString(createElement(App));
  const document = await readFile(outputPath, 'utf8');

  if (!document.includes(rootMarker)) {
    throw new Error('Expected an empty #root element in the Vite build output.');
  }
  if (!markup.includes('Yuvkesh') || !markup.includes('Gothwad Tech')) {
    throw new Error('The rendered profile is missing its key identity content.');
  }

  await writeFile(outputPath, document.replace(rootMarker, `<div id="root">${markup}</div>`));
  console.log('Prerendered the profile into dist/index.html for search and social crawlers.');
} finally {
  await vite.close();
}

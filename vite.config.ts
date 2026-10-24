import react from '@vitejs/plugin-react';
import { env } from 'node:process';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const projectRoot = fileURLToPath(new URL('.', import.meta.url));
const previewHosts = ['.e2b.app', 'localhost', '127.0.0.1'];
const disableHmr = env.DISABLE_HMR === 'true';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': projectRoot,
    },
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
    allowedHosts: previewHosts,
    // HMR is disabled in AI Studio via DISABLE_HMR env var.
    // Do not modify—file watching is disabled to prevent flickering during agent edits.
    hmr: !disableHmr,
    // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
    watch: disableHmr ? null : {},
  },
  preview: {
    host: '0.0.0.0',
    allowedHosts: previewHosts,
  },
});

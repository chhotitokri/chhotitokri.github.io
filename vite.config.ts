import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

function stripPagesRootRedirect() {
  return {
    name: 'strip-pages-root-redirect',
    transformIndexHtml(html: string) {
      return html.replace(/<script id="pages-root-redirect">[\s\S]*?<\/script>\n?/, '');
    },
  };
}

export default defineConfig(() => {
  return {
    // Relative URLs so the production bundle works from /docs/ on
    // branch-based GitHub Pages and from / if Pages later serves the build root.
    base: './',
    build: {
      outDir: 'docs',
      emptyOutDir: true,
    },
    plugins: [react(), tailwindcss(), stripPagesRootRedirect()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});

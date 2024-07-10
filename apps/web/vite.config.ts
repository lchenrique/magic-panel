// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [react(), dts()],
  // build: {
  //   lib: {
  //     entry: 'src/index.tsx',
  //     name: 'Magic-Panel',
  //     fileName: (format) => `magic-panel.${format}.js`
  //   },
  //   rollupOptions: {
  //     external: ['react', 'react-dom'],
  //     output: {
  //       globals: {
  //         react: 'React',
  //         'react-dom': 'ReactDOM'
  //       }
  //     }
  //   },
  //   emptyOutDir: true
  // }
});

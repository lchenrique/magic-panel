// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build:{
    rollupOptions:{
      external: ["magic-panel"]
    }
  }
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

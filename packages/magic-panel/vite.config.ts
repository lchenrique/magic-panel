// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import path  from 'path'
export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: path.join(__dirname, "./tsconfig.app.json")
    }),
  ],
  build: {
    outDir: 'dist',
    minify:false,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'Magic-Panel',
      fileName: format => `index.${format}.js`, // 
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    emptyOutDir: true, // Limpar a pasta de saída antes da construção
  },
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// Vite yapılandırması
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'manifest.json',
          dest: '.' // dist klasörüne kopyalanacak
        }
      ]
    })
  ],
  build: {
    outDir: 'dist', // Çıktı dizini
    rollupOptions: {
      input: {
        main: 'index.html',           // Ana HTML dosyanız
        background: 'src/background.ts',  // Background script
        content: 'src/content.ts'     // Content script
      },
      output: {
        entryFileNames: 'src/[name].js', // Derlenmiş dosya adları
      }
    }
  }
});

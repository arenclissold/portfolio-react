import { defineConfig } from 'vite'
import { resolve } from "path";
import react from '@vitejs/plugin-react'

module.exports = defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        resume: resolve(__dirname, 'src/components/assets/aren_clissold_resume.pdf')
      },
      output: {
        assetFileNames: `assets/[name].[ext]`,
      }
    }
  },
  plugins: [react()]
})

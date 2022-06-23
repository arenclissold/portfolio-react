import { defineConfig } from 'vite'
import { resolve } from "path";
import react from '@vitejs/plugin-react'

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        resume: resolve(__dirname, 'aren_clissold_resume.pdf')
      }
    }
  },
  plugins: [react()]
})

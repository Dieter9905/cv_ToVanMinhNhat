import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const isVercel = !!process.env.VERCEL

export default defineConfig({
  // Use repo sub-path only when deploying to GitHub Pages
  base: isVercel ? '/' : '/cv_ToVanMinhNhat/',
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  }
})

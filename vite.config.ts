import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3000 
  },
  plugins: [react()],
  resolve:{
    alias:{
      '@components' : path.resolve(__dirname, './src/components'),
      '@styles' : path.resolve(__dirname, './src/styles'),
      '@assets' : path.resolve(__dirname, './src/assets'),
      '@pages' : path.resolve(__dirname, './src/pages'),
    }
  }
})

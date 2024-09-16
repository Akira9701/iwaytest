import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      '@pages': path.resolve(__dirname, './src/pages/'),
      '@ui': path.resolve(__dirname, './src/shared/ui/'),
      '@api': path.resolve(__dirname, './src/shared/api/'),
    },
  },
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
  },
  resolve: {
    alias: {
      // '@': path.resolve(__dirname, './src/'),
      // '@pages': path.resolve(__dirname, './src/pages/'),
      // '@ui': path.resolve(__dirname, './src/shared/ui/'),
      // '@api': path.resolve(__dirname, './src/shared/api/'),
      // '@': '/src',
      // '@pages': '/src/pages',
      // '@ui': '/src/shared/ui',
      // '@api': '/src/shared/api',
      '@': path.resolve(__dirname, './src'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@ui': path.resolve(__dirname, './src/shared/ui'),
      '@api': path.resolve(__dirname, './src/shared/api'),
    },
  },
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import svgrPlugin from 'vite-plugin-svgr'
import { configDotenv } from 'dotenv'
configDotenv() // Load .env variables

export default defineConfig({
  plugins: [react(), viteTsconfigPaths(), svgrPlugin()],
  server: {
    host: true,
    port: 8000,
    // proxy: {
    //   '/api': {
    //     target: 'http://transstage1.iwayex.com/transnextgen/v3',
    //     changeOrigin: true,
    //     rewrite: path => path.replace(/^\/api/, ''),
    //   },
    // },
  },
  resolve: {
    alias: {
      '@': '/src',
      '@pages': '/src/pages',
      '@ui': '/src/shared/ui',
      '@api': '/src/shared/api',
    },
  },
})

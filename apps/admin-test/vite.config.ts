import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { mercurDashboardPlugin } from '@mercurjs/dashboard-sdk'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    react(),
    mercurDashboardPlugin({
      medusaConfigPath: '../api/medusa-config.ts',
      backendUrl: 'http://localhost:9000',
      vendorUrl: 'http://localhost:7001',
    }),
  ],
  optimizeDeps: {
    exclude: ['@medusajs/dashboard'],
  },
  resolve: {
    alias: {
      'virtual:medusa/displays': resolve(__dirname, 'src/empty.ts'),
      'virtual:medusa/forms': resolve(__dirname, 'src/empty.ts'),
      'virtual:medusa/i18n': resolve(__dirname, 'src/empty.ts'),
      'virtual:medusa/menu-items': resolve(__dirname, 'src/empty.ts'),
      'virtual:medusa/routes': resolve(__dirname, 'src/empty.ts'),
      'virtual:medusa/widgets': resolve(__dirname, 'src/empty.ts'),
      'virtual:medusa/links': resolve(__dirname, 'src/empty.ts'),
    },
  },
})
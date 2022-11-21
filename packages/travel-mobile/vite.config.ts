import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  base: '/tour/',
  plugins: [vue(), visualizer()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    host: '0.0.0.0',
    proxy: {
      '^/api': {
        // target: 'http://113.247.231.117:8081',
        // changeOrigin: true,
        /** 测试地址 */
        target: 'http://172.10.13.202:8891/',
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '^/generatePNG': {
        target: 'http://113.247.231.117:8081',
      },
      '^/img': {
        // target: 'http://113.247.231.117:8081',
        target: 'http://172.10.13.202:83/',
      },
    },
  },
})

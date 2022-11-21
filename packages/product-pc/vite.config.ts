import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer'
import { viteMockServe } from 'vite-plugin-mock'
export default defineConfig({
  base: '/product/',
  plugins: [
    vue(),
    visualizer(),
    viteMockServe({
      mockPath: './src/mock',
      localEnabled: true,
      supportTs: true,
    }),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    host: '0.0.0.0',
    proxy: {
      //接口
      '^/api': {
        // target: 'http://113.247.231.117:8081/',
        // changeOrigin: true,
        /** 测试地址 */
        target: 'http://172.10.13.202:8891/',
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      //静态资源
      '^/forImg': {
        // target: 'http://172.10.13.202:83/',
        target: 'http://113.247.231.117:8081/',
      },
      '^/realImg': {
        target: 'http://113.247.231.117:8081/',
      },
    },
  },
})

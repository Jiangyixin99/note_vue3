import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { fileURLToPath, URL } from 'node:url'
import Markdown from 'unplugin-vue-markdown/vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  // base: process.env.NODE_ENV === 'production' ? '/note/' : '/',
  base: '/note_vue3/',

  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown({}),
    AutoImport({ resolvers: [ElementPlusResolver()] }),
    Components({ resolvers: [ElementPlusResolver()] }),
  ],
  // 别名设置
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:7071', // 后端服务器地址
        changeOrigin: true, // 支持跨域
        rewrite: (path) => path.replace(/^\/api/, '') // 重写路径
      }
    }
  },

  build: {
    outDir: 'dist' // 明确指定构建输出目录
  }
})

function vueMarkdown(): import("vite").PluginOption {
  throw new Error('Function not implemented.')
}


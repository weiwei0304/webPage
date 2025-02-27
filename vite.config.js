import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  base: '/webPage/', // 確保與您的倉庫名稱匹配
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    outDir: 'dist', // 正確的位置
    minify: 'terser',
    sourcemap: false,
    rollupOptions: {
      output: {
        // 關鍵修改：完全內聯動態導入，避免分割代碼
        inlineDynamicImports: true,
        manualChunks: undefined, // 禁用代碼分割
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
      },
    },
  },
})

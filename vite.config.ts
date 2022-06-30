import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        //生产环境时移除console
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      'api': resolve(__dirname, 'src/api'),
      'components': resolve(__dirname, 'src/components')
    },
  },
  base: './', // 打包基础路径 不配置打包后可能会找不到资源
  server: {
    host: '0.0.0.0',
    open: true,
    proxy: {
      '/test': {
        target: '',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/test/, ''),
      },
    },
    port: 8888, // 启动时的默认占用端口
  },
});

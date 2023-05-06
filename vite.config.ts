import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// import './src/styles/index.scss'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')  //设置`@`指向`src`目录
    }
  },
  base: './',  //设置打包路径
  server: {
    port: 4000,  //设置服务启动端口号
    open: true,  //设置服务器启动时是否自动打开浏览器
    cors: true,  //允许跨域
    //   proxy: {
    //     '/api': {
    //         target: "请求的域名地址",
    //         changeOrigin: true,// 是否允许跨域代理
    //         rewrite: (path) => path.replace(/^\/api/, '') // 重定向地址
    //     }
    // }
  },
})

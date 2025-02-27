import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 如果有样式文件，确保使用相对路径
import './assets/main.css'

createApp(App).use(router).mount('#app')

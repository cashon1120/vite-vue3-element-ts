import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from "./routes";
// 手动引入 ElMessage 样式
import 'element-plus/es/components/message/style/index'
import './style.css'

const pinia = createPinia()
import App from './App.vue'
createApp(App).use(router).use(pinia).mount('#app')

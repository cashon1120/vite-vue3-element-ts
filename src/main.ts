import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from "./routes";
import './style.css'
const pinia = createPinia()
import App from './App.vue'

createApp(App).use(router).use(pinia).mount('#app')

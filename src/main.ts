import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./routes";
// 手动引入 ElMessage 样式
import "element-plus/es/components/message/style/index";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import App from "./App.vue";
import "./style.css";

const pinia = createPinia();

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(router).use(pinia).mount("#app");

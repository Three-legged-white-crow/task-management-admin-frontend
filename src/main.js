import { createApp } from 'vue'
import App from './App.vue'
// 引入element ui
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
// 路由
import router from './router/index';
// 全局scss
import "./styles/index.scss"

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')

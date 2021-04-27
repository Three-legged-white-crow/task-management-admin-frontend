import { createApp } from 'vue'
import App from './App.vue'
// 引入element ui
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
// 路由
import router from './router/index';
import "./styles/index.scss"

//如需要可写成模块化
// 创建

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')

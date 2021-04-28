// 引入router
import { createRouter, createWebHistory } from 'vue-router';

//如需要可写成模块化
// 创建
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: () => import('../views/log/login.vue'), meta: { title: '登录页面' }, },
        { path: "/home", component: () => import('../views/home/home.vue'), meta: { title: '' }, },
    ]
})

export default router
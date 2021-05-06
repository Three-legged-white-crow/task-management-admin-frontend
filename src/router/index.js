// 引入router
import { createRouter, createWebHistory } from 'vue-router';

//如需要可写成模块化
// 创建
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: "/home",
            name: "home",
            component: () => import('../views/home/home.vue'),
            meta: {
                title: '首页',
            }
        },
        {
            path: "/login",
            name: "login",
            component: () => import('../views/log/login.vue'),
            meta: {
                title: '登录页',
            }
        },
        {
            path: "/bie",
            name: "bie",
            component: () => import('../views/bie.vue'),
            meta: {
                title: '其他',
            }
        },

    ]
})
export default router
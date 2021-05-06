
import router from '../../router'
import store from '../../store'
import { getAccessToken } from '../../utils/accessToken';
import setting from '../../config/setting';

//前置守卫
router.beforeEach(async (to, from, next) => {
    let token = getAccessToken()
    if (token != null && token != '') {
        console.log('1');
        if (to.path === '/login') {
            console.log('2');
            next({ path: '/' })
        } else {
            console.log('3');
            next()
        }
    } else {
        if (setting.routesWhiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            next({ path: '/login', query: { redirect: to.path }, replace: true })
        }
    }
})
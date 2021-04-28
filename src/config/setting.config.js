/**
 * @description 导出默认通用配置
 */
const setting = {
    // 进行编译的依赖
    transpileDependencies: ['vue-echarts', 'resize-detector'],
    // 默认的接口地址 如果是开发环境和生产环境走vab-mock-server，当然你也可以选择自己配置成需要的接口地址
    baseURL: 'http://skapi.fzyishuang.top',
    //标题 （包括初次加载雪花屏的标题 页面的标题 浏览器的标题）
    title: '传家',
    //简写
    abbreviation: 'vab',
    //开发环境端口号
    devPort: '80',
    //版本号
    version: process.env.VUE_APP_VERSION,
    //不经过token校验的路由
    routesWhiteList: ['/login', '/register', '/404', '/401'],
    //加载时显示文字
    loadingText: '正在加载中...',
    //token在localStorage、sessionStorage存储的key的名称
    tokenTableName: 'cj_token',
    //token存储位置localStorage sessionStorage
    storage: 'localStorage',
    //token失效回退到登录页时是否记录本次的路由
    recordRoute: true,
}
module.exports = setting

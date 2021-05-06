/**
 * @author
 * @description 导入所有 vuex 模块，
 */
import { createStore } from 'vuex';
import state from './modules/state';
import actions from './modules/action';
import mutations from './modules/mutations';
import getters from './modules/getters';
export default createStore({
    state,
    mutations,
    actions,
    getters,
    // modules,
})
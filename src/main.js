// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import api from './api'
import ElementUI from 'element-ui'
import store from './store'
// import mockdata from "./mock";
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/iconfont.css'
import '@/assets/layout.css'
import '@/assets/styles/index.css'
import 'babel-polyfill'
import { getUser } from './lib/util'

Vue.use(ElementUI)
    // Vue.use(api)

Vue.config.productionTip = false
const mock = false;
if (mock) {
    require("./mock");
}

Vue.prototype.$http = api // 修改原型链，使用更方便

if (getUser()) {
    store.commit('setUser')
    store.commit('getRouter')
}

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
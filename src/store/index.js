import Vue from 'vue'
import Vuex from 'vuex'
import { getUser } from '../lib/util'
import { constantRouterMap } from '@/router'
Vue.use(Vuex)


const store = new Vuex.Store({
    state: {
        user: {},
        name: 'dafdf',
        routers: [],
        getRouer: []
    },
    mutations: {
        setUser(state) {
            state.user = getUser()
        },
        setName(state) {
            // console.log(state)
            state.name = 'chenyaru'
        },
        getRouter(state) {
            state.getRouer = constantRouterMap
        },
        routers(state, router) {
            if (state.routers.some(v => v.path === router.path)) return
            state.routers.push({
                name: router.name,
                path: router.path,
                title: router.meta.title || 'no-title'
            })
        }

    },
    actions: {
        test({ dispatch }, view) {
            dispatch('addTag', view)
        },
        addTag({ commit }, view) {
            console.log(view)
            commit('routers', view)
        }
    }
})
export default store
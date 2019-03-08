import Vue from 'vue'
import Vuex from 'vuex'
import { getUser } from '../lib/util'
import { constantRouterMap } from '@/router'
import { resolve } from 'path';
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
        },
        delTags(state, router) {
            for (let [i, v] of state.routers.entries()) {
                if (v.path == router.path) {
                    state.routers.splice(i, 1)
                    break
                }
            }
        }

    },
    actions: {
        test({ dispatch }, view) {
            dispatch('addTag', view)
        },
        addTag({ commit }, view) {
            console.log(view)
            commit('routers', view)
        },
        delTagsView({ commit, state }, view) {
            //commit('delTags', view)
            return new Promise((resolve) => {
                commit('delTags', view)
                resolve([...state.routers])
            })

        }
    }
})
export default store
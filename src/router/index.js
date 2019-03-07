import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import Home from '@/components/Home'

import Layout from '@/components/Layout'
import Login from '@/components/Login'

import BookList from '@/components/book/book'
import BookCategoryList from '@/components/bookcategory/bookcategory'

import UserList from '@/components/user/list'
import UserChangePwd from '@/components/user/changepwd'
import UserProfile from '@/components/user/profile'
// import { resolve } from 'path'

// 懒加载，当路由被访问时才加载对应的组件
// const Login = resolve => require(['@/components/Login'], resolve)

Vue.use(Router)

export const constantRouterMap = [
    // ceshi路由
    {
        path: '/login',
        name: '登录',
        component: Login
    },
    {
        path: '',
        name: 'dashboard',
        component: Layout,
        redirect: 'Dashboard',
        leaf: true,
        menuShow: true,
        children: [{
            path: '/dashboard',
            component: Home,
            name: 'dashboard',
            menuShow: true,
            meta: {
                title: 'dashboard',
                affix: true // or you can only set roles in sub nav
            }
        }]
    },
    {
        path: '/',
        name: '用户管理',
        menuShow: true,
        component: Layout,
        redirect: 'noredirect',
        meta: {
            title: '用户管理'
        },
        children: [{
            path: '/user/list',
            component: UserList,
            name: '用户列表',
            menuShow: true,
            meta: {
                title: '用户列表' // or you can only set roles in sub nav
            }
        }]
    },
    {
        path: '/',
        name: '图书管理',
        menuShow: true,
        component: Layout,
        redirect: 'noredirect',
        meta: {
            title: '图书管理'
        },
        children: [{
                path: '/book/list',
                component: BookList,
                name: '图书列表',
                menuShow: true,
                meta: {
                    title: '图书列表' // or you can only set roles in sub nav
                }

            },
            {
                path: '/book/category',
                component: BookCategoryList,
                name: '图书分类',
                menuShow: true,
                meta: {
                    title: '图书分类' // or you can only set roles in sub nav
                }
            }
        ]
    },
    {
        path: "/",
        component: Layout,
        name: "设置",
        menuShow: true,
        redirect: 'noredirect',
        meta: {
            title: '设置'
        },
        children: [{
            path: '/user/profile',
            component: UserProfile,
            name: '个人信息',
            menuShow: true,
            meta: {
                title: '个人信息' // or you can only set roles in sub nav
            }
        }, {
            path: '/user/changepwd',
            component: UserChangePwd,
            name: '修改密码',
            menuShow: true,
            meta: {
                title: '修改密码' // or you can only set roles in sub nav
            }
        }]
    }
]

let router = new Router({
    scrollBehavior: () => ({
        y: 0
    }),
    routes: constantRouterMap
})

router.beforeEach((to, from, next) => {
    if (to.path.startsWith('/login')) {
        window.localStorage.removeItem('userInfo')
        next()
    } else {
        let user = JSON.parse(window.localStorage.getItem('userInfo'))
        if (!user) {
            next({ path: '/login' })
        } else {
            next()
        }
    }
})

export default router
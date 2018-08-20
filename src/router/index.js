import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import index from '@/components/index'
// import add from '@/components/add'
import vuexCalculator from '@/components/vuexCalculator'
// import axios from '@/components/axios'
// import element from '@/components/element'
// import mint from '@/components/mint'
// import vuex from '@/components/vuex'
// import tabbar from '@/components/tabbar'
// import mine from '@/components/mine/mine'
// import progress from '@/components/progress'
// import blog from '@/components/blog'
// import vFor from '@/components/v-for.vue'


Vue.use(Router)

export default new Router({
    routes: [
        // {
        //     path: '/',
        //     name: 'index',
        //     component: index
        // },
        // {
        //     path: '/',
        //     name: 'add',
        //     component: add
        // }
        {
            path: '/',
            name: 'vuexCalculator',
            component: vuexCalculator
        }
        // {
        //     path: '/',
        //     name: 'axios',
        //     component: axios
        // }
        // {
        //     path: '/',
        //     component: element
        // }
        // {
        //     path: '/',
        //     component: mint
        // }
        // {
        //     path: '/',
        //     component: vuex
        // }
        // {
        //     path: '/',
        //     component: tabbar
        // },
        // {
        //     path: '/mine',
        //     component: mine
        // }
        // {
        //     path: '/',
        //     component: progress
        // }
        // {
        //     path: '/',
        //     component: blog
        // }
        // {
        //     path: '/',
        //     component: vFor
        // }
    ]
})
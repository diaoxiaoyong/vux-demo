import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloFromVux from '@/components/HelloFromVux'
import home from '@/components/home'
import { resolve } from 'path';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloFromVux',
      component: resolve => require(['@/components/HelloFromVux'],resolve),
      meta:{
        title:'首页',
        index:1
      }
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: resolve =>require(['@/components/HelloWorld'],resolve),
      meta:{
        title:'首页',
        index:2
      },
    },
    {
      path: '/home',
      name: 'home',
      component: resolve =>require(['@/components/home'],resolve),
      meta:{
        title:'首页',
        index:3
      }
    }
  ]
})

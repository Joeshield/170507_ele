/**
 * 路由器js模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
/*

import goods from '../components/goods/goods.vue'
import ratings from '../components/ratings/ratings.vue'
import seller from '../components/seller/seller.vue'
*/
// 路由组件懒加载: 将路由组件单独打包, 只有第一次请求此路由地址时才会加载此路由组件包
const goods = () => import('../components/goods/goods.vue')
const ratings = () => import('../components/ratings/ratings.vue')
const seller = () => import('../components/seller/seller.vue')

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/goods',
      component: goods
    },
    {
      path: '/ratings',
      component: ratings
    },
    {
      path: '/seller',
      component: seller
    },
    {
      path: '/',
      redirect: '/goods'
    }
  ]
})

import Vue from 'vue'
import VueResource from 'vue-resource'
import app from './app'
import router from './router'
import './common/stylus/fonts.styl'
import './mock/mockServer'


Vue.use(VueResource) // 每个组件对象都多了一个属性$http

new Vue({
  el: '#app',
  render: h=>h(app),
  router
})

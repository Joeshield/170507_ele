import Vue from 'vue'
import VueResource from 'vue-resource'
import VueLazyload from 'vue-lazyload'
import app from './app'
import router from './router'
import './common/stylus/fonts.styl'
import './mock/mockServer'
import loading from './loading.gif'

Vue.use(VueResource) // 每个组件对象都多了一个属性$http
Vue.use(VueLazyload, {
  loading: loading,
})

new Vue({
  el: '#app',
  render: h=>h(app),
  router
})

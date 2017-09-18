import Vue from 'vue'
import VueResource from 'vue-resource'
import VueLazyload from 'vue-lazyload'
import moment from 'moment'
import app from './app'
import router from './router'
import './common/stylus/fonts.styl'
import './mock/mockServer'
import loading from './loading.gif'

Vue.use(VueResource) // 每个组件对象都多了一个属性$http
Vue.use(VueLazyload, {
  loading: loading,
})

// 注册全局过滤器
Vue.filter('date-string', function (value) {// value就是日期值
  return moment(value).format('YYYY-MM-DD HH:mm:ss')
})

new Vue({
  el: '#app',
  render: h=>h(app),
  router
})

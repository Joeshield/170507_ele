<template>
  <div>
    <ele-header></ele-header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import axios from 'axios'
  import header from './components/header/header.vue'

  export default {

    mounted () {
      // 使用vue-resource请求express提供的mock接口
      this.$http.get('/api/seller')
        .then(response => {
          //获取返回的数据
          const result = response.body
          console.log('vue-resource result ', result)
        })
      // 使用axios请求mockjs提供的mock接口
      axios.get('/api2/seller')
        .then(response => {
          //获取返回的数据
          const result = response.data
          console.log('axios result ', result)
        })
    },

    components: {
      'ele-header': header
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/mixins.styl"

  .tab
    height 40px
    display flex
    border-1px(rgba(7,17,27,0.1))
    .tab-item
      width 33.3333%
      line-height 40px
      text-align center
      .router-link-active
        color rgb(240,20,20)
</style>

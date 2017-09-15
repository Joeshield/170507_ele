<template>
  <div>
    <ele-header :seller="seller"></ele-header>
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
    <router-view :seller="seller"></router-view>
  </div>
</template>

<script>
  import axios from 'axios'
  import header from './components/header/header.vue'

  export default {

    data () {
      return {
        seller: {}
      }
    },

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
          // 更新状态
          if(result.code===0) {
            this.seller = result.data
            this.seller.score = 3.6
          }
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
      a
        display block
        &.router-link-active
          color rgb(240,20,20)
</style>

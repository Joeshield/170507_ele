<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img v-lazy="seller.avatar" >
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟到达
        </div>
        <div class="support" v-if="seller.supports">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div class="supports_count" v-if="seller.supports" @click="showDetail(true)">
        <span class="count">{{seller.supports.length}}个</span>
        <span class="icon-keyboard_arrow_right"></span>
      </div>
    </div>
    <div class="bulletin-wrapper" @click="showDetail(true)">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">{{seller.bulletin}}</span>
      <span class="icon-keyboard_arrow_right"></span>
    </div>
    <div class="background">
      <img :src="seller.avatar" alt="">
    </div>
    <transition name="fade">
      <div class="detail" v-show="detailShow">
        <div class="detail-wrapper">
          <div class="detail-main">
            <div class="name">{{seller.name}}</div>
            <div class="star-wrapper">
              <star :score="seller.score" :size="48"></star>
            </div>
            <div class="title">
              <div class="line"></div>
              <div class="text">优惠信息</div>
              <div class="line"></div>
            </div>
            <ul class="supports" v-if="seller.supports">
              <li class="support" v-for="(support, index) in seller.supports" :key="index">
                <span class="icon" :class="classMap[support.type]"></span>
                <span class="text">{{support.description}}</span>
              </li>
            </ul>
            <div class="title">
              <div class="line"></div>
              <div class="text">商家公告</div>
              <div class="line"></div>
            </div>
            <div class="content">
              <p>{{seller.bulletin}}</p>
            </div>
          </div>
        </div>
        <div class="detail-close" @click="showDetail(false)">
          <span class="icon-close"></span>
        </div>
      </div>
    </transition>

  </div>
</template>

<script>
  import star from '../star/star.vue'

  export default {
    props: {
      seller: Object
    },

    data () {
      return {
        classMap: ["decrease", "discount", "guarantee", "invoice", "special"],
        detailShow: false
      }
    },

    methods: {
      showDetail (isShow) {
        this.detailShow = isShow
      }
    },

    components: {
      star
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

  .header
    overflow hidden
    position relative
    background rgba(7,17,27,0.5)
    color #fff
    .content-wrapper
      position relative
      padding 24px 12px 18px 24px
      overflow hidden
      .avatar
        float left
        width 64px
        height 64px
        &>img
          width 100%
          border-radius 2px
      .content
        float left
        margin-left 16px
        .title
          margin-top 2px
          .brand
            display inline-block
            vertical-align middle
            width 30px
            height 18px
            background-repeat no-repeat
            background-size 30px 18px
            bg-image(brand)
          .name
            margin-left 6px
            font-size 16px
            line-height 18px
            font-weight bold
        .description
          margin-top 8px
          margin-bottom 10px
          font-size 12px
          line-height 12px
          font-weight 200
        .support
          margin-bottom 2px
          .icon
            display inline-block
            vertical-align middle
            width 12px
            height 12px
            background-repeat no-repeat
            background-size 12px 12px
          .decrease
            bg-image(decrease_1)
          .discount
            bg-image(discount_1)
          .guarantee
            bg-image(guarantee_1)
          .invoice
            bg-image(invoice_1)
          .special
            bg-image(special_1)

          .text
            margin-left 4px
            font-size 10px
            font-weight 200
            line-height 12px

      .supports_count
        position absolute
        right 12px
        bottom 18px
        padding 7px 8px
        background rgba(0,0,0,0.2)
        border-radius 7px
        .count
          font-size 10px
          line-height 12px
          font-weight 200
          margin-right 2px




    .bulletin-wrapper
      position relative
      height 28px
      line-height 28px
      padding 0 12px
      background rgba(7,17,27,0.2)
      white-space nowrap
      overflow hidden
      text-overflow ellipsis
      .bulletin-title
        display inline-block
        vertical-align middle
        width 22px
        height 12px
        background-repeat no-repeat
        background-size 22px 12px
        bg-image(bulletin)
      .icon-keyboard_arrow_right
        position absolute
        top:8px
        right 5px

      .bulletin-text
        margin-right 4px
        margin-left 4px
        font-size 10px
        font-weight 200
    .background
      position absolute
      top: 0
      left 0
      width 100%
      height 100%
      z-index -1
      img
        width 100%
        height 100%
        filter blur(10px)
    .detail
      position fixed
      top: 0
      left 0
      z-index:100
      background rgba(7,17,27,0.8)
      width 100%
      height 100%

      &.fade-enter-active, &.fade-leave-active
        transition opacity .3s
      &.fade-enter, &.fade-leave-to
        opacity 0
      .detail-wrapper
        min-height 100%
        padding 64px 36px 0
        .detail-main
          .name
            font-size 16px
            line-height 16px
            font-weight 700
            text-align center
            margin-bottom 16px
          .star-wrapper
            width 100%
            height 24px
          .title
            margin-top 28px
            margin-bottom 24px
            display flex
            .line
              flex:1
              position:relative
              top:-6px
              border-bottom:2px solid  rgba(255, 192, 203,0.3)
            .text
              margin 0 12px
              font-size 14px
              line-height 14px
              font-weight 700
          .supports
            padding 0 12px
            .support
              height 16px
              margin-bottom 12px
              .icon
                display inline-block
                vertical-align middle
                width 16px
                height 16px
                background-repeat no-repeat
                background-size 16px 16px
              .decrease
                bg-image(decrease_2)
              .discount
                bg-image(discount_2)
              .guarantee
                bg-image(guarantee_2)
              .invoice
                bg-image(invoice_2)
              .special
                bg-image(special_2)


              .text
                margin-left 6px
                font-size 12px
                line-height 12px
                font-weight 200
          .content
            padding 0 12px
            font-size 12px
            line-height 24px
            font-weight 200

      .detail-close
        font-size 32px
        color rgba(255,255,255,0.5)
        margin-top -128px
        text-align center


</style>

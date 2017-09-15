<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img src="./avatar.jpg" >
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">粥品香坊（回龙观）</span>
        </div>
        <div class="description">
          蜂鸟专送/38分钟到达
        </div>
        <div class="support">
          <span class="icon guarantee"></span>
          <span class="text">在线支付满28减5</span>
        </div>
      </div>
      <div class="supports_count">
        <span class="count">5个</span>
        <span class="icon-keyboard_arrow_right"></span>
      </div>
    </div>
    <div class="bulletin-wrapper">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。</span>
      <span class="icon-keyboard_arrow_right"></span>
    </div>
    <div class="background">
      <img src="./avatar.jpg" alt="">
    </div>
    <div class="detail">
      <div class="detail-wrapper">
        <div class="detail-main">
          <div class="name">粥品香坊（回龙观）</div>
          <div class="star-wrapper">
            <div class="star star-24">
              <span class="star-item on"></span>
              <span class="star-item on"></span>
              <span class="star-item on"></span>
              <span class="star-item half"></span>
              <span class="star-item off"></span>
            </div>
          </div>
          <div class="title">
            <div class="line"></div>
            <div class="text">优惠信息</div>
            <div class="line"></div>
          </div>
          <ul class="supports">
            <li class="support">
              <span class="icon decrease"></span>
              <span class="text">在线支付满28减5</span>
            </li>
            <li class="support">
              <span class="icon discount"></span>
              <span class="text">VC无限橙果汁全场8折</span>
            </li>
            <li class="support">
              <span class="icon guarantee"></span>
              <span class="text">单人精彩套餐</span>
            </li>
            <li class="support">
              <span class="icon invoice"></span>
              <span class="text">该商家支持发票,请下单写好发票抬头</span>
            </li>
            <li class="support">
              <span class="icon special"></span>
              <span class="text">已加入“外卖保”计划,食品安全保障</span>
            </li>
          </ul>
          <div class="title">
            <div class="line"></div>
            <div class="text">商家公告</div>
            <div class="line"></div>
          </div>
          <div class="content">
            <p>粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。</p>
          </div>
        </div>
      </div>
      <div class="detail-close">
        <span class="icon-close"></span>
      </div>
    </div>


  </div>
</template>

<script>
  export default {}
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
      &>img
        width 100%
        height 100%
        filter blur(10px)
    .detail
      display: none
      position fixed
      top: 0
      left 0
      background rgba(7,17,27,0.8)
      width 100%
      height 100%
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
            .star-24
              text-align center
              .star-item
                display inline-block
                width 10px
                height 10px
                background-repeat no-repeat
                background-size 10px 10px
              .on
                bg-star(star24_on)

              .half
                bg-star(star24_half)
              .off
                bg-star(star24_off)

            .star-36
              text-align center
              .star-item
                display inline-block
                width 22px
                height 22px
                background-repeat no-repeat
                background-size 22px 22px
              .on
                bg-star(star36_on)

              .half
                bg-star(star36_half)
              .off
                bg-star(star36_off)

            .star-48
              text-align center
              .star-item
                display inline-block
                width 20px
                height 20px
                background-repeat no-repeat
                background-size 20px 20px
              .on
                bg-star(star48_on)

              .half
                bg-star(star48_half)
              .off
                bg-star(star48_off)

          .title
            margin-top 28px
            margin-bottom 24px
            display flex
            .line
              position relative
              left 0px
              top: 5px
              width 110px
              height 2px
              background: gray;
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

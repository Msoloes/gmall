<template>
  <tab-bar>
    <tab-bar>
      <tab-bar-item  path="/home">
        <img slot="bar-item-icon" src="~assets/img/tabbar/home.png" alt="">
        <img slot="bar-item-icon-active" src="~assets/img/tabbar/home_active.png" alt="">
        <div slot="bar-item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="bar-item-icon" src="~assets/img/tabbar/category.png" alt="">
        <img slot="bar-item-icon-active" src="~assets/img/tabbar/category_active.png" alt="">
        <div slot="bar-item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img slot="bar-item-icon" src="~assets/img/tabbar/cart.png" alt="">
        <img slot="bar-item-icon-active" src="~assets/img/tabbar/cart_active.png" alt="">
        <div slot="bar-item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" active-color="red">
        <img slot="bar-item-icon" src="~assets/img/tabbar/profile.png" alt="">
        <img slot="bar-item-icon-active" src="~assets/img/tabbar/profile_active.png" alt="">
        <div slot="bar-item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </tab-bar>
</template>

<script>
  import TabBar from "components/common/tabbar/TabBar";
  import TabBarItem from "components/common/tabbar/TabBarItem";
  export default {
    name: 'MainTabBar',
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style>
</style>

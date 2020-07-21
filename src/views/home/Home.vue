<template>
  <div id="home">
    <nav-bar class="home_nav_bar">
      <h3 slot="nav_bar_center">购物街</h3>
    </nav-bar>
    <home-swiper :banners="banners"/>
    <home-recommend-view :recommends="recommends"/>
    <feature-vue></feature-vue>
    <tab-control class="tab-control" :titles="titles"></tab-control>
    <ul>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
    </ul>
  </div>
</template>

<script>
  /**公共组件*/
  import NavBar from "components/common/navBar/NavBar";
  import TabControl from "components/content/tabControl/TabControl";
  /**子组件-*/
  import HomeSwiper from "./homeChild/HomeSwiper";
  import HomeRecommendView from "./homeChild/HomeRecommendView";
  import FeatureVue from "./homeChild/FeatureVue";
  /**方法导入*/
  import {getMultiDate} from "network/home";
  export default {
    name: "Home",
    data(){
      return{
        titles:['流行','时尚','新款'],
        banners:[],
        recommends:[]
    }},
    components:{
      NavBar,HomeSwiper,HomeRecommendView,FeatureVue,
      TabControl
    },
    created() {
      getMultiDate()
      .then(res=>{
        this.banners=res.data.banner.list
        this.recommends=res.data.recommend.list
        console.log(res);
      })
    }
  }
</script>

<style scoped>
  .home_nav_bar{
    background-color: var(--color-tint);
    color: #ffffff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  #home{
    margin-top: 44px;
  }
  .tab-control{
    position: sticky;
    top:44px
  }
</style>

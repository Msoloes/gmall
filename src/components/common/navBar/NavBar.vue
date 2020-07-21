<template>
  <div class="nav_bar">
    <div class="nav_bar_left"><slot name="nav_bar_left"></slot></div>
    <div class="nav_bar_center"><slot name="nav_bar_center"></slot></div>
    <div class="nav_bar_right"><slot name="nav_bar_right"></slot></div>
  </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>
  .nav_bar{
    display: flex;
    height: 44px;
    line-height:44px;
    box-shadow: 0 1px 1px rgba(100,99,98,0.3);
  }
  .nav_bar_left,.nav_bar_right{
    width: 60px;
  }
  .nav_bar_center{
    flex: 1;
    text-align: center;
  }
</style>

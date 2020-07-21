<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"> <slot name="bar-item-icon"></slot></div>
    <div v-else><slot name="bar-item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="bar-item-text"></slot></div>
  </div>
</template>

<script>
    export default {
        name: "TabBarItem",
        data(){
          return{
            //isActive:true
          }
        },
        computed:{
          isActive(){
            return this.$route.path.indexOf(this.path)!==-1
          },
          activeStyle(){
            return this.isActive?{color:this.activeColor}:{}
          }
        },
        props:{
          path:String,
          activeColor:{
            type:String,
            default:'crimson'
          }
        },
        methods:{
          itemClick(){
            this.$router.push(this.path)
          }
        }
    }
</script>
<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img{
    margin-top: 3px;
    height: 24px;
    vertical-align: middle;
    width: 24px;
  }
</style>

<template>
  <div  class="tab-control">
    <div v-for="(title,index) in titles" @click="titleClick(index)">
      <span class="tab-control-span" :class="currentIndex==index?'active':''">{{title}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    data(){
      return{
        currentIndex:0
      }
    },
    props:{
      titles:{
        type:Array,
        default(){
          return []
        }
      }
    },
    methods:{
      titleClick(index){
        this.currentIndex=index
      }
    }
  }
</script>

<style scoped>
  .tab-control{
    display: flex;
    height: 30px;
    font-size: 18px;
    text-align: center;
    margin-top: 10px;
  }
  .tab-control div {
    flex: 1;
    padding: 3px;
  }
  .tab-control-span{
    border-bottom: 3px solid  #ffffff;
    padding: 3px;
  }
  .active{
    border-bottom-color: var(--color-tint);
    color: var(--color-tint);
  }
</style>

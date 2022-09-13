<template>
  <div class="marker-box">
    <div class="marker-color" :style="{background:typeColor}"></div>
    <div class="marker-title">{{category}}</div>
  </div>
</template>

<script>
export default {
  name: "ColorMarker",
  data(){
    return{

    }
  },
  props:{
    typeColor:{
      type:String,
      default:"red"
    },
    category:{
      type:String,
      default:""
    }
  },
}
</script>

<style scoped>
  .marker-box {
    line-height: 20px;
    display: flex;
  }
  .marker-color{
    width: 60px;
    height: 20px;
    background-color: #409EFF;
  }
  .marker-title{
    padding: 2px;
    font-size: 16px;

  }
</style>


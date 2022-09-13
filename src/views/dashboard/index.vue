<template>
  <div class="dashboard-container">
    <el-row>
      <el-col :span="20" :offset="2">
        <div class="grid-content">


        </div>
      </el-col>

    </el-row>

<!--    <el-row>-->
<!--      <ColorMarker category="蓝色" typeColor="blue"></ColorMarker>-->
<!--      <ColorMarker category="红色" typeColor="red"></ColorMarker>-->
<!--      <ColorMarker category="紫色" typeColor="purple"></ColorMarker>-->
<!--    </el-row>-->
  </div>
</template>


<script>
import {mapGetters} from 'vuex'

import ColorMarker from "@/components/ColorMarker"

export default {
  name: 'Dashboard',
  components: {
    ColorMarker
  },
  data() {
    return {
      raw: require("@/assets/result/raw.jpg"),
      result: require("@/assets/result/result.jpg")
    }
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>


<style lang="scss" scoped>

  .img-box1{
    width: 1200px;
    height: 700px;
    position: absolute;
    z-index: 1;
  }

  .img-box2{
    width: 600px;
    height: 700px;
    position: absolute;
    z-index: 2;
  }

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    display: block;
    max-width: 100%;
    max-height: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: none;
  }

  .dashboard {
  &-container {
    margin: 30px;
  }

  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}




</style>

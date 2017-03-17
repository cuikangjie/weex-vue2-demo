<template>
  <div class="top">
    <div class="own">
      <div class="own-img">
        <image style="width: 200px;height: 200px;" src="http://images.cuikangjie.com/1489490648921kin.png"></image>
      </div>
      <div class="own-text">
        <text class='color-white'>Kin</text>
      </div>
      <div class="own-text">
        <text class='color-white'>专注于技术的一枚前端工程师</text>
      </div>
    </div>
    <div class="menu">
      <div class="menu-item" @click="jump('/note')">
        <text class='color-white'>首页</text>
      </div>
      <div class="menu-item" @click="jump('/detail/7')">
        <text class='color-white'>关于我</text>
      </div>
      <!-- <div class="menu-item" @click="jump('/resume')">
        <text class='color-white'>联系我</text>
      </div> -->
    </div>
  </div>
</template>

<style>
.own{
  justify-content: center;
  align-items: center;
  background-color: rgb(204, 204, 204);
  padding-top: 30px;
  padding-bottom: 30px;
}
.own-img{
  border-radius: 200px;
  overflow: hidden;
}
.own-text{
  margin-top: 30px;
}
.menu{
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;

}
.menu-item{
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(71, 118, 225, 0.75);
  line-height: 90px;
  height: 90px;
  font-size: 33px;
  text-align: center;
  font-family: Verdana, Geneva, sans-serif;
  color: white;
}
.color-white{
  color: white;
}
</style>

<script>
  export default {
    data(){
      return {
        str:'detail'
      }
    },
    methods: {

    }
  }
</script>

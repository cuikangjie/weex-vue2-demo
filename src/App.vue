<template>
  <scroller class="app-main">
    <appHeader></appHeader>
    <div class="right-main">
      <router-view ></router-view>
    </div>
  </scroller>
</template>

<script>
import appHeader from './components/header.vue'

export default {
  components:{
    appHeader
  },

  methods: {

  }
}

</script>

<style>

</style>

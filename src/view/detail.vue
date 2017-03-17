<template>
  <div>
   <web ref="webview" :src="url" class="webview">
   </web>
  </div>
</template>

<style>
.webview {
  height: 700px;
}
</style>

<script>
  export default {
    data(){
      return {
        str:'http://admin.cuikangjie.com/#/app/',
        url:''
      }
    },
    beforeRouteEnter (to, from, next) {
      // console.log(to.params.id);
      next(vm => {
        vm.changeUrl(to.params.id)
      });

    },
    beforeRouteUpdate (to, from, next) {
      this.changeUrl(to.params.id)
      next();
    },
    methods: {
      changeUrl(id){
         this.url=this.str+id;
      }
    }
  }
</script>

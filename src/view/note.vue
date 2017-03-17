<template>
  <div>
    <div class="cell" v-for="note in notes">
       <div class="panel" @click="toDetail(note.id)">
         <div class="title"><text>{{note.title}}</text></div>
         <div class="time"><text class="size-time">{{note.updatetime}}</text></div>
       </div>
     </div>
  </div>
</template>
<script>
  export default {
    computed: {
      notes () {
        return this.$store.getters.notes
      }
    },
    methods:{
      fetchNotes(){
        this.$store.dispatch('getNote')
      },
      toDetail(id){
        this.jump(`/detail/${id}`);
      }
    },
    created () {
      this.fetchNotes();
    }
  }
</script>
<style scoped>
.panel {
  height: 150px;
  margin-bottom: 20px;
  padding-right: 30px;
  padding-left: 30px;
  background-color: rgba(162, 217, 192, 0.2);
}
.title{
  height: 100px;
  justify-content: center;
}
.time{
  height: 50px;
}
.size-time {
  font-size: 24px;
}
</style>

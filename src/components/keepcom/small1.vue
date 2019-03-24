<template>
  <div>
    {{Info}}
    <p>1231</p>
    <button v-on:click="changInfo">动态组件</button>
  </div>
</template>
<script>
  export  default {
    name:'small1',
    data(){
      return{
        Info:''
      }
    },
    methods:{
      changInfo(){
        this.Info="789";
      }
    }
  }
</script>
<style></style>

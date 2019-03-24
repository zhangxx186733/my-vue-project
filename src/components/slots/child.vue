<template>
  <div class="chlid">
    <hr>
    <slot></slot>
    <hr>
    <slot name="s2"></slot>
    <hr>
    <slot name="s3" v-bind:text="msg"></slot>
    <p></p>
    <button v-on:click="changeSlot">插槽值改变</button>
  </div>
</template>
<script>
  export default {
    name:'child',
    data(){
      return{
        msg:"作用域插槽124214"
      }
    },
    methods:{
      changeSlot(){
        this.msg="5656";
      }
    }
  }
</script>
<style></style>

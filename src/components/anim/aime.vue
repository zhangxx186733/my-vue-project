<template>
  <div>
    <!--CSS过度与动画-->
    <transition name="fade">
        <P v-show="Hidden" >寒心恨雪</P>
    </transition>
    <button v-on:click="hiddenCom">点我</button>
  </div>
</template>
<script>
  export default {
    name:'anim',
    data(){
      return{
        Hidden:true
      }
    },
    methods:{
      hiddenCom(){
        this.Hidden=!this.Hidden;
      }
    }
  }
</script>
<style>

  /*类名为fade进入*/
  .fade-enter, .fade-leave-to{
    opacity: 0;
  }
  /*类名为fade过程*/
  .fade-enter-active, .fade-leave-active{
    transition: opacity 2s;
  }
  /*类名为fade结束*/
    .fade-enter-to, .fade-leave{
    opacity: 1;
  }
</style>

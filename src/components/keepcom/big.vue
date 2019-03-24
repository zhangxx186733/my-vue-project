<template>
  <div>
    big
    <p></p>
    <!--加入keepalive以后保证动态组件的在缓存中，不加是重新渲染-->
    <keep-alive>
      <component :is="currentView"></component>
    </keep-alive>
    <br>
    <button v-on:click="changeCom">改变当前组件</button>
  </div>
</template>
<script>
  import Small1 from './small'
  import Small2 from './small1'
  export  default {
    name:'big',
    data(){
      return{
        currentView:"Small2",
        flag:false
      }
    },
    components:{
      Small1,
      Small2
    },
    methods:{
      changeCom(){
        if(this.flag){
          this.currentView="Small2";
          this.flag=false;
        }else{
          this.currentView="Small1";
          this.flag=true;
        }
      }
    }
  }
</script>
<style></style>

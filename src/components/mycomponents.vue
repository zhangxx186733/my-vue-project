<template>
  <div>
    父亲
    <Son v-bind:str1="str1" v-bind:objData="objData"/>
    <p></p>
    <button v-on:click="showInfo">点我有惊喜</button>
    <button v-on:click="showObjData">点我有惊喜X2</button>
  </div>
</template>
<script>
  import  Son from './son'
  export default {
    name:'myconponents',
    data(){
      return{
        str1:"",
        objData:NaN
      }
    },
    methods:{
      showInfo(){
        if(this.str1!=""){
          this.str1="";
        }else{
          this.str1="显示啦";
        }
      },
      showObjData(){
        this.objData={
          name: "aim",
          age:23
        }
      }
    },
    components: {
      Son
    }
  }
</script>
<style></style>

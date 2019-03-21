<template>
  <div>
    222
    <p>下面是子主件</p>
    <input v-model="num">
    <!--v-bind:num="getNum"是父亲传给儿子的值，其中num是key
    @sendMsg="getMsg"是儿子返回父亲的方法，其中sendMsg是一个key-->
    <Child @sendMsg="getMsg" v-bind:num="getNum"/>
    <p>返回的数据是{{fhMsg}}</p>
  </div>
</template>
<script>
  import Child from './child'
  export default {
    name:'parent',
    data(){
      return{
        fhMsg:"",
        num:''
      }
    },
    computed:{
      getNum(){
          return this.num-0;
      }
    },
    components:{
      Child
    },
    methods:{
      getMsg(data){
        console.log(data);
        this.fhMsg=data;
      }
    }
  }
</script>
<style></style>

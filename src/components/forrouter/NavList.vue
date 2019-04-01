<template>
  <div id="app">
    <ul>
      <!--exact 显示一个-->
      <li><router-link exact to="/" >首页</router-link></li>
      <li><router-link to="/kecheng">课程</router-link></li>
      <li><router-link to="/zhuanjia">专家</router-link></li>
    </ul>
  </div>
</template>
<script>
  export default {
    name:'',
    data(){
      return {
      }
    },
    methods:{

    }
  }
</script>
<style>
  div{
    width: 100%;
    height: 50px;
    background: aliceblue;
  }
  ul{
    list-style: none;
  }
  li{
    float: left;
    margin: 0 20px;
  }
</style>

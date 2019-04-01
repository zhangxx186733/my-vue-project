<template>
  <div>
    <ForNavList/>
    <div class="left">
      <span>课程</span>
      <ul>
        <li><router-link to="/kecheng/jiaban">加班</router-link></li>
        <li><router-link to="/kecheng/ssx">十三薪</router-link></li>
        <!--传递参数,也可以传递对象，的写法，url加值-->
        <li><router-link :to="{name:'jjl',params:{gz:'8500',obj:datas}}">九九六</router-link></li>
        <!--另一种写法url变为？值-->
        <li><router-link :to="{name:'jjl',query:{gz:'8500'}}">九九六</router-link></li>
      </ul>
    </div>
    <div class="right">
      <!--视图区域-->
      <router-view/>
    </div>
  </div>
</template>
<script>
  import ForNavList from './NavList'

  export default {
    name: '',
    components: {ForNavList},
    data() {
      return {
        datas:{
          name:'李四',
          age:'56'
        }
      }
    },
    methods: {}
  }
</script>
<style>
  .left ,.right{
    float: left;
  }
  .right{
    margin-left: 50px;
  }
</style>

<template>
  <div>
    <ForNavList/>
    <div class="left">
      <span>课程</span>
      <ul>
        <li><router-link to="/kecheng/jiaban">加班</router-link></li>
        <li><router-link to="/kecheng/ssx">十三薪</router-link></li>
        <li><router-link to="/kecheng/jjl">九九六</router-link></li>
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
      return {}
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

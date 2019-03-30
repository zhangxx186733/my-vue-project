<template>
  <div id="app">
    <img src="./assets/logo.png">
    <NavList></NavList>
    <!--路由访问router-view-->
    <router-view></router-view>
  </div>
</template>
<script>
  import  NavList from  './components/NavList'
  import  TestDemo from './components/TestDemo'
  import  FormData from './components/formdata'
  import  Style from  './components/style'
  import  MyComp from './components/mycomponents'
  import  Parent from  './components/sonparent/parent'
  import  Slots from  './components/slots/parent'
  import  KeepAlive from './components/keepcom/big'
  import  Anim from './components/anim/aime'
  import DefaultCom from  './components/defauleCom/defaultCom'
  import Post from './components/postAxios/postAxios'
  import Mocks from  './components/mock/mock'
  export default {
    name: 'App',
    components: {
      TestDemo,
      FormData,
      Style,
      MyComp,
      Parent,
      Slots,
      KeepAlive,
      Anim,
      DefaultCom,
      Post,
      NavList,
      Mocks
    }
  }
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

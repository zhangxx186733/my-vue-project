<template>
  <div id="app">
    <img src="./assets/logo.png">
    <DefaultCom/>
    <Post/>
  </div>
</template>
<script>
  import  TestDemo from './components/TestDemo'
  import  FormData from './components/formdata'
  import  Style from  './components/style'
  import  MyComp from './components/mycomponents'
  import  Parent from  './components/sonparent/parent'
  import  Slots from  './components/slots/parent'
  import  KeepAlive from './components/keepcom/big'
  import  Anim from './components/anim/aime'
  import Hello from './components/HelloWorld'
  import DefaultCom from  './components/defauleCom/defaultCom'
  import Post from './components/postAxios/postAxios'
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
      Hello,
      DefaultCom,
      Post
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

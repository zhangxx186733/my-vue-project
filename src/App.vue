<template>
  <div id="app">
    <img src="./assets/logo.png">
    <MyComp/>
  </div>
</template>
<script>
  import  TestDemo from './components/TestDemo'
  import  FormData from './components/formdata'
  import  Style from  './components/style'
  import  MyComp from './components/mycomponents'
  export default {
    name: 'App',
    components: {
      TestDemo,
      FormData,
      Style,
      MyComp
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

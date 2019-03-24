<template>
  <div>
    父模块
    <p></p>
    <Child>
      <!--普通插槽的写法-->
      <p>普通插槽</p>
      <!--具名插槽的写法-->
      <p slot="s2">具名插槽</p>
      <!--作用域插槽的写法-->
      <p slot="s3" slot-scope="key">
        {{key.text}}
      </p>
    </Child>
  </div>
</template>
<script>
  import Child from './child'
  export default {
    name:'parent',
    data(){
      return{

      }
    },
    components:{
      Child
    }
  }
</script>
<style></style>

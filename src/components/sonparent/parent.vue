<template>
  <div>
    222
    <p>下面是子主件</p>
    <Child/>
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

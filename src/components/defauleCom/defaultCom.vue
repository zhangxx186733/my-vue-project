<template>
  <div>
    <!--默认指定焦点-->
    <input v-focus>
    <p v-mycss>自定义组件</p>
  </div>
</template>
<script>
  export default {
    name:'Default',
    data(){
      return{}
    },
    //定义一个mycss的组件
    directives:{
        mycss:function (el) {
          el.style.color="red";
        }
    }
  }
</script>
<style></style>

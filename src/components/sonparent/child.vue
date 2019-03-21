<template>
  <div>
    <!--点击按钮会调用cjMsg方法，此方法会把一个对应的值传递给父亲-->
    <button v-on:click="cjMsg">我要传递给父组件一个值</button>
  </div>
</template>
<script>
  export default {
    name:'child',
    data(){
      return{
        msg:''
      }
    },
    //子类定义父亲的传值key
    props:{
      num:{
        type:Number,
        default:0
      }
    },
    methods:{
      //两个参数 一个key，一个vue
      cjMsg: function () {
        this.$emit("sendMsg",this.addNum());
      },
      addNum(){
        return this.num+10;
      }
    }
  }
</script>
<style></style>

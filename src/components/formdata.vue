<template>
  <div>
    <input v-model.lazy="msg">
    <p>{{msg2}}</p>
  </div>
</template>
<script>
  export default {
    name:'FormDate',
    data(){
      return{
        msg:'hello',
        msg2:''
      }
    },
    //方法
    methods:{

    },
    //计算属性
    computed:{


    },
    watch:{
      msg:function(data){
          this.msg2=data;
      }
    }
  }
</script>
<style></style>

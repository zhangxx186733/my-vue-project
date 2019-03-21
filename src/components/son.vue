<template>
  <div>
    儿子
  <p></p>
    {{str1}}
    <p></p>
    {{objData.name}}+{{objData.age}}
  </div>
</template>
<script>
export default {
    name:'son',
    data(){
      return{

      }
    },
    //数据传递子类的props
    props:{
      str1:{
        type:String,
        default:"略略略"
      },
      objData:{
        type:Object,
        default:function () {
          return {name:'ruiwe',age:55}
        }
      }
    }
}
</script>
<style></style>

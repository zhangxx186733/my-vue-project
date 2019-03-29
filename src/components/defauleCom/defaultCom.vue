<template>
  <div>
    <!--默认指定焦点-->
    <input v-focus>
    <p v-mycss>自定义组件</p>
    {{data | getValue}}
    <li v-for="news in newsData">姓名+{{news.name}}+年龄+{{news.age}}+id+{{news.telId}}</li>
  </div>
</template>
<script>
  export default {
    name:'Default',
    data(){
      return{
        data:20,
        newsData:[]
      }
    },
    //定义一个mycss的组件
    directives:{
        mycss:function (el) {
          el.style.color="red";
        }
    },
    //过滤器
    filters:{
      getValue(value){
        if(typeof value==='number'){
            return "$"+value;
        }else{
            return value;
        }
      }
    },
    //初始化组件
    created() {
      this.$axios('http://test01.com',
        {
          params:{
            type:'',
            count:30
          }
        }
      ).then(
        res=>{
          this.newsData=res.data;
          console.log(res)
        }
      ).catch(err=>{
        console.log(err)
      })
    }
  }
</script>
<style></style>

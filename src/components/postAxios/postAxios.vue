<template>
	<div id="app">
      <span>用户名：</span><input v-model="name">
      <br>
       <span>密码：</span><input v-model="password">
      <br>
      <button v-on:click="login">登录</button>
      <br>
      <span>{{errorTip}}</span>
	</div>
</template>
<script>
	export default {
		name:'',
		data(){
			return {
        errortip:true,
        errorTip:'',
        name:'',
        password:'',

			}
		},
		methods:{
      login(){
        //前端验证数据
        if(!this.name || !this.password){   //若任意一个参数为空，则返回并提示错误
          this.errortip=true;
          this.errorTip='账号或密码有误';
          return;
        }
        //直接把参数写在post头部，还有好几种写法，区别不大
        this.$axios.post('http://test02.com',{
          Name:this.name,
          userPwd:this.password
        }
        ).then(response => {         //用户名和密码将转为json传到后台接口
          console.log(response);
          let res = response.data;   //用res承接返回后台的json文件(像使用数组那样)
          if(res.status=='1'){   //显示登录结果
            console.log('登录成功');
            this.errortip=true;
            this.errorTip='登录成功';
          }else {
            console.log('登录失败');
            this.errortip=true;
            this.errorTip='登录失败';
          }
        })
      }
		}
	}
</script>
<style></style>

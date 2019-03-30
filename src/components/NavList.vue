<template>
	<div id="app">
      <ul>
        <li>
          <!--router-link为路由跳转标签，to表示跳转的目录，在router文件的index.js设定-->
          <router-link :to="urlData.hello">hello</router-link>
        </li>
        <li>
          <router-link :to="urlData.hellotest">hellotest</router-link>
        </li>
      </ul>
	</div>
</template>
<script>
	export default {
		name:'navlist',
		data(){
			return {
			  urlData:{
          hello:'/',
          hellotest:'/hello'
        }
			}
		},
		methods:{

		}
	}
</script>
<style>
  ul{
    list-style: none;
    text-align: center;
  }
</style>

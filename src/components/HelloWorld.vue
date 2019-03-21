<template>
  <div class="hello">
    {{test.split("").reverse().join("")}}
    <p></p>
    <span v-bind:class="test">wqeqw</span>
    <div v-if="show">
      <span>测试展示</span>
    </div>
    <div v-else>
      <span>测试隐藏</span>
    </div>
    <div v-show="show">
      <span>show的展示与隐藏</span>
    </div>
    <div>
      <table>
        <tr v-for="user in users" :key="user.id"><td>{{user.name}}</td><td>{{user.age}}</td></tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      Ts:'1asd',
      test:'li',
      show:true,
      users:[
        {
          id:1,
          name:'李四',
          age:22
        },
        {
          id:1,
          name:'张三',
          age:21
        },
        {
          id:2,
          name:'王五',
          age:23
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: blue;
}
</style>

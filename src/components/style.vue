<template>
  <div>
    <p v-bind:class="styleObj">我是style哈按时发放哈哈</p>
    <p v-bind:class="[{a:user.id=='a'},'info'+user.id]" v-for="user in users">{{user.name}}</p>
  </div>
</template>
<script>
export  default {
   name:'Style',
   data(){
     return{
       active:false,
       target:true,
       users:[
         {
           id:'a',
           name:'zs'
         },
         {
           id:'b',
           name:'ls'
         },
         {
           id:'c',
           name:'ww'
         }
       ]
     }
   },
  methods:{

  },
  computed: {
    styleObj(){
      return{
        "a":this.active,
        "b":this.target
      }
    }
  },
  watch: {

  }
}
</script>
<style>
  .a{
    color: red;
  }
  .b{
    color: blue;
  }
</style>

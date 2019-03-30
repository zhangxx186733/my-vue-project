import Vue from 'vue'
import Router from 'vue-router'
import Hellow from  '../components/HelloWorld'
import Test from '../components/RouterTest'

Vue.use(Router)

export default new Router({
  routes:[{
    path:'/',
    component:Hellow
  },
    {
      path:'/hello',
      component:Test
    },
  ]
});

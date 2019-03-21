import Vue from 'vue'
import Router from 'vue-router'
import TestDemo from  '@/components/TestDemo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TestDemo',
      component: TestDemo
    }
  ]
})

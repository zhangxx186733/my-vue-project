import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/forrouter/index'
import KeCheng from '@/components/forrouter/kecheng'
import ZhuanJia from '@/components/forrouter/zhuanjia'
import JiaBan from '@/components/forrouter/page/jiaban'
import JJL from '@/components/forrouter/page/jjl'
import SSX from '@/components/forrouter/page/ssx'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',//html默认类active
  routes: [{
    path: '/',
    namne: 'index',
    component: Index
  },
    {
      path: '/kecheng',
      name: 'kecheng',
      component: KeCheng,
      //默认重定向到jiaban子路由
      redirect: '/kecheng/jiaban',
      children: [//嵌套路由
        {
          path: 'jiaban',
          name: 'jiaban',
          component: JiaBan,
        },
        {
          path: 'jjl/:gz/:obj',//传递参数，key为gz
          name: 'jjl',
          component: JJL,
        },
        {
          path: 'ssx',
          name: 'ssx',
          component: SSX,
        }
      ]
    },
    {
      path: '/zhuanjia',
      name: 'zhuanjia',
      component: ZhuanJia
    },
  ]
});

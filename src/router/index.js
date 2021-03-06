import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      component: resolve => require(['../components/page/Login.vue'], resolve),
      name: 'login',
      meta: {title: '登录'},
    },
    {
      path: '/',
      component: resolve => require(['../components/common/Blog.vue'], resolve),
      name: 'blog',
      meta: {title: 'Blog'},
    },
    {
      path: '/home',
      component: resolve => require(['../components/common/Home.vue'], resolve),
      name: 'home',
      meta: {title: '自述文件'},
      children: [
        {
          path: '/dashboard',
          component: resolve => require(['../components/page/Dashboard.vue'], resolve),
          meta: {title: '系统首页'}
        },
        {
          path: '/user',
          component: resolve => require(['../components/page/User.vue'], resolve),
          meta: {title: '用户管理'},
          children: [
            {
              path: '/test',
              component: resolve => require(['../components/page/Test.vue'], resolve),
              meta: {title: 'test'}
            },
          ]
        },
        {
          path: '/icon',
          component: resolve => require(['../components/page/Icon.vue'], resolve),
          meta: {title: '自定义图标'}
        }
      ]
    },
  ]
})



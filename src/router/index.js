import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
// 导入刚才编写的组件
import AppIndex from '@/components/home/AppIndex'
import Login from '@/components/Login'
import Home from '@/components/Home'
import LibraryIndex from '../components/library/LibraryIndex'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      // 重定向到index页面
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'AppIndex',
          component: AppIndex,
          meta: {
            // 此路由信息是否需要检测
            requireAuth: true
          }
        },
        {
          path: '/library',
          name: 'Library',
          component: LibraryIndex,
          meta: {
            requireAuth: true
          }
        }
      ]
    }
  ]
})

// 全局路由守卫
router.beforeEach((to, from, next) => {
  // 判断该路由是否需要登陆权限
  if (to.meta.requireAuth) {
    // store中是否有user的信息：是否登录
    if (store.state.user.username) {
      next()
    } else {
      next({
        path: 'login',
        // 将跳转的路由path作为参数，登录成功后跳转到该路由：
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next()
  }
})
// 写在main里面就不用这一句
export default router

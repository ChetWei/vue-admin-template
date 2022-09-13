import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    children: [{
      path: '',
      name: '首页',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },
  {
    path: '/mydata',
    component: Layout,
    redirect: '/mydata/upload',
    name: '数据',
    meta: { title: '数据', icon: 'el-icon-s-data' },
    children: [
      {
        path: 'upload',
        name: 'Upload',
        component: () => import('@/views/mydata/Upload'),
        meta: { title: '我的数据', icon: 'el-icon-upload' }
      },
      {
        path: 'deal',
        name: 'Deal',
        component: () => import('@/views/mydata/Processed'),
        meta: { title: '处理数据', icon: 'el-icon-s-platform' }
      },
      {
        path: 'processed',
        name: 'Processed',
        component: () => import('@/views/mydata/Processed'),
        meta: { title: '处理结果', icon: 'el-icon-view' }
      }
    ]
  },

  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: '/example/table',
  //   name: 'Example',
  //   meta: { title: 'Example', icon: 'el-icon-s-help' },
  //   children: [
  //     {
  //       path: 'table',
  //       name: 'Table',
  //       component: () => import('@/views/table/index'),
  //       meta: { title: 'Table', icon: 'table' }
  //     },
  //     {
  //       path: 'tree',
  //       name: 'Tree',
  //       component: () => import('@/views/tree/index'),
  //       meta: { title: 'Tree', icon: 'tree' }
  //     }
  //   ]
  // },

  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()


export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router

import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { sessionCache } from '@/utils/storage'

const router = createRouter({
  history: createWebHistory('/product/'),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/login',
      component: () => import('@/pages/login/Index.vue'),
    },
    {
      path: '/home',
      redirect: '/graphicsTravel',
      component: () => import('@/pages/home/Index.vue'),
      children: [
        /**图文制作-旅游 */
        {
          path: '/graphicsTravel',
          redirect: '/graphicsTravel/correction',
          component: () => import('@/pages/graphicsTravel/Index.vue'),
          children: [
            /**预报订正与导出 */
            {
              path: 'correction',
              component: () => import('@/pages/graphicsTravel-correction/Index.vue'),
            },
            /**旅游活动 */
            {
              path: 'activity',
              component: () => import('@/pages/graphicsTravel-activity/Index.vue'),
            },
            // /**预报产品-景观专题 */
            //   {
            //     path: 'activity',
            //     component: () => import('@/pages/graphicsTraffic-activity/Index.vue'),
            //   },
            // /**预报产品-旅游气象预报 */
            //   {
            //     path: 'activity',
            //     component: () => import('@/pages/graphicsTraffic-activity/Index.vue'),
            //   },
            // /**操作记录 */
            //   {
            //     path: 'activity',
            //     component: () => import('@/pages/graphicsTraffic-activity/Index.vue'),
            //   },
          ],
        },
        /**图文制作-交通 */
        {
          path: '/graphicsTraffic',
          component: () => import('@/pages/graphicsTraffic/Index.vue'),
        },
        /**产品日志 */
        {
          path: '/log',
          component: () => import('@/pages/log/Index.vue'),
        },
      ],
    },
  ],
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  // if (to.path === '/login') return next()
  // if (sessionCache.getItem('userType') == null) return next('/login')
  if (to.matched.length === 0) {
    from.path ? next({ path: from.path }) : next('/')
  } else {
    next()
  }
})
router.afterEach(() => {
  NProgress.done()
})
export default router

import { createRouter, createWebHistory } from 'vue-router'
import { Toast } from 'vant'

const router = createRouter({
  history: createWebHistory('/tour/'),
  routes: [
    {
      path: '/login',
      component: () => import('@/pages/Login.vue'),
    },
    {
      path: '/',
      redirect: '/home',
    },
    // 首页
    {
      path: '/home',
      component: () => import('@/pages/home/Index.vue'),
      redirect: '/travel-weather',
      children: [
        // 旅游天气
        {
          path: '/travel-weather',
          component: () => import('@/pages/travelWeather/Index.vue'),
        },
        // 特色景观
        {
          path: '/featured-landscape',
          component: () => import('@/pages/featuredLandscape/Index.vue'),
        },
        // 旅游活动
        {
          path: '/travel-activity',
          component: () => import('@/pages/travelActivity/Index.vue'),
        },
      ],
    },
    //预警详情
    {
      path: '/alarm-detail',
      component: () => import('@/pages/alarmDetail/Index.vue'),
    },
    //景点详情
    {
      path: '/attraction-detail/:id',
      component: () => import('@/pages/attractionDetail/Index.vue'),
    },
    //景点搜索
    {
      path: '/attraction-search',
      component: () => import('@/pages/attractionSearch/Index.vue'),
    },
    //活动详情
    {
      path: '/activity-detail/:id',
      component: () => import('@/pages/activityDetail/Index.vue'),
    },
  ],
})

router.beforeEach((to, from, next) => {
  Toast.loading({
    duration: 0,
    forbidClick: true,
    message: '加载中...',
  })
  // if (to.path === '/login') return next()
  // if (sessionStorage.getItem('userType') == null) return next('/login')
  if (to.matched.length === 0) {
    from.path ? next({ path: from.path }) : next('/')
  } else {
    next()
  }
})
router.afterEach(() => {
  Toast.clear()
})
export default router

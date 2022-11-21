import { createApp } from 'vue'
import App from './App.vue'
import router from './plugins/router'
import '@/assets/css/index.less'
import 'vant/lib/index.css'
const app = createApp(App)
app.use(router).mount('#app')

/** 登录 TODO 完成登录页后删除 */

import { server } from '@/plugins/axios'
import { localCache } from '@/utils/storage'

server
  .post(`/user/login`, {
    username: 'cityAdmin',
    password: 'jwyysBZhDdljIN/aPF3Hlg==',
  })
  .then((res) => {
    localCache.setItem('regionCode', res.data.region.code)
    localCache.setItem('accountName', res.data.name)
  })

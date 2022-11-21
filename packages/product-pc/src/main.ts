import { createApp } from 'vue'
import App from './App.vue'
import { registerElementPlus } from './plugins/element'
import router from './plugins/router'
import '@/assets/css/index.less'
const app = createApp(App)
registerElementPlus(app)
app.use(router)
app.mount('#app')

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
  })

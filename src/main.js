import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
// import 'vant/lib/index.css'
import 'vant/lib/index.less'
import 'amfe-flexible'
// import '@/styles/icon.less'
// import '@/styles/reset.less'
import '@/styles/index.less'

// 注册全局
import MyIcon from '@/components/MyIcon.vue'

import * as obj from '@/filters'
Vue.component('MyIcon', MyIcon)

// 一次性把filters/index.js中所有的按需导出全部导出
// 作为obj的属性
Vue.use(Vant)
Object.keys(obj).forEach(key => {
  Vue.filter(key, obj[key])
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

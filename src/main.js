import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import FastClick from "fastclick"
import VueLazyload from 'vue-lazyload'


// 导入自定义插件
import toast from "components/common/toast"
// 安装
Vue.use(toast)

FastClick.attach(document.body)
Vue.use(VueLazyload,{
  loading:require('./assets/img/common/loading.jpg')
})

Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// 使用事件总线
Vue.prototype.$bus = new Vue()

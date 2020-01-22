import Vue from 'vue'
import App from './App.vue'

// 完整引入 Element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 路由引入
import router from './router'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

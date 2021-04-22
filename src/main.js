// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 设置反向代理，前端请求默认发送到 http://localhost:8488/api
var axios = require('axios')
// 默认地址 后端：src\main\resources 文件夹下找到 application.properties 文件配置端口，即加上 server.port=8443（初始应该是空白的，后期还要配置数据库等）
axios.defaults.baseURL = 'http://127.0.0.1:8488/api'
// 全局注册，之后可在其他组件中通过 this.$axios 发送数据
Vue.prototype.$axios = axios
Vue.config.productionTip = false

Vue.use(ElementUI)

/* eslint-disable  */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  components: { App },
  template: '<App/>'
})

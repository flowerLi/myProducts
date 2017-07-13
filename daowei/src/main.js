// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App'
import router from './router/routs'
import './mock/mockServer'

import './css/style.css'
import './css/fonts.css'


Vue.use(VueRouter)
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})

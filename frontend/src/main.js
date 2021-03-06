// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Login from './components/Login'
import Stocks from './components/Stocks'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

new Vue({
  el: '#login',
  router,
  components: { Login },
  template: '<Login/>'
})

new Vue({
  el: '#stocks',
  router,
  components: { Stocks },
  template: '<Stocks/>'
})

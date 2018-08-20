import Vue from 'vue'
import Layout from './components/layout'
import router from './router/router.js'
import VueResource from 'vue-resource'
Vue.use(VueResource)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,   //router:router,
  components: { Layout },
  template: '<Layout/>'
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
require('../node_modules/skeleton-framework/dist/skeleton.min.css')
import firebaseui from 'firebaseui'
// import VueFire from 'vuefire'
// import Firebase from 'firebase'
import AboutComponent from './components/AboutComponent.vue'
import PostComponent from '@/components/PostComponent.vue'


Vue.use(VueFire)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

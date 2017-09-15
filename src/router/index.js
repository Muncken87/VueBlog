import Vue from 'vue'
import Router from 'vue-router'
import AboutComponent from '../components/AboutComponent.vue'
import PostComponent from '../components/PostComponent'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/about',
      component: AboutComponent
    },
    {
      path: '/posts',
      component: PostComponent
    }
  ],
  mode: 'history'
})

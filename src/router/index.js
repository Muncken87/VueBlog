import Vue from 'vue'
import Router from 'vue-router'
import AboutComponent from '@/components/AboutComponent.vue'
import PostComponent from '@/components/PostComponent'
import PostListComponent from '@/components/PostListComponent'
import PostInfoComponent from '@/components/PostInfoComponent'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: PostListComponent
    },
    {
      path: '/about',
      component: AboutComponent
    },
    {
      path: '/posts',
      component: PostComponent
    },
    {
      path: '/post/:id',
      component: PostInfoComponent,
      props: true
    }
  ],
  mode: 'history'
})

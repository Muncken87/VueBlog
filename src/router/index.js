import Vue from 'vue'
import Router from 'vue-router'

import AboutComponent from '@/components/AboutComponent.vue'
import PostComponent from '@/components/PostComponent'
import PostListComponent from '@/components/PostListComponent'
import PostInfoComponent from '@/components/PostInfoComponent'
import NewPostComponent from '@/components/NewPostComponent'
// import Auth from '@/components/Auth.vue'
// import AuthSuccess from '@/components/AuthSuccess'


Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/auth',
    //   component: Auth
    // },
    // {
    //   path: '/success',
    //   component: AuthSuccess
    // },
    {
      path: '/',
      component: PostComponent
    },
    {
      path: '/about',
      component: AboutComponent
    },
    {
      path: '/new',
      component: NewPostComponent
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

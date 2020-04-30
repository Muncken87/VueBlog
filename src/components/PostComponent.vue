<template>
  <div class="post-list">
    <header>
      <h2>Alexander Munck</h2>
      <p>Front-end developer / Freelancer</p>
    </header>
      <section class="m-fixer">
        <!-- <transition-group name="fade" tag="div"> -->
          <div v-for="(post, index) in posts" v-bind:key="post['.key']">
           <app-post-list :post="post"></app-post-list>
          </div>
        <!-- </transition-group> -->
      </section>
      <div class="clear"></div>
  </div>
</template>

<script>
import PostListComponent from './PostListComponent'

export default {
  name: 'home',
  components: {
    appPostList: PostListComponent
  },
  data () {
    return {
      hidden: false,
      selected: [],
        posts: [
  { title: '2017-09-24',
   image: 'https://github.com/Muncken87/Modal/blob/master/app/assets/images/p1.png?raw=true',
   description: 'Vue.js Filters'},
  { title: '2017-03-12',
   image: 'https://github.com/Muncken87/Modal/blob/master/app/assets/images/p2.jpg?raw=true',
   description: 'Angular 4 Types'},
  { title: '2017-04-01',
   image: 'https://raw.githubusercontent.com/Muncken87/Modal/master/app/assets/images/p3.jpg',
   description: 'Responsive Design'},
  { title: '2017-12-24',
   image: 'https://68.media.tumblr.com/72507162d00d478427e09cf3cbe6ce65/tumblr_nhla1bRknd1so3sado1_r1_500.gif',  description: 'Sass Mixins'},
],
    }
  },
 created(){
  //  console.log(this.posts);
 }
}
</script>

<style lang="sass" scoped>

.post-list
  transition: left 0.2s ease

  .m-fixer
    margin-left: -15px
    margin-right: -15px
    display: block
    clear: both
    overflow: hidden

    @media(max-width: 865px)
      margin: 0

  header
    width: 100%
    margin-bottom: 4em
    text-align: left

    h2
      font-weight: bold
      margin: 2em 0 0em 0
      font-size: 36px
      color: #ffc85e

    p
      font-weight: 100
      font-size: 20px
      color: #aaa
      margin-top: 10px

.hide
  font-size: 8px
  height: 38px

.fade-enter-active, .fade-leave-active
  transition-property: opacity
  transition-duration: .25s


.fade-enter-active


.fade-enter, .fade-leave-active
  opacity: 0
</style>


<!-- [
  { title: '2017-09-24',
   image: 'https://github.com/Muncken87/Modal/blob/master/app/assets/images/p1.png?raw=true',
   description: 'Vue.js Filters'},
  { title: '2017-03-12',
   image: 'https://github.com/Muncken87/Modal/blob/master/app/assets/images/p2.jpg?raw=true',
   description: 'Angular 4 Types'},
  { title: '2017-04-01',
   image: 'https://raw.githubusercontent.com/Muncken87/Modal/master/app/assets/images/p3.jpg',
   description: 'Responsive Design'},
  { title: '2017-12-24',
   image: 'https://68.media.tumblr.com/72507162d00d478427e09cf3cbe6ce65/tumblr_nhla1bRknd1so3sado1_r1_500.gif',  description: 'Sass Mixins'},
] -->

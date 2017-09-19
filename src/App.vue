<template>
  <div id="app" v-bind:class="{ active: seen }">
    <!-- <router-view></router-view> -->
    <app-nav v-bind:class="{ active: seen }"></app-nav>
    <app-sidebar v-bind:class="{ move: seen }"></app-sidebar>
    <p class="click" @click="seen = !seen" v-bind:class="{ move: seen }">
      <span>-</span>
      <span>-</span>
      <span>-</span>
    </p>
    <div class="container text-center">
      <!-- <h2>A dead simple, responsive boilerplate.</h2> -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

import NavComponent from './components/NavComponent'
import PostComponent from './components/PostComponent'
import SidebarComponent from './components/SidebarComponent'

export default {
  components: {
    appNav: NavComponent,
    appPostList: PostComponent,
    appSidebar: SidebarComponent
  },
  data () {
    return {
      seen: false
    }
  }
}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=Raleway:100,300,400,700')
@font-face
  font-family: 'hooge'
  src: url('assets/fonts/hooge.ttf') format('truetype')
  font-weight: normal
  font-style: normal
#app
  transition: all 0.2s ease

img
  height: auto
  max-width: 100%

*
  box-sizing: border-box

html
  font-size: 62.5%
body
  margin: 0
  padding: 0
  font-family: 'Raleway', sans-serif
  font-size: 62.5%

  .text-center
    text-align: center

    h2
      font-weight: 100
      margin: 5em 0em
.click
  position: absolute
  background-color: white
  padding: 10px 15px
  font-family: hooge
  font-size: 14px
  color: white
  text-shadow: 1px 1px 0px black, -1px 1px 0px black, -1px -1px 0px black, 1px -1px 0px black
  left: 0px
  top: 0
  transition: left 0.2s ease
  cursor: pointer

.move
  left: 250px

.active
  padding-left: 250px
  transition: all 0.2s ease
</style>

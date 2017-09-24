<template>
  <div id="app" v-bind:class="{ active: seen }">
    <!-- <app-sidebar v-bind:class="{ move: seen }"></app-sidebar> -->
    <!-- <p class="click" @click="seen = !seen" v-bind:class="{ move: seen }">
      <span>-</span>
      <span>-</span>
      <span>-</span>
    </p> -->
    <app-nav></app-nav>
    <div class="container text-center">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

// import PostComponent from './components/PostComponent'
// // import SidebarComponent from './components/SidebarComponent'
import NavComponent from './components/NavComponent'
export default {
  components: {
    appNav: NavComponent
  },
  data () {
    return {
      seen: false
    }
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
    if(user) {
      this.$router.push('/success')
    } else {
      this.$router.push('/auth')
    }
   });
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

.container
  max-width: 700px !important

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
  background-image: url("./assets/pattern.png")
  background-size: 15px

  .text-center
    text-align: center

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
  overflow: hidden
</style>

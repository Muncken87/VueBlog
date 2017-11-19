<template>
  <div id="app" v-bind:class="{ active: seen }">
     <!-- <app-side-bar v-bind:class="{ move: seen }"></app-side-bar>
     <p class="click" @click="seen = !seen" v-bind:class="{ move: seen }">
      <span>-</span>
      <span>-</span>
      <span>-</span>
    </p>  -->
    <app-nav></app-nav>
    <div class="container text-center">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

// import PostComponent from './components/PostComponent'
// import SideBarComponent from './components/SideBarComponent'
import NavComponent from './components/NavComponent'
export default {
  components: {
    appNav: NavComponent
    // appSideBar: SideBarComponent
  },
  data () {
    return {
      seen: false
    }
  // },
  // created() {
  //   firebase.auth().onAuthStateChanged((user) => {
  //   if(user) {
  //     this.$router.push('/success')
  //   } else {
  //     this.$router.push('/auth')
  //   }
  //  });
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

code
  font-size: 16px
  text-align: left

pre
  margin: 0

.container
  max-width: 1165px

  @media(max-width: 865px)
    max-width: 100%

img
  height: auto
  max-width: 100%

*
  box-sizing: border-box

body
  margin: 0
  padding: 0
  // font-family: 'Raleway', sans-serif
  font-family: 'Roboto', sans-serif
  font-size: 62.5%
  background-image: url("./assets/pattern.png")
  background-size: 15px
  -webkit-font-smoothing: subpixel-antialiased

  .text-center
    text-align: center

.click
  position: absolute
  background-color: white
  font-family: hooge
  font-size: 14px
  color: white
  text-shadow: 1px 1px 0px black, -1px 1px 0px black, -1px -1px 0px black, 1px -1px 0px black
  left: 1em
  top: 18.5px
  transition: left 0.2s ease
  cursor: pointer
  z-index: 9999

.move
  left: 250px

.active
  padding-left: 250px
  transition: all 0.2s ease
  overflow: hidden


</style>

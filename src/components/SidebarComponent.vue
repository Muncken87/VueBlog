<template>
  <nav class="sidebar">
    <app-nav></app-nav>
  </nav>
</template>

<script>

import NavComponent from '@/components/NavComponent'
export default {
  props: ['seen'],
  components: {
    appNav: NavComponent
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="sass" scoped>
.sidebar
  position: fixed
  left: -250px
  top: 0
  height: 100vh
  width: 250px
  background-color: #fff
  transition: left 0.2s ease

  p
    position: absolute

  h2
    font-weight: 100
    margin: 0
    margin-top: 1em

.move
  left: 0


</style>

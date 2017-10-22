<template>
  <nav class="sidebar">
    
  </nav>
</template>

<script>
export default {
  props: ['seen'],
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
  top: 66px
  height: 100vh
  width: 250px
  background-color: #000
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

<template>
  <nav class="sidebar">
    <h2>Sidebar</h2>
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
  top: 0
  height: 100vh
  width: 250px
  background-color: #ccc
  transition: left 0.2s ease
  padding: 25px

  p
    position: absolute

  h2
    font-weight: 100
    margin: 0

.move
  left: 0

</style>

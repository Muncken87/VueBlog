<template>
  <nav>
    <div class="container flex">
    <li><router-link to="/about">About</router-link></li>
    <li><router-link to="/posts">Posts</router-link></li>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'nav'
}
</script>

<style lang="sass" scoped>
nav
  width: 100%
  position: fixed
  left: 0
  top: 0
  background-color: white
  padding: 2em 0em

  .flex
    display: flex
    align-items: center
    justify-content: center

    li
      color: white
      list-style-type: none
      margin: 0 0 0 2em
      line-height: 1.3
      font: 100 2em/1 'Raleway'

    h3
      color: black
      font-weight: bold
      letter-spacing: 0.15em

</style>

<template>
  <nav>
    <li><router-link to="/about">About</router-link></li>
    <li><router-link to="/posts">Posts</router-link></li>
  </nav>
</template>

<script>
export default {
  name: 'nav'
}
</script>

<style lang="sass" scoped>
nav
  margin-top: 2em
  top: 50%
  position: relative
  transform: translate(0%, -50%)
  li
    list-style-type: none
    background-color: black
    a
      text-decoration: none
      font-size: 14px
      color: white
      padding: 1em 2em
      display: block

</style>

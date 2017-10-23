<template>
  <nav>
    <div class="container">
      <li><router-link to="/posts">Posts</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/new">New Post</router-link></li>
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
  position: relative
  background-color: white
  border-bottom: 1px solid rgba(0,0,0,0.07)
  li
    list-style-type: none
    display: inline-block
    margin: 0 10px 0 10px
    a
      text-decoration: none
      font-size: 20px
      color: #aaa
      padding: 1em 1em 1em 0
      display: block
      font-weight: 100

</style>

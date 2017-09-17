<template>
  <div>
    <h2>Hello Post {{$route.params.id}}</h2>
  </div>
</template>

<script>
export default {
  name: 'post-info',
  data () {
    return {
  }
},
created: {
  //  return firebase.database().ref('/movies').once('value');
}
}
</script>

<style lang="sass" scoped>

</style>

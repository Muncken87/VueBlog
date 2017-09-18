<template>
  <div>
    <h3>Hello Post {{$route.params.id}} | {{title}} | {{date}}</h3>
    <img v-bind:src="image"/>
  </div>
</template>

<script>
export default {
  name: 'post-info-component',
  data () {
    return {
      title: '',
      date: ''
  }
},
created() {
     let self = this;
     var a = firebase.database().ref('/posts/' + this.$route.params.id).once('value')
     .then (function(item){
       console.log(item.val());
       self.title = item.val().title;
     })
     console.log(this.$route.params.id);
}
}
</script>

<style lang="sass" scoped>

</style>

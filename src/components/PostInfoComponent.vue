<template>
  <div class="post-detail-container">
    <div class="bg-image" v-bind:style='{ backgroundImage: "url(" + image + ")", }'></div>
    <h2 class="post-detail-title">{{title}}</h2>
    <p class="post-detail-date">{{date}}</p>
    <p class="post-detail-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>
</template>

<script>
export default {
  name: 'post-info-component',
  data () {
    return {
      title: '',
      date: '',
      image: ''
  }
},
created() {
     let self = this;
     var a = firebase.database().ref('/posts/' + this.$route.params.id).once('value')
     .then (function(item){
       console.log(item.val());
       self.title = item.val().title;
       self.date = item.val().date;
       self.image = item.val().image;
     })
     console.log(this.$route.params.id);
}
}
</script>

<style lang="sass" scoped>
.post-detail-container
  max-width: 700px
  margin: 0 auto
  position: relative
  display: block
  .post-detail-title
    margin: 1em 0 0 0
    font-weight: bold

  .post-detail-date
    font-weight: 100
    font-size: 20px
    margin: 1em 0 0 0

  .bg-image
    margin-top: 100px
    max-width: 100%
    height: 100%
    background-position: center center
    background-size: cover
    height: 350px

  .post-detail-body
    font-size: 14px
    text-align: left
    margin: 2em 0em
    line-height: 1.5em
    padding: 0 0.5em
</style>

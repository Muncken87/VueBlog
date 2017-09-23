<template>
  <div class="post-detail-container">
    <h2 class="post-detail-title">{{title}}</h2>
    <p class="post-detail-date">{{date}}</p>
    <div class="bg-image" v-bind:style='{ backgroundImage: "url(" + image + ")", }'></div>
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
      //  console.log(item.val());
       self.title = item.val().title;
       self.date = item.val().date;
       self.image = item.val().image;
     })
    //  console.log(this.$route.params.id);
}
}
</script>

<style lang="sass" scoped>
.post-detail-container
  line-height: 1.4
  .post-detail-title
    margin: 5em 0 0 0
    font-weight: 300
    font-size: 36px

  .post-detail-date
    margin: 20px 0px
    color: #b2b9be
    font-size: 13px
    text-transform: uppercase
    letter-spacing: 2px

  .bg-image
    max-width: 100%
    height: 100%
    background-position: center center
    background-size: cover
    height: 320px
    margin-top: 5em

  .post-detail-body
    font-size: 16px
    text-align: left
    margin: 2em 0em
    line-height: 1.7
    padding: 0 0.5em
    -webkit-font-smoothing: antialiased
    color: #666
</style>

<template>
  <div class="post-detail-container">
    <h2 class="post-detail-title">{{title}}</h2>
    <p class="post-detail-date">{{date}}</p>
    <div class="bg-image" v-bind:style='{ backgroundImage: "url(" + image + ")", }' v-cloak></div>
    <p class="post-detail-body" v-html="compiledMarkdown">{{text}}</p>
  </div>
</template>

<script>
var marked = require('marked');
export default {
  name: 'post-info-component',
  firebase: {
    posts: postsRef
  },
  data () {
    return {
      title: '',
      date: '',
      image: '',
      text: ''
  }
},
created() {
  let self = this;
  var a = firebase.database().ref('/posts/' + this.$route.params.id).once('value')
    .then (function(item){
      //  console.log(item.val());
      self.title = item.val().title;
      self.text = item.val().text;
      self.date = item.val().date;
      self.image = item.val().image;
     })
    //  console.log(this.$route.params.id);
},
  computed: {
    compiledMarkdown: function() {
      if (this.text == " " || this.text == null) {
        console.log("No Markdown");
      }
      else {
        return marked(this.text, { sanitize: true})
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.post-detail-container
  line-height: 1.4
  .post-detail-title
    margin: 2em 0 0 0
    font-weight: 400
    font-size: 36px
    text-align: left

  .post-detail-date
    margin: 20px 0px
    color: #000
    font-size: 13px
    text-transform: uppercase
    letter-spacing: 2px
    text-align: left

  .bg-image
    max-width: 100%
    height: 100%
    background-position: center center
    background-size: cover
    height: 565px
    margin-top: 5em
    @media(max-width: 865px)
      height: 266px

  .post-detail-body
    font-size: 1.06667rem
    text-align: left
    line-height: 1.875
    padding: 0 0.5em
    -webkit-font-smoothing: antialiased
    color: #666
    max-width: 750px
    margin: 2em auto
    word-break: normal
    word-wrap: break-word
    overflow-wrap: break-word
    line-break: strict

[v-cloak]
  display: none

[v-cloak]
  &:before 
    content: "loading…" 
</style>

<template>
  <section class="post-list">
    <div v-for="(post, index) in posts">
      <div class="box" @click="showTitle(post)">
        <p>{{post.date}}</p>
        <h4>{{post.title}}</h4>
        <div class="bg-image" v-bind:style='{ backgroundImage: "url(" + post.image + ")", }'>
        </div>
        <div class="clear"></div>
        <!-- <span @click="removePost(post)">X</span> -->
      </div>
    </div>
    <div class="clear"></div>
    <form id="form" v-on:submit.prevent="addPost" v-if="hidden">
      <div class="row">
        <div class="four columns">
          <label for="postTitle">Title</label>
          <input type="text" class="u-full-width" id="postTitle" v-model="newPost.title">
        </div>
        <div class="four columns">
          <label for="postDate">Date</label>
          <input type="text" class="u-full-width" id="postDate" v-model="newPost.date">
        </div>

        <div class="four columns">
          <label for="postImage">Image Url</label>
          <input type="text" class="u-full-width" id="postImage" v-model="newPost.image">
        </div>

        <div class="twelve columns">
          <label for="postImage">Text</label>
          <textarea type="text" class="u-full-width" id="postText" v-model="newPost.text"></textarea>
        </div>

        <div class="one column">
          <input type="submit" class="button-primary" value="Add Post">
        </div>
      </div> <!-- end row -->
    </form>
    <input type="submit" class="hide" value="Hide Form" @click="hidden = !hidden">
  </section>
</template>

<script>
import Firebase from 'firebase'
let config = {
    apiKey: "AIzaSyBKWiS0-Wu0HpPvu1DXxlCvlsUtcbPpCjI",
    authDomain: "vue-blog-9e475.firebaseapp.com",
    databaseURL: "https://vue-blog-9e475.firebaseio.com",
    projectId: "vue-blog-9e475",
    storageBucket: "vue-blog-9e475.appspot.com",
    messagingSenderId: "467045898200"
};

let app = Firebase.initializeApp(config)
let db = app.database()
let postsRef = db.ref('posts')

export default {
  name: 'post-list',
  firebase: {
    posts: postsRef
  },
  data () {
    return {
      newPost: {
        date: '',
        image: 'http://',
        title: '',
        text: ''
      },
      hidden: false
    }
  },
  methods: {
  addPost: function () {
     postsRef.push(this.newPost);
     this.newPost.title = '';
     this.newPost.date = '';
     this.newPost.image = 'http://';
     this.newPost.text = '';
     this.seen = false;
   },
   removePost: function (post) {
      postsRef.child(post['.key']).remove()
   },
   showTitle: function(text) {
     console.log(text.title);
   }
  }
}
</script>

<style lang="sass" scoped>
.post-list
  transition: left 0.2s ease
  .box
    display: block
    float: left
    width: calc(25% - 20px)
    margin: 10px
    position: relative
    border: 1px solid black
    background-color: #333
    height: 60px
    transition: all 0.2s cubic-bezier(0.55, 0.09, 0, 1.07)

    &:hover
      background-color: rgba(51, 125, 163, 0.79)
      cursor: pointer

    @media(max-width: 1200px)
      width: 100%
      margin: 0
      margin-bottom: 20px

    .bg-image
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      background-position: 0% 39%
      background-size: cover
      opacity: 0.7

    span
      color: red
      font-size: 14px
      position: relative
      background-color: white
      padding: 5px

    p
      font-family: hooge
      font-size: 8px
      color: white
      // -webkit-text-stroke: 1px black
      -webkit-font-smoothing: none
      letter-spacing: 0.05em
      margin: 0
      position: absolute
      z-index: 9999
      left: 8%
      top: 30%
      text-shadow: 1px 1px 0px black, -1px 1px 0px black, -1px -1px 0px black, 1px -1px 0px black

    h4
      font-family: hooge
      font-size: 16px
      color: white
      // -webkit-text-stroke: 1px black
      -webkit-font-smoothing: none
      letter-spacing: 0.05em
      margin: 0
      position: absolute
      z-index: 9999
      left: 8%
      top: 50%
      text-shadow: 1px 1px 0px black, -1px 1px 0px black, -1px -1px 0px black, 1px -1px 0px black
  .clear
    &:after,&:before
      clear:  both
      content: ''
      display: table

  #form
    margin-top: 3em

    label
      text-align: left
      font-size: 2em

    textarea
      min-height: 200px
      max-width: 100%

    input
      height: 38px

    .button-primary
      font-size: 11px
      margin-top: 20px

.hide
  font-size: 8px
  height: 38px

</style>


<!-- [
  { title: '2017-09-24',
   image: 'https://github.com/Muncken87/Modal/blob/master/app/assets/images/p1.png?raw=true',
   description: 'Vue.js Filters'},
  { title: '2017-03-12',
   image: 'https://github.com/Muncken87/Modal/blob/master/app/assets/images/p2.jpg?raw=true',
   description: 'Angular 4 Types'},
  { title: '2017-04-01',
   image: 'https://raw.githubusercontent.com/Muncken87/Modal/master/app/assets/images/p3.jpg',
   description: 'Responsive Design'},
  { title: '2017-12-24',
   image: 'https://68.media.tumblr.com/72507162d00d478427e09cf3cbe6ce65/tumblr_nhla1bRknd1so3sado1_r1_500.gif',  description: 'Sass Mixins'},
] -->

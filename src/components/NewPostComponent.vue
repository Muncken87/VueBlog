<template>
<form id="form" v-on:submit.prevent="addPost">
  <!-- v-if="hidden" -->
  <div class="row">

    <div class="six columns">
      <input
       type="text"
       class="u-full-width"
       placeholder="Title"
       id="postTitle"
       v-model="newPost.title"
      >
      
      <input
       type="text"
       class="u-full-width"
       placeholder="Date" id="
       postDate" v-model="newPost.date"
      >

      <input
       type="text"
       class="u-full-width"
       placeholder="Image Url"
       id="postImage"
       v-model="newPost.image"
      >

      <textarea
        type="text"
        class="u-full-width"
        placeholder="Content"
        id="postText"
        v-model="newPost.text"
        @input="update">
      </textarea>

      <input
       type="submit"
       class="button-primary"
       value="Add Post"
      >
    </div>

    <div class="six columns">
      <div class="markdown" v-html="compiledMarkdown"></div>
    </div>
  </div> <!-- end row -->
  <!-- <input type="submit" class="hide" value="Hide Form">  -->
  <!-- @click="hidden = !hidden" -->
</form>
</template>

<script>
var marked = require('marked');
var markdownString = '```js\n console.log("hello"); \n```';
export default {
  firebase: {
    posts: postsRef
  },
  data () {
    return {
      newPost: {
      date: '',
      image: 'http://',
      title: '',
      text: '',
      id: ''
      }
    }
  },
  methods: {
    addPost: function () {
      postsRef.push(this.newPost);
      this.newPost.title = '';
      this.newPost.date = '';
      this.newPost.image = 'http://';
      this.newPost.text = '';
      this.newPost.id = '';
      this.seen = false;
   },
    removePost: function (post) {
      postsRef.child(post['.key']).remove()
    },
     update: _.debounce(function (e){
     this.newPost.text = e.target.value
   }, 300)
  },
   computed: {
   compiledMarkdown: function() {
     return marked(this.newPost.text, { sanitize: true})
   }
 },
}

</script>

<style lang="sass" scoped>
form
  margin-top: 72px
  textarea
    max-width: 100%
    width: 100%
    resize: vertical
    margin: 0
  .markdown
    min-height: 50vh
    p
      text-align: left

</style>

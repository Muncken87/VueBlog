<template>
  <div>
    <router-link :to="'/post/'+ post['.key']">
      <div class="box" v-cloak>
        <p>{{post.date}}</p>
        <h4>{{post.title}}</h4>
        <div class="bg-image" v-bind:style='{ backgroundImage: "url(" + post.image + ")", }'></div>
        <!-- <span  @click="removePost(post)">X</span> -->
        <div class="clear"></div>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'post-list',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
    data () {
      return {
        selected: []
    }
  },
  computed: {
    postDetail(){
        console.log(this.post.id);
        db.ref()
        return '/post/${this.post.id}'

    }
  },
  methods:{
    selectedPost(post){
      this.selected = post;
    }
  }
}
</script>

<style lang="sass" scoped>
.box
  display: block
  float: left
  width: 100%
  margin: 10px
  position: relative
  border: 1px solid black
  background-color: #333
  height: 60px

  &:hover
    background-color: rgba(51, 125, 163, 0.79)
    cursor: pointer

  @media(max-width: 1000px)
    width: calc(50% - 20px)
    margin: 10px


  @media(max-width: 450px)
    width: 100%
    margin: 0 0 5px 0
    &:hover
      height: 100px

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

[v-cloak]
  display: none

</style>

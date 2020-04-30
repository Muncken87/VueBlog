<template>
    <router-link :to="'/post/'+ post['.key']">
      <div class="box">
        <div class="bg-image" :style='{ backgroundImage: "url(" + post.image + ")", }'v-if="post.image"></div>
        <!-- <span  @click="removePost(post)">X</span> -->
        <div class="box-info">
          <!-- <p>{{post.date}}</p> -->
          <h4>{{post.title}}</h4>
        </div>
        <div class="clear"></div>
      </div>
    </router-link>
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
  created() {
    console.log('hello');
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
  width: calc(25% - 30px)
  position: relative
  margin: 30px 15px

  @media(max-width: 865px)
    width: calc(50% - 30px)

  @media(max-width: 450px)
   width: 100%
   margin: 0 0 10px 0

  &:hover
    cursor: pointer

  .bg-image
    position: relative
    width: 100%
    height: 165px
    background-position: 50% 50%
    background-size: cover
    opacity: 1

  span
    color: red
    font-size: 14px
    position: relative
    background-color: white
    padding: 5px

  .box-info
    position: relative
    width: 100%
    display: block
    text-align: left

    p
      font-size: 8px
      color: white
      letter-spacing: 0.05em
      margin: 0
      position: absolute
      z-index: 9999
      left: 8%
      top: 30%
      // text-shadow: 1px 1px 0px black, -1px 1px 0px black, -1px -1px 0px black, 1px -1px 0px black

    h4
      font-size: 14px
      line-height: 1.875
      font-weight: 300
      color: #000
      letter-spacing: 0.05em
      margin: 0
      // text-shadow: 1px 1px 0px black, -1px 1px 0px black, -1px -1px 0px black, 1px -1px 0px black
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

</style>

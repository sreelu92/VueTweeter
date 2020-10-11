<template>
  <div id="container">
    <div id="tweetContainer" v-for="chat in chats" :key="chat.tweetId">
      <h4>{{chat.content}}</h4><br>
    </div>
  </div>
</template>

<script>
export default {
  name: "gettweet-page",
  computed: {
    chats() {
      return this.$store.state.tweets;
      
    }
  }
};
</script>

<style lang="scss" scoped>
#container{
  #tweetContainer{
    border:1px solid grey;
  }
}

</style>
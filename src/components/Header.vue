<template>
  <div id="container">
    <logout-page></logout-page>

    <div id="pageStyling">
      <h4 @click="home">Home</h4>
      <h4 @click="discover">Discover</h4>
      <h4 @click="MyTweets">My Tweets</h4>
      <h4 @click="feedPage">Feed Page</h4>
    </div>
  </div>
</template>

<script>
import LogoutPage from "../components/LogOut.vue";

export default {
  name: "header-page",
  components: {
    LogoutPage
  },
  methods: {
    home: function() {
      this.$router.push({ name: "home-page" });
    },
    discover: function() {
      this.$router.push({ name: "discover-page" });
    },
    MyTweets: function() {
      this.$router.push({ name: "tweets-page" });
    },
    feedPage: function() {
      this.$router.push({ name: "feed-page" });
    }
  }
};
</script>

<style lang="scss" scoped>
#container {
  #pageStyling {
    display: grid;
    column-gap: 4vw;
    grid-template-columns: repeat(4, 1fr);
    background: rgb(29, 161, 242);
    padding: 25px;
    color: white;
    font-size: smaller;
  }
}
</style>
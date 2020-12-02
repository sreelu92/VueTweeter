<template>
  <div id="container">
      <div id="con" v-for="tweet in tweets" :key="tweet.tweetId">
        <h3 class="alltweets">{{ "Username:" + "" + tweet.username }}</h3>
        <h3 class="alltweets">{{ "Tweet:" + "" + tweet.content }}</h3>
        <h3 class="alltweets">{{ "Tweeted on:" + "" + tweet.created_at }}</h3>
        <tweeterlike-page
          :usersid="tweet.userId"
          :tweetid="tweet.tweetId"
        ></tweeterlike-page>

        <comment-page :tweetid="tweet.tweetId"></comment-page>
      </div>
  </div>
</template>

<script>
import axios from "axios";
import CommentPage from "./comment.vue";
import TweeterlikePage from "./TweeterLike.vue";
export default {
  name: "alltweets-page",
  components: {
    CommentPage,
    TweeterlikePage
  },
  data() {
    return {
      tweets: []
    };
  },
  mounted: function() {
    this.AllTweets();
  },
  methods: {
    AllTweets: function() {
      axios
        .request({
          url: "https://mytweeters.ml/api/tweets",

          method: "GET",
          headers: {
            "Content-Type": "application/json",
          }
        })
        .then(response => {
          console.log(response)
          this.tweets = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
#container {
  display: grid;
  row-gap: 4vh;
  min-height: 10vh;
  align-items: center;
  justify-items: center;
  #con {
    display: grid;
    row-gap: 2vh;
    text-align: center;
    border: 1px solid black;
  }
  @media only screen and(min-width:600px) {
    #con {
      padding: 100px;
      .alltweets {
        font-size: xx-large;
      }
    }
  }
  @media only screen and(min-width:1020px) {
    
    #con {
      border-radius: 20px;
      .alltweets {
        font-size: x-large;
      }
    }
  }
}
</style>
<template>
  <div>
    <div id="container">
      <div id="con" v-for="tweet in tweets" :key="tweet.tweetId">
       
        <h3 class="alltweets">{{"Username:"+""+ tweet.username }}</h3>
        <h3 class="alltweets">{{"Tweet:"+""+ tweet.content }}</h3>
        <h3 class="alltweets">{{"Tweeted on:"+""+ tweet.createdAt }}</h3>
        <tweeterlike-page :usersid="tweet.userId" :tweetid="tweet.tweetId" ></tweeterlike-page>

        <comment-page  :tweetid="tweet.tweetId"></comment-page>

      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CommentPage from './comment.vue'
import TweeterlikePage from './TweeterLike.vue'
export default {
  name: "alltweets-page",
  components:{
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
          url: "https://tweeterest.ml/api/tweets",

          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "5GakGJ6glNqzt5rxIP5ON3KkBIgrLaZODehane6UFhUzc"
          }
        })
        .then(response => {
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
#container{
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
    row-gap: 4vh;
    min-height: 10vh;
    align-items: center;
    justify-items: center;
    #con{
      display: grid;
      row-gap: 2vh;
      text-align: center;
      border:1px solid black;

        
    }
    @media only screen and(min-width:600px) {
      #con{
        .alltweets{
          font-size: xx-large;
        }


      }

    }

}
</style>
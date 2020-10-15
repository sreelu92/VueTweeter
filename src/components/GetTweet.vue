<template>
  <div id="container">
    <div v-if="!isShowing">
    <h4>Are you sure?</h4>
    <button @click="deleteTweet">Ok</button>
    <button @click="notShow">Cancel</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "gettweet-page",
  data() {
    return {
      isShowing:false    }
  },
  props:{
    tweetsid:Number

  },
  mounted:function () {
    this.isShowing=false
  },
  methods: {
    deleteTweet() {
      axios
        .request({
          url: "https://tweeterest.ml/api/tweets",

          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "5GakGJ6glNqzt5rxIP5ON3KkBIgrLaZODehane6UFhUzc"
          },

          data: {
            loginToken: this.token,
            tweetId: this.tweetsid
          }
        })
        .then(response => {
          this.chats = response.data;
          this.myTweets();
          this.status="Tweet deleted"
        })
        .catch(error => {
          console.log(error);
          this.status="Something went wrong"
        });
    },
    notShow(){
      this.isShowing=true;
    } 
  },
};
</script>

<style lang="scss" scoped>
#container {
  #tweetContainer {
    border: 1px solid grey;
  }
}
</style>
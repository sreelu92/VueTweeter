<template>
  <div id="container">
    <div id="tweetStyle">
      <h3 id="tweeth3tag">Post your tweets here</h3>
      <textarea id="tweetTextarea" v-model="tweets" placeholder="Max 200 character" rows="4" cols="30"></textarea><br />
      <button  @click="createTweet" id="tweetButton">Tweet</button>
    </div>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import axios from "axios";
export default {
  name: "create-tweet",
  data() {
    return {
      tweets: "",
      token: cookies.get("loginToken"),
      chats: []
    };
  },
  
  methods: {
    createTweet: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/tweets",

          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "5GakGJ6glNqzt5rxIP5ON3KkBIgrLaZODehane6UFhUzc"
          },
          data: {
            content: this.tweets,
            loginToken: this.token
          }
        })
        .then(response => {
          console.log(response);

          this.chats.push(response.data);
          this.$store.commit("updateTweet", response.data);
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
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  #tweetStyle {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));

    #tweetTextarea {
      margin-top: 4vh;
      margin-left: 8vw;
    }
    #tweetButton {
      margin-left: 50vw;
      background: rgb(29, 161, 242);
      padding:5px;
      color:white;
      width:50px;

    }
    #tweeth1 {
      margin-left: 30vw;
    }
    #tweeth3tag{
      text-align: center;
    }
  }
}
</style>
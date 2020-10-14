<template>
  <div id="container">
    <div id="tweetStyle">
      <h3 id="tweeth3tag">Post your tweets here</h3>
      <textarea
        id="tweetTextarea"
        v-model="tweets"
        placeholder="Max 200 character"
      ></textarea>
      <button @click="createTweet" id="tweetButton">Tweet</button>
    </div>
    <h3 id="statusStyling">{{ status }}</h3>
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
      chats: [],
      status: ""
    };
  },

  methods: {
    createTweet: function() {
      if (this.tweets != "") {
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

            this.chats.push(response.data);
            this.$store.commit("updateTweet", response.data);
            document.getElementById("tweetTextarea").value = "";

            this.status = "Tweet successfully posted";
          })
          .catch(error => {
            console.log(error);
          });
      }else{
        this.status="Type something to post"
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#container {
  display: grid;

  #tweetStyle {
    display: grid;
    justify-items: center;
    align-items: center;
    row-gap: 2vh;

    #tweetTextarea {
      line-height: 3em;
      width: 100%;
    }
    #tweetButton {
      margin-left: 50vw;
      background: rgb(29, 161, 242);
      padding: 5px;
      color: white;
      width: 50px;
    }
  }

  @media only screen and(min-width:600px) {
    #tweetStyle {
      #tweeth3tag {
        font-size: 2.5em;
      }

      #tweetTextarea {
        line-height: 8em;
        font-size: x-large;
      }
      #tweetButton {
        width: 110px;
        padding: 17px;
        font-size: x-large;
      }
    }
    #statusStyling {
      font-size: xx-large;
    }
  }
  @media only screen and(min-width:1020px) {
    #tweetStyle {
      #tweeth3tag {
        font-size: 2em;
      }
      #tweetTextarea {
        width: 100%;
        line-height: 5em;
      }
      #tweetButton {
        margin-left: 30vw;
      }
    }
  }
}
</style>
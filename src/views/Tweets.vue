<template>
  <div id="container">
    <header-page></header-page>

    <button class="btnStyling" @click="myTweets">Get MyTweets</button>

    <div id="tweetStyling" v-for="chat in chats" :key="chat.tweetId">
      <h3 id="h3Styling">{{ chat.content }}</h3>
      <div id="btnContainer">
        <button class="btn2Styling" @click="deleteTweet(chat.tweetId)">
          Delete
        </button>

        <edit-page
          :tweetid="chat.tweetId"
          @contentChanged="updateArray"
        ></edit-page>
      </div>
    </div>
    <br><br><br><br><br><br><br><br><br>
    <footer-page></footer-page>
  </div>
</template>


<script>
import axios from "axios";
import cookies from "vue-cookies";
import EditPage from "../components/EditTweet.vue";
import HeaderPage from "../components/Header.vue";
import FooterPage from "../components/Footer.vue";

export default {
  name: "tweets-page",
  components: {
    EditPage,
    HeaderPage,
    FooterPage
  },
  data() {
    return {
      userid: cookies.get("userId"),
      token: cookies.get("loginToken"),
      chats: [],
      status: "",
      tweetid: ""
    };
  },

  methods: {
    myTweets: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/tweets",

          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "5GakGJ6glNqzt5rxIP5ON3KkBIgrLaZODehane6UFhUzc"
          },
          params: {
            userId: this.userid
          }
        })
        .then(response => {
          console.log(response);
          this.chats = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    updateArray: function() {
      this.myTweets();
    },

    deleteTweet(tweetId) {
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
            tweetId: tweetId
          }
        })
        .then(response => {
          console.log(response);
          this.chats = response.data;
          this.myTweets();
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
  row-gap: 11vh;
  justify-items: center;
  align-items: center;
  min-height: 15vh;
  .btnStyling {
    width: 150px;
    height: 30px;
    background: rgb(29, 161, 242);
    color: white;
    border-radius: 15px;
    text-align: center;
  }
  #tweetStyling {
    border: 2px solid grey;
    border-radius: 10px;
    padding: 10px;
    display: grid;
    row-gap: 2vh;
    #btnContainer {
      display: grid;

      grid-template-columns: repeat(2,1fr);
      justify-items: center;
      align-items: center;
      .btn2Styling {
        width: 70px;
        height: 30px;
        background: rgb(29, 161, 242);
        color: white;
        border-radius: 5px;
      }
    }
    #h3Styling {
      text-align: center;
    }
  }
  @media only screen and(min-width:600px) {
    min-height: 12vh;
    row-gap: 12vh;
    .btnStyling {
      width: 200px;
      height: 50px;
      font-size: x-large;
    }
    #tweetStyling {
    
      width:90%;
      #h3Styling {
        font-size: xx-large;
      }
      #btnContainer {
        width: 100%;
        justify-items: center;
        align-items: center;
       
        .btn2Styling{
          width:60%;
          padding: 16px;
          font-size:x-large;
          height:55px;
        }
      }
    }
  }
}
</style>
<template>
  <div id="container">
    <button id="editStyling" @click="showButton">Edit</button>
    <div id="editContent" v-if="isShow">
      <textarea
        v-model="newContent"
        type="text"
        placeholder="Edit your tweet here" id="editings"
      ></textarea>
      <button id="submitBtn" @click="editTweets">Submit</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "edit-page",
  props: {
    tweetid: Number
  },
  data() {
    return {
      newContent: "",
      token: cookies.get("loginToken"),
      isShow: false
    };
  },
  methods: {
    editTweets: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/tweets",

          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "5GakGJ6glNqzt5rxIP5ON3KkBIgrLaZODehane6UFhUzc"
          },
          data: {
            loginToken: this.token,
            tweetId: this.tweetid,
            content: this.newContent
          }
        })
        .then(response => {
          console.log(response);
          this.newContent = response.data;
          this.$emit("contentChanged", response.data.content);
          this.isShow = false;
        })
        .catch(error => {
          console.log(error);
        });
    },
    showButton: function() {
      this.isShow = true;
    }
  }
};
</script>

<style lang="scss" scoped>
#container {
  #editStyling {
    width: 70px;
    height: 30px;
    background: rgb(29, 161, 242);
    color: white;
    border-radius: 5px;
  }
  @media only screen and(min-width:600px) {
    
    #editStyling {
      width: 200px;

      font-size: x-large;
      height: 55px;
      
    }
    #editContent {
      #editings{
        line-height: 4em;
        font-size:x-large;
        width:100%;
      }
        #submitBtn {
          width: 50%;
          font-size: x-large;
        }
      }
  }
}
</style>
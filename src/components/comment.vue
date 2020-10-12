<template>
  <div id="container">
    <div>
      <div id="StylingBtn">
        <button class="commentBtn" :class="{ toggled: isShow }" @click="isShow = !isShow">Comment</button>
        <button class="commentBtn" @click=" viewComment">View Comments</button>
      </div>
      <div v-if="isShow" id="submitStyling">
        <textarea id="textInput" v-model="comments"></textarea>
        <button id="btnSubmit" @click="commentTweet">Submit</button>
      </div>
      <div v-if="isClicked" id="contentdivStyling">
        <div v-for="show in shows" :key="show.commentId" id="contentStyling">
          <h4 id="contenth4">{{ show.content }}</h4>
          <div id="btnsStyling">
            <commentlike-page :commentsid="show.commentId"></commentlike-page>

            <editcomment-page :anotherid="show.userId" :commentsid="show.commentId" @updateList="refreshList"></editcomment-page>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
import EditcommentPage from "./ModifyingComments.vue";
import CommentlikePage from "./CommentLike.vue";
export default {
  name: "comment-page",

  data() {
    return {
      token: cookies.get("loginToken"),
      shows: [],
      comments: [],
      isShow: "",
      isClicked: ""
    };
  },
  components: {
    EditcommentPage,
    CommentlikePage
  },
  props: {
    tweetid: Number
  },
  methods: {
    commentTweet: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/comments",

          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "5GakGJ6glNqzt5rxIP5ON3KkBIgrLaZODehane6UFhUzc"
          },
          data: {
            loginToken: this.token,
            tweetId: this.tweetid,
            content: this.comments
          }
        })
        .then(response => {
          console.log(response);
          this.comments = response.data.content;
          cookies.set("tweetId", response.data.tweetId);
        })
        .catch(error => {
          console.log(error);
        });
    },
    viewComment: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/comments",

          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "5GakGJ6glNqzt5rxIP5ON3KkBIgrLaZODehane6UFhUzc"
          },
          params: {
            tweetId: this.tweetid
          }
        })
        .then(response => {
          console.log(response);
          this.shows = response.data;
          this.isClicked = !this.isClicked;
        })
        .catch(error => {
          console.log(error);
        });
    },
    refreshList() {
      this.viewComment();
    },
    
    toggle() {
      this.isShow = !this.isShow;
    }
  }
};
</script>

<style lang="scss" scoped>
#container {
  display: grid;
  min-height: 10vh;
  row-gap: 2vh;
  #StylingBtn {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2vw;
    .commentBtn {
      color: white;
      background: rgb(29, 161, 242);
      padding: 4px;
      border-radius: 10px;
    }
  }
  #contentdivStyling {
    display:grid;
    row-gap: 2vh;
    #contentStyling {
      display: grid;
      border: 1px solid grey;
    }
  }
  @media only screen and(min-width:600px) {
    #StylingBtn{
      .commentBtn{
        padding: 8px;
        font-size:x-large;

      }
      
    }
    #submitStyling{
      #btnSubmit{
        padding: 8px;
        font-size: x-large;
      }

    }
    #contentdivStyling{
      #contentStyling{
        #contenth4{
          font-size: xx-large;
        }

      }

    }
    
  }
}
</style>
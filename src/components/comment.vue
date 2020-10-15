<template>
  <div id="container">
  
      <div id="StylingBtn">
        <button class="commentBtn" :class="{ toggled: isShow }" @click="isShow = !isShow">Comment</button>
        <button class="commentBtn" @click=" viewComment">View Comments</button>
      </div>
      <div v-if="isShow" id="submitStyling">
        <textarea id="textInput" v-model="comments" placeholder="Type your comments"></textarea>
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
  width: 80%;
  
 
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
    width: 100%;
    #StylingBtn{
      .commentBtn{
        padding: 4px;
        font-size:x-large;

      }
      
    }
    #submitStyling{
      #btnSubmit{
        padding: 8px;
        font-size: x-large;
      }
      #textInput{
        line-height: 3em;
        font-size:x-large;

      }

    }
    #contentdivStyling{
      width:100%;
      #contentStyling{
        #contenth4{
          font-size:x-large;
        }

      }

    }
    
  }
  @media only screen and(min-width:1020px) {
    #submitStyling{
      #textInput{
        line-height: 2em;
        font-size: x-large;

      }

    }
    #StylingBtn{
      .commentBtn{
        font-size:medium;
        padding: 4px;

      }
      
    }

   #contentdivStyling{
     width:50%;
      #contentStyling{
        #contenth4{
          font-size:x-large;
        }

      }

    }
  }
}
</style>
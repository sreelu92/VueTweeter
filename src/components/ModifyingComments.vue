<template>
  <div id="container">
    <button class="commentbtnStyling" @click="show">Edit</button>
    <div v-if="isTrue" id="commentEditing">
      <textarea v-model="messages" placeholder="Edit your comment here" id="commentUpdate"></textarea>
      <button id="btncmntEdt" @click="editComment">Submit</button>
    </div>
    <button class="commentbtnStyling" @click="deleteComment">Delete</button>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "editcomment-page",
  data() {
    return {
      messages: "",
      isTrue: "",
      token: cookies.get("loginToken"),
      userId: cookies.get("userId"),
    };
  },
  props: {
    commentsid: Number,
    anotherid: Number
  },
  methods: {
    editComment: function() {
      if (this.anotherid == this.userId) {
        axios
          .request({
            url: "https://mytweeters.ml/api/comments",

            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            data: {
              loginToken: this.token,
              commentId: this.commentsid,

              content: this.messages
            }
          })
          .then(response => {
            console.log(response)
            this.$emit("updateList", response);
            this.isTrue = false;
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        this.status = " You cannot edit other's tweet";
      }
    },
    show: function() {
      if (this.anotherid == this.userId) {
        this.isTrue = true;
      } else {
        this.isTrue = false;
      }
    },
    deleteComment: function() {
     
      if (this.anotherid == this.userId) {
        axios
          .request({
            url: "https://mytweeters.ml/api/comments",

            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            data: {
              loginToken: this.token,
              commentId: this.commentsid
            }
          })
          .then(response => {

            this.$emit("updateList", response);
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        this.status = "";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#container{
  display: grid;
    grid-template-columns: repeat(auto-fit,minmax(150px,1fr));
    justify-items: center;
    align-items: center;
  .commentbtnStyling{
    width:100px;
    height:30px;
    
  }
  @media only screen and(min-width:600px) {
    .commentbtnStyling{
      padding:8px;
      font-size: x-large;
      height:50px;
    }
    #commentEditing{
      #btncmntEdt{
        padding: 8px;
        font-size:larger;
      }
      #commentUpdate{
        line-height: 3em;
        font-size: x-large;
      }

    }
    
  }
  @media only screen and(min-width:1020px) {
    #commentEditing{
      #commentUpdate{
        line-height: 3em;
        font-size:large;
      }

    }
  }




}

</style>
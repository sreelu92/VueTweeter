<template>
  <div id="container">
    <img v-if="!isLike"
      class="imageStyling"
      @click="commentLike"
      src="https://miro.medium.com/max/600/0*XPXGV1Av9qlckqka.png"
      alt="image of comment like icon"
    />
    <img
      v-if="isLike"
      class="imageStyling"
      @click="deleteComment"
      src="https://insights.dice.com/wp-content/uploads/2019/05/Facebook-dislike-thumbs-down-hate-Dice.png"
      alt="comment unlike icon"
    />

    <h4 id="h4Styling">{{ this.likes }}</h4>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "commentlike-page",

  data() {
    return {
      token: cookies.get("loginToken"),
      idUser: cookies.get("userId"),
      likes: "",
      count:[],
      isLike:false
    };
  },
  props: {
    commentsid: Number
  },
  mounted: function() {
    axios
      .request({
        url: "https://tweeterest.ml/api/comment-likes",

        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": "5GakGJ6glNqzt5rxIP5ON3KkBIgrLaZODehane6UFhUzc"
        },
        params: {
          commentId: this.commentsid
        }
      })
      .then(response => {
        this.likes = response.data.length;
        this.count = response.data;
        for (let i = 0; i < this.count.length; i++) {
          if (this.count[i].userId==this.idUser) {
            this.isLike =true;
          }
        }
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    commentLike: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/comment-likes",

          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "5GakGJ6glNqzt5rxIP5ON3KkBIgrLaZODehane6UFhUzc"
          },
          data: {
            loginToken: this.token,
            commentId: this.commentsid
          }
        })
        .then(response => {
          this.isLike=true;
          this.likes=this.likes+1;
        })
        .catch(error => {
          console.log(error);
        });
    },
    deleteComment: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/comment-likes",

          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "5GakGJ6glNqzt5rxIP5ON3KkBIgrLaZODehane6UFhUzc"
          },
          data: {
            loginToken: this.token,
            commentId: this.commentsid
          }
        })
        .then(response => {
          this.isLike=false;
          this.likes=this.likes-1;
          
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
  position: relative;
  .imageStyling {
    width: 10%;
  }
  #h4Styling {
    position: absolute;
    left: 13vw;
    top: 1vh;
  }
  @media only screen and(min-width:600px) {
    #h4Styling {
      font-size: x-large;
      left: 8vw;
    }
  }
}
</style>
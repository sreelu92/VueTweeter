<template>
  <div id="container">
    <img
      id="imageStyling"
      @click="commentLike"
      src="https://miro.medium.com/max/600/0*XPXGV1Av9qlckqka.png"
      alt="image of comment icon"
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
      likes: "",
      count: this.count
    };
  },
  props: {
    commentsid: Number
  },
  mounted: function() {
    this.viewLike();
  },
  methods: {
    commentLike: function() {
      if (this.count == 0) {
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
            console.log(response);
            this.count = 1;
            this.viewLike();
          })
          .catch(error => {
            console.log(error);
          });
      } else {
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
            console.log(response);
            this.count = 0;
            this.viewLike();
          })
          .catch(error => {
            console.log(error);
          });
      }
    },

    viewLike: function() {
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
          console.log(response);
          this.likes = response.data.length;
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
  #imageStyling {
    width: 10%;
  }
  #h4Styling {
    position: absolute;
    left: 13vw;
    top: 1vh;
  }
}
</style>
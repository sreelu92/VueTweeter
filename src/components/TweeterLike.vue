<template>
  <div id="container">
    <img
      id="imageStyling"
      @click="tweetLike"
      src="https://miro.medium.com/max/600/0*XPXGV1Av9qlckqka.png"
      alt="image of comment icon"
    />
    <h4 id="h4Styling">{{ this.like }}</h4>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "tweeterlike-page",
  data() {
    return {
      count:this.count,

      token: cookies.get("loginToken"),
      like: ""
    };
  },
  props: {
    tweetid: Number,
    usersid: Number
  },
  mounted: function() {
    this.viewtweetLike();
  },
  computed: {
    counting() {
      return this.$store.state.count;

    }
  },

  methods: {
    tweetLike: function() {
      
      if (this.count == 0) {
        axios
          .request({
            url: "https://tweeterest.ml/api/tweet-likes",

            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "X-Api-Key": "5GakGJ6glNqzt5rxIP5ON3KkBIgrLaZODehane6UFhUzc"
            },
            data: {
              loginToken: this.token,
              tweetId: this.tweetid
            }
          })
          .then(response => {
            console.log(response);
            this.count = 1;
            this.viewtweetLike();

          })
          .catch(error => {
            console.log(error);
          });
      } else {
        axios
          .request({
            url: "https://tweeterest.ml/api/tweet-likes",

            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              "X-Api-Key": "5GakGJ6glNqzt5rxIP5ON3KkBIgrLaZODehane6UFhUzc"
            },
            data: {
              loginToken: this.token,
              tweetId: this.tweetid
            }
          })
          .then(response => {
            console.log(response);
            this.count = 0;
            this.viewtweetLike();
          })
          .catch(error => {
            console.log(error);
          });
      }
    },

    viewtweetLike: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/tweet-likes",

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
          this.like = response.data.length;
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
    position: absolute;
    left: 0;
    top: 3vh;
    width: 10%;
  }
  #h4Styling {
    position: absolute;
    left: 12vw;
    top: 4vh;
  }
  @media only screen and(min-width:600px) {
    #h4Styling{
      font-size: x-large;
      left:8vw;
    }
  }

 

}
</style>
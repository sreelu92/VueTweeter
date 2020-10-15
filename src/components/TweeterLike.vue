<template>
  <div id="container">
    <img
      v-if="!isLike"
      class="imageStyling"
      @click="tweetLike"
      src="https://miro.medium.com/max/600/0*XPXGV1Av9qlckqka.png"
      alt="image of tweet like icon"
    />
    <img
      v-if="isLike"
      class="imageStyling"
      @click="deleteTweet"
      src="https://insights.dice.com/wp-content/uploads/2019/05/Facebook-dislike-thumbs-down-hate-Dice.png"
      alt="tweet unlike icon"
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

      token: cookies.get("loginToken"),
      idUser:cookies.get('userId'),
      like: "",
      likesAmount: [],
      isLike: false
    };
  },
  props: {
    tweetid: Number,
    usersid: Number
  },
  mounted: function() {
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

        this.likesAmount = response.data;
        for (let i = 0; i < this.likesAmount.length; i++) {
          if (this.likesAmount[i].userId==this.idUser) {
            this.isLike =true;
          }
        }
      })
      .catch(error => {
        console.log(error);
      });
  },

  methods: {
    tweetLike: function() {
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
          this.isLike = true;
          this.like=this.like+1;
          console.log(response)
        })
        .catch(error => {
          console.log(error);
        });
    },
    deleteTweet: function() {
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
          this.isLike = false;
          this.like = this.like-1;
          console.log(response)


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
    position: absolute;
    left: 0;
    top: 3vh;
    width: 10%;
  }
  #h4Styling {
    position: absolute;
    left: 12vw;
    top: 3vh;
  }
  @media only screen and(min-width:600px) {
    #h4Styling {
      font-size: x-large;
      left: 9vw;
      top:3vh;
      
    }
  }
  @media only screen and(min-width:1020px) {
    #h4Styling {
      font-size: x-large;
      left: 6vw;
      top:3vh;
    }
    .imageStyling {
    top: 3vh;
    width: 10%;
  }

    }

}
</style>
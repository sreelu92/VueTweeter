<template>
  <div id="container">
    <h2 id="followerHtag">People You Follows</h2>
    <div id="followingBtn">
      <button class="followerStyle" @click="follower">Following</button>
    </div>
    <div id="infoDiv">
      <div
        id="dataStyling"
        v-for="follower in followers"
        :key="follower.userId"
      >
        <h3>{{ "Email:" + "" + follower.email }}</h3>
        <h3>{{ "Username:" + "" + follower.username }}</h3>
        <h3>{{ "Bio:" + "" + follower.bio }}</h3>
        <h3>{{ "Birthdate:" + "" + follower.birthdate }}</h3>
        <button class="followStyling" @click="deleteFollow(follower.userId)">
          Delete Following
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "follower-page",
  data() {
    return {
      userid: cookies.get("userId"),
      token: cookies.get("loginToken"),
      followers: []
    };
  },
  methods: {
    follower: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/follows",

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

          this.followers = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    deleteFollow: function(userId) {
      axios
        .request({
          url: "https://tweeterest.ml/api/follows",

          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "5GakGJ6glNqzt5rxIP5ON3KkBIgrLaZODehane6UFhUzc"
          },
          data: {
            loginToken: this.token,
            followId: userId
          }
        })
        .then(response => {
          console.log(response);
          this.follower();
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

  #followerHtag {
    text-align: center;
  }
  .followerStyle {
    width: 150px;
    height: 30px;
    background: rgb(29, 161, 242);
    color: white;
    border-radius: 20px;
    text-align: center;
  }
  #infoDiv {
    display: grid;
    row-gap: 2vh;
    justify-items: center;
    align-items: center;
    #dataStyling {
      display: grid;
      row-gap: 2vh;
      border: 1px solid grey;
      padding: 20px;
      border-radius: 10px;
      .followStyling {
        width: 130px;
        height: 30px;
        background: rgb(29, 161, 242);
        text-align: center;
        color: white;
        border-radius: 5px;
        text-align: center;
        margin-left: 7vw;
      }
    }
  }
  @media only screen and(min-width:600px) {
    #followingBtn {
      .followerStyle {
        font-size: x-large;
        height: 50px;
      }
    }
    #infoDiv {
      #dataStyling {
        align-items: center;
        justify-items: center;

        .followStyling {
          font-size: x-large;
          height: 60px;
        }
      }
    }
  }
  @media only screen and(min-width:1020px){
     #infoDiv {
      #dataStyling {
        .followStyling {
          font-size:large;
          height: 60px;
          
        }
      }
    }

  }

}
</style>
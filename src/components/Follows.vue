<template>
  <div id="container">
    <div>
      <button v-if="!isClicked" class="followStyling" type="button" @click="followUser">Follow</button>
      <button v-if="isClicked" id="unfollowBtn" class="followStyling" @click="deleteFollow">Unfollow</button>
      <button class="followStyling" @click="follower">Followers</button>
    </div>
    <div>
      <div id="followerStyling" v-for="follower in followers" :key="follower.userId">
        <h3>{{ "Username:" + "" + follower.username }}</h3>

        <h3>{{ "Email:" + "" + follower.email }}</h3>
        <h3>{{ "Bio:" + "" + follower.bio }}</h3>
        <h3>{{ "Birthdate:" + "" + follower.birthdate }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import axios from "axios";
export default {
  name: "follow-page",
  props: {
    userid: Number
  },

  data() {
    return {
      token: cookies.get("loginToken"),
      userId: cookies.get("userId"),

      status: "",
      isClicked: false,
      followers:[],
      following:[]
    };
  },
 mounted () {
   axios
        .request({
          url: "https://mytweeters.ml/api/follows",

          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          params: {
            userId: this.userId
          }
        })
        .then(response => {
          console.log(response)
          this.following=response.data;
          for(let i=0;i<this.following.length;i++){
            if(this.following[i].userId==this.userid){
              this.isClicked=true;
            }
          }

        })
        .catch(error => {
          console.log(error);
        });
    

 },
 
  methods: {
    followUser: function() {
      axios
        .request({
          url: "https://mytweeters.ml/api/follows",

          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            loginToken: this.token,
            followId: this.userid
          }
        })
        .then(response => {
          console.log(response)
          return this.isClicked=true;
          

        })
        .catch(error => {
          console.log(error);
          this.status = "No user exist";
        });
    },
   
    follower: function() {
      axios
        .request({
          url: "https://mytweeters.ml/api/follows",

          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          params: {
            userId: this.userid
          }
        })
        .then(response => {
          console.log(response)
          this.followers=response.data
        })
        .catch(error => {
          console.log(error);
        });
    },
     deleteFollow: function() {
      axios
        .request({
          url: "https://mytweeters.ml/api/follows",

          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            loginToken:this.token,
            followId:this.userid
          }
        })
        .then(response => {
          console.log(response)
         return this.isClicked=false;
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
  row-gap: 8vh;
  width: 100%;
  #followHtag {
    text-align: center;
  }
  .followStyling {
    width: 100px;
    height: 30px;
    background: rgb(29, 161, 242);
    text-align: center;
    color: white;
    padding: 3px;
    border-radius: 5px;
  }
  #followerStyling {
    display: grid;
    border: 1px solid grey;
    row-gap: 2vh;
    text-align: center;
    border-radius: 10px;
  }
  #statusStyling {
    text-align: center;
  }
  @media only screen and(min-width:600px) {
    .followStyling{
      width:200px;
      height:50px;
      font-size:x-large;
      padding:12px;

    }
    #followerStyling{
      font-size:x-large;
      row-gap: 4vh;
      padding:18px;
    }

  }

}
</style>
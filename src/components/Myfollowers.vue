<template>
  <div id="container">
    <h2 id="myfollowerHtag">See who follows you</h2>
    <div>
      <button class="myfollowerStyle" @click="myfollower"> My Followers</button>
    </div>
    <div id="mydataStyling">
      <div id="infoStyling" v-for="follower in followers" :key="follower.userId">
        <h3>{{ "UserId:" + "" + follower.id }}</h3>
        <h3>{{ "Email:" + "" + follower.email }}</h3>
        <h3>{{ "Username:" + "" + follower.username }}</h3>
        <h3>{{ "Bio:" + "" + follower.bio }}</h3>
        <h3>{{ "Birthdate:" + "" + follower.birthdate }}</h3>
      </div>
    </div>

  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "myfollower-page",
  data() {
    return {
      userid: cookies.get("userId"),
      followers: [],
      status: ""
    };
  },
  methods: {
    myfollower: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/followers",

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
          if (response.data == 0) {
            this.status = "No followers found";
          } else {
            this.status = "Followers found";
            this.followers = response.data;
          }
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
  #myfollowerHtag {
    text-align: center;
  }
  .myfollowerStyle {
    width: 130px;
    height: 30px;
    background: rgb(29, 161, 242);
    color: white;
    border-radius: 20px;
    text-align: center;
  
  }
  #mydataStyling {
    display: grid;
    row-gap: 2vh;
    #infoStyling{
      display: grid;
      row-gap: 2vh;
      border: 1px solid grey;
      padding: 20px;
      border-radius: 10px;

    }
  }
}
</style>
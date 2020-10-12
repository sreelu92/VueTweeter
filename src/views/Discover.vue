<template>
  <div id="container">
    <header-page></header-page>
    <h2 id="profilehtag">Get Users Profile Information</h2>

    <button class="Styling" @click="getfullInfo">View All Users</button>
    <div id="profileContainer">
      <div id="profileStyling" v-for="user in users" :key="user.userId">
        <h3 class="h3Styling">{{ "Username:" + "" + user.username }}</h3>
        <h3 class="h3Styling">{{ "Email:" + "" + user.email }}</h3>
        <h3 class="h3Styling">{{ "Bio:" + " " + user.bio }}</h3>
        <h3 class="h3Styling">{{ "Birthdate:" + " " + user.birthdate }}</h3>

        <follow-page :userid="user.userId"></follow-page>
      </div>
    </div>
    <h2>{{ status }}</h2><br><br><br><br><br><br><br>
    <footer-page></footer-page>
  </div>
</template>

<script>
import axios from "axios";
import FollowPage from "../components/Follows.vue";
import HeaderPage from "../components/Header.vue";
import FooterPage from "../components/Footer.vue";

export default {
  name: "discover-page",
  components: {
    FollowPage,
    HeaderPage,
    FooterPage
  },
  data() {
    return {
      userid: "",
      userId: "",
      email: "",
      username: "",
      bio: "",
      birthdate: "",
      users: [],
      status: ""
    };
  },
  methods: {
    getUserprofile: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/users",

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
          this.userId = response.data[0].userId;
          this.email = response.data[0].email;
          this.username = response.data[0].username;
          this.bio = response.data[0].bio;
          this.birthdate = response.data[0].birthdate;
        })
        .catch(error => {
          console.log(error);
        });
    },
    getfullInfo: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/users",

          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "5GakGJ6glNqzt5rxIP5ON3KkBIgrLaZODehane6UFhUzc"
          }
        })
        .then(response => {
          console.log(response);
          this.users = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    following: function(index) {
      axios
        .request({
          url: "https://tweeterest.ml/api/follows",

          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "5GakGJ6glNqzt5rxIP5ON3KkBIgrLaZODehane6UFhUzc"
          },
          data: {
            loginToken: this.token,
            followId: index
          }
        })
        .then(response => {
          console.log(response);
          this.status = "Successfully Followed";
        })
        .catch(error => {
          console.log(error);
          this.status = "No user exist";
        });
    }
  }
};
</script>

<style lang="scss" scoped>
#container {
  display: grid;
  grid-template-columns: repeat(autofit, minmax(250px, 1fr));
  row-gap: 7vh;
  min-height: 10vh;
  justify-items: center;
  align-items: center;
  #profilehtag {
    text-align: center;
  }
  .Styling {
    width: 150px;
    height: 30px;
    background: rgb(29, 161, 242);
    color: white;
    border-radius: 15px;
    text-align: center;
  }
  #profileContainer {
    display: grid;
    row-gap: 2vh;
    #profileStyling {
      border: 1px solid grey;
      display: grid;
      row-gap: 2vh;
      text-align: center;
      border-radius: 10px;
    }
  }
    @media only screen and(min-width:600px) {
      row-gap: 12vh;
      #profilehtag{
        font-size: xx-large;
      }
      .Styling{
        width:200px;
        height: 60px;
        font-size: x-large;
      }
      #profileContainer{
        #profileStyling{
          padding: 60px;
        }
        .h3Styling{
          font-size: xx-large;
        }
      }

    }

 
}
</style>
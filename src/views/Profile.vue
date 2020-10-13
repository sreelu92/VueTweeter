<template>
  <div id="container">
    <header-page></header-page>
    <div class="stylings" id="profile">
      <h2>My Profile</h2>
      <h3>{{ "Username:" + "" + username }}</h3>
      <h3>{{ "Email:" + "" + email }}</h3>
      <h3>{{ "Bio:" + "" + bio }}</h3>
      <h3>{{ "Birthdate:" + "" + birthdate }}</h3>
      
    </div>
    <div class="stylings">
      <follower-page></follower-page>
    </div>
    <div class="stylings">
      <myfollower-page></myfollower-page>
    </div>
    <div class="stylings" id="updatediv">
      <update-page></update-page>
    </div>
    <div class="stylings" id="deletediv">
      <delete-page></delete-page>
    </div>
    <footer-page></footer-page>
  </div>
</template>

<script>
import axios from "axios";
import DeletePage from "../components/Delete.vue";
import UpdatePage from "../components/UpdateProfile.vue";
import FollowerPage from "../components/Followers.vue";
import MyfollowerPage from "../components/Myfollowers.vue";
import HeaderPage from "../components/Header.vue";
import FooterPage from "../components/Footer.vue";
import cookies from "vue-cookies";

export default {
  name: "profile-page",
  components: {
    DeletePage,
    UpdatePage,
    FollowerPage,
    MyfollowerPage,
    HeaderPage,
    FooterPage
  },

  data() {
    return {
      token: cookies.get("loginToken"),
      userid: cookies.get("userId"),

      username: "",
      email: "",
      bio: "",
      birthdate: ""
    };
  },
  mounted() {
    this.getInfo();
    if (this.token == undefined) {
      this.$router.push({ name: "welcome-page" });
    }
  },
  methods: {
    getInfo: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/users",

          method: "get",
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
          this.username = response.data[0].username;
          this.email = response.data[0].email;
          this.bio = response.data[0].bio;
          this.birthdate = response.data[0].birthdate;
        })
        .catch(error => {
          console.log(error);
        });
    },
   
  }
};
</script>

<style lang="scss" scoped>
#container {
  display: grid;
  min-height: 20vh;
  width: 100%;
  row-gap: 2vh;
  justify-items: center;
  align-items: center;
  .stylings {
    text-align: center;
    border: 1px solid grey;
    padding: 35px;
    border-radius: 10px;
  }
  #profile {
    display: grid;
    row-gap: 2vh;
  }
  #updatediv {
    display: grid;
  }
  #deletediv {
    display: grid;
  }
  @media only screen and(min-width:600px) {
    min-height: 30vh;
    .stylings{
      font-size:xx-large;
    }
  }

  @media only screen and(min-width:1020px){
    width:100%;
    min-height: 20vh;
    row-gap: 4vh;
    .stylings{
      font-size: x-large;
      padding: 45px;
    }
  }

}
</style>
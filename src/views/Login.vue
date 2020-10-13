<template>
  <div id="container">
    <h3 id="h3Styling">Login here</h3>
    <div id="formStyling">
      <p class="ptagStyling">Email</p>
      <input class="stylingInput" type="text" id="email-input" v-model="email" placeholder="Enter your email "/>
      <p class="ptagStyling">Password</p>
      <input class="stylingInput" type="password" id="password-input" v-model="password" placeholder="Type your password" />
    </div>
    <h2 @click="loginUser" id="loginStyling">Login</h2>
    <h3 id="loginh3Styling">{{ loginStatus }}</h3>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  data() {
    return {
      email: "",
      password: "",
      loginStatus: ""
    };
  },
  methods: {
    loginUser: function() {
      this.loginStatus = "Loading";
      axios
        .request({
          url: "https://tweeterest.ml/api/login",

          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "5GakGJ6glNqzt5rxIP5ON3KkBIgrLaZODehane6UFhUzc"
          },
          data: {
            email: this.email,
            password: this.password
          }
        })
        .then(response => {
          //check if login token sent
          if (response.data.loginToken == undefined) {
            this.$router.push({ name: "login-page" });
          } else {
            console.log(response);
            this.loginStatus = "success";
            cookies.set("loginToken", response.data.loginToken);
            cookies.set("username", response.data.username);
            cookies.set("userId", response.data.userId);
            this.$store.commit("username", response.data.username);
            this.$store.commit("userId", response.data.userId);
            //send usernto home page
            this.$router.push({ name: "home-page" });
          }
        })
        .catch(error => {
          //show user login failure
          console.log(error);
          this.loginStatus = "Invalid Login";
        });
    }
  }
};
</script>

<style lang="scss" scoped>
#container {
  display: grid;
  justify-items: center;
  align-items: center;
  row-gap: 6vh;
  margin-top: 10vh;
  #h3Styling{
    display: none;
  }
  #formStyling {
    display: grid;
    row-gap: 4vh;
    background:  rgb(29, 161, 242);
    padding: 20px;
    text-align: center;
    color:white;
    border-radius:10px ;
    .ptagStyling {
      font-size: large;
      font-weight: bold;
    }
  }
  #loginStyling {
    border-radius: 10px;
    padding: 8px;
    width: 100px;
    background-color: rgb(29, 161, 242);
    color: white;
    text-align: center;
  }
  @media only screen and(min-width:600px) {
    margin-top: 8vh;
    #h3Styling{
      display:block;
      font-size:xx-large;
    }
    #formStyling {
      padding:15%;
      background:  rgb(29, 161, 242);
      .ptagStyling{
        font-size: xx-large;
      }
      .stylingInput{
        width:240px;
        height: 50px;
        font-size:x-large;
      }
    }
    #loginStyling{
      padding: 15px;
      font-size: xx-large;
    }
    #loginh3Styling{
      font-size: x-large;
    }

  }
  @media only screen and(min-width:1020px) {
    row-gap: 3vh;
    #h3Styling{ 
      font-size:3em;
    }
    #formStyling {
      padding:6%;
      .stylingInput{
        font-size:x-large;
      }
    }


  }


}
</style>
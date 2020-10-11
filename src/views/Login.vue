<template>
  <div id="container">
    <div id="formStyling">
      <p class="ptagStyling">Email</p>
      <input
        type="text"
        id="email-input"
        v-model="email"
        placeholder="Enter your email "
      />
      <p class="ptagStyling">Password</p>
      <input
        type="password"
        id="password-input"
        v-model="password"
        placeholder="Type your password"
      />
    </div>
    <h2 @click="loginUser" id="loginStyling">Login</h2>
    <h3>{{ loginStatus }}</h3>
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
}
</style>
<template>
  <div id="container">
    <button id="logoutButton" @click="logOut">Log Out</button>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import axios from "axios";
export default {
  name: "logout-page",
  data() {
    return {
      token: cookies.get("loginToken")
    };
  },
  methods: {
    logOut: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/login",

          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "5GakGJ6glNqzt5rxIP5ON3KkBIgrLaZODehane6UFhUzc"
          },
          data: {
            loginToken: this.token
          }
        })
        .then(response => {
          console.log(response);
          this.$router.push({ name: "welcome-page" });
          cookies.remove("loginToken");
          cookies.remove("userId");
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
  #logoutButton {
    position: absolute;
    top: 1vh;
    left: 60vw;
    border-radius: 5px;
    padding: 5px;
    width: 90px;
    background-color: rgb(29, 161, 242);
    color: white;
  }
}
</style>
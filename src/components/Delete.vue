<template>
  <div id="container">
    <h2>Delete Your Profile</h2>
    <input type="password" id="passwordInput" v-model="password" />
    <button id="deletebtnStyling" @click="deleteMessage">Delete</button>
    <div v-if="isClicked" id="deleteDiv">
      <h3>Are you sure?</h3>
      <div id="deletedivStylings">
        <button @click="cancelMessage">Cancel</button>
        <button @click="deleteProfile">Ok</button>
      </div>
    </div>
    <h3>{{ status }}</h3>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import axios from "axios";
export default {
  name: "delete-page",
  data() {
    return {
      token: cookies.get("loginToken"),
      password: "",
      isClicked: false,
      status: ""
    };
  },
  methods: {
    deleteProfile: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/users",

          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "5GakGJ6glNqzt5rxIP5ON3KkBIgrLaZODehane6UFhUzc"
          },
          data: {
            loginToken: this.token,
            password: this.password
          }
        })
        .then(response => {
          this.$router.push({ name: "welcome-page" });
        })
        .catch(error => {
          console.log(error);
          this.status = "Password incorrect";
        });
    },
    deleteMessage: function() {
      this.isClicked = true;
    },
    cancelMessage: function() {
      this.isClicked = false;
    }
  }
};
</script>

<style lang="scss" scoped>
#container {
  display: grid;
  #deletebtnStyling {
    width: 150px;
    height: 30px;
    background: rgb(29, 161, 242);
    color: white;
    border-radius: 20px;
    text-align: center;
  }
  #deleteDiv {
    #deletedivStylings {
      display: grid;
    }
  }
  @media only screen and(min-width:600px) {
    #passwordInput {
      width: 90%;
      height: 50px;
      font-size: x-large;
    }
    #deletebtnStyling {
      height: 50px;
      width: 200px;
      font-size: x-large;
    }
  }
}
</style>
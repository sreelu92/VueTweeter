<template>
  <div id="container">
    <h2>Update Your Profile</h2>
    <h3>{{ status }}</h3>
    <h3>Email</h3>
    <input type="text" id="updateEmail" v-model="email" />
    <h3>Username</h3>
    <input type="text" id="updateUsername" v-model="username">
    <h3>Password</h3>
    <input type="password" id="updatePass" v-model="password" />
    <h3>Bio</h3>
    <textarea id="updateText" v-model="bio"></textarea>
    <h3>Birthdate</h3>
    <input type="text" placeholder="yyyy/mm/dd" id="updateBirthdate" v-model="birthdate">
    <button id="updatebtnStyling" @click="updateProfile">Update</button>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "update-page",
  data() {
    return {
      email: "",
      password: "",
      bio: "",
      token: cookies.get("loginToken"),
      status: "",
      username:"",
      birthdate:""
    };
  },
  methods: {
    updateProfile: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/users",

          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "5GakGJ6glNqzt5rxIP5ON3KkBIgrLaZODehane6UFhUzc"
          },
          data: {
            email: this.email,
            password: this.password,
            bio: this.bio,
            loginToken: this.token,
            username:this.username,
            birthdate:this.birthdate
          }
        })
        .then(response => {
          console.log(response);
          console.log("updated");
          if (this.email == "" ||  this.password == "" || this.bio == ""||this.birthdate==""||this.username=="") {
            this.status = "Update failed";
          } else {
            this.status = "Profile successfully updated";
          }
        })
        .catch(error => {
          console.log(error);
          this.status = "Something went wrong";
        });
    }
  }
};
</script>

<style lang="scss" scoped>
#container {
  display: grid;
  #updatebtnStyling{
    width: 150px;
    height: 30px;
    background: rgb(29, 161, 242);
    color: white;
    border-radius: 20px;
    text-align: center;
  }
 
}
</style>
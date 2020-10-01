<template>
  <div>
      <p>Email</p>
      <input type="text" id="updateEmail" v-model="email">
      <p>Password</p>
      <input type="password" id="updatePass" v-model="password">
      <p>Bio</p>
      <textarea id="updateText" v-model="bio"></textarea>
    <button @click="updateProfile">Update</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "update-page",
  data() {
    return {
      email: "",
      password: "",
      bio: ""
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
              email:this.email,
              password:this.password,
              bio:this.bio
          }
        })
        .then(response => {
          console.log(response);
        //   this.username = response.data[0].username;
        //   this.email = response.data[0].email;
        //   this.bio = response.data[0].bio;
        //   this.birthdate = response.data[0].birthdate;
        console.log("updated")
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
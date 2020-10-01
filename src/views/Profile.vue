<template>
  <div>
    <div id="container">
      <h2>My Profile</h2>
      <h3>{{ "Username:" + "" + username }}</h3>
      <h3>{{ "Email:" + "" + email }}</h3>
      <h3>{{ "Bio:" + "" + bio }}</h3>
      <h3>{{ "Birthdate:" + "" + birthdate }}</h3>
    </div>
    <update-page></update-page>
    <delete-page></delete-page>
  </div>
</template>

<script>
import axios from "axios";
import DeletePage from '../components/Delete.vue';
import UpdatePage from '../components/UpdateProfile.vue';

export default {
  name: "profile-page",
  components:{
      DeletePage,
      UpdatePage

  },

  data() {
    return {
      username: "",
      email: "",
      bio: "",
      birthdate: "",
      
    };
  },
  mounted() {
    this.getInfo();
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
            userId: this.$store.state.userid
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
  justify-items: center;
  align-items: center;
}
</style>
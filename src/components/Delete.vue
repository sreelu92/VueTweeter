<template>
  <div>
      <input type="password"  id="passwordInput" v-model="password">
    <button @click="deleteProfile">Delete Profile</button>
  </div>
</template>

<script>
import cookies from 'vue-cookies'
import axios from 'axios'
export default {
  name: "delete-page",
  data() {
      return {
        token:cookies.get('loginToken'),
        password:""
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
            password:this.password
          }
        })
        .then(response => {
          console.log(response);
          this.$router.push({ name: "welcome-page" });
        })
        .catch(error => {
          console.log(error);

        });
    }
  }
};
</script>

<style lang="sass" scoped>

</style>
<template>
  <div>
    <button @click="deleteTweet">Delete</button>

    <h2>{{status}}</h2>
  </div>
  
</template>

<script>
import axios from "axios"
import cookies from "vue-cookies"
export default {
  name: "modify-page",
  data() {
    return {
      token: cookies.get("loginToken"),
      status:""
    };
  },
  props:{
      tweetid:Number
  },
  methods: {
    deleteTweet() {
      axios
        .request({
          url: "https://tweeterest.ml/api/tweets",

          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "5GakGJ6glNqzt5rxIP5ON3KkBIgrLaZODehane6UFhUzc"
          },

          data: {
            loginToken: this.token,
            tweetId:this.tweetid
           
          }
        })
        .then(response => {
          this.$root.$emit('ModifyArray',this.tweetid);
          this.status = "Deleted";
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
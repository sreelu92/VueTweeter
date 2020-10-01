<template>
  <div id="container">
    <h3 id="welcomeStyling">{{ "Welcome" + " " + name }}</h3>
        <icon-page></icon-page>

    <create-tweet></create-tweet>
  </div>
</template>

<script>
//import axios from "axios";
import cookies from "vue-cookies";
import CreateTweet from "../components/CreateTweet.vue";
import IconPage from "../components/Icons.vue";

export default {
  name: "home-page",
  components: {
    CreateTweet,
    IconPage
  },
  data() {
    return {
      token: cookies.get("loginToken"),
      user: cookies.get("username")
    };
  },
  mounted: function() {
    if (this.token == undefined) {
      this.$router.push({ name: "welcome-page" });
    }
  },
  computed: {
    name() {
      return this.$store.state.username;
    }
  }
};
</script>

<style lang="scss" scoped>
#container {
  display: grid;
  justify-items: center;
  align-items: center;
  #welcomeStyling{
      font-size: x-large;
  }
  
}
</style>
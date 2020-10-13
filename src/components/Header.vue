<template>
  <div id="container">
    <logout-page></logout-page>

    <div id="pageStyling">
      <router-link class="routerStyling" to="/home"> Home</router-link>
      <router-link class="routerStyling" to="/discover"> Discover</router-link>
      <router-link class="routerStyling" to="/tweets">My Tweets</router-link>
      <router-link class="routerStyling" to="/feeds">Feed Page</router-link>
    </div>
  </div>
</template>

<script>
import LogoutPage from "../components/LogOut.vue";

export default {
  name: "header-page",
  components: {
    LogoutPage
  }
};
</script>

<style lang="scss" scoped>
#container {
  #pageStyling {
    display: grid;
    column-gap: 4vw;
    grid-template-columns: repeat(4, 1fr);
    background: rgb(29, 161, 242);
    padding: 25px;
    .routerStyling{
      color: white;
      font-size: small;
      text-decoration: none;

      }
  }
  @media only screen and(min-width:600px) {
    #pageStyling{
      padding: 75px;
      width:80%;
      .routerStyling{
        font-size: x-large;
      }
    }
  }
  @media only screen and(min-width:1020px){
    #pageStyling{
      width:96%;
      padding:30px;
    }
  }


}
</style>
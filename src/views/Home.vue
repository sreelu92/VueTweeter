<template>
  <div id="container">
    <div id="log">
      <img
        id="twitterImage"
        src="data:image/png;base64,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"
        alt="logo"
      />
      <header-page></header-page>
    </div>
    <div id="imageStyling">
      <icon-page></icon-page>
      <h3 id="welcomeStyling">{{ "Welcome" + " " + getName }}</h3>
    </div>

    <create-tweet></create-tweet>
    <footer-page></footer-page>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import CreateTweet from "../components/CreateTweet.vue";
import IconPage from "../components/Icons.vue";
import HeaderPage from "../components/Header.vue";
import FooterPage from "../components/Footer.vue";
export default {
  name: "home-page",
  components: {
    CreateTweet,
    IconPage,
    HeaderPage,
    FooterPage
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
    getName() {
      return this.user;
    }
  },
  methods: {
    follow: function() {
      this.$router.push({ name: "follow-page" });
    }

  }
};
</script>

<style lang="scss" scoped>
#container {
  display: grid;
  justify-items: center;
  align-items: center;
  min-height: 10vh;
  row-gap: 7vh;
  width:100%;
  
  #log {
    grid-template-columns: repeat(autofit, minmax(250px, 1fr));
    #twitterImage {
      width: 20%;
      margin-right: 10vw;
    }
  }
  #imageStyling {
    display: grid;
    grid-template-columns: repeat(2,1fr);

    #welcomeStyling {
      font-size: larger;
      margin-top: 2vh;
      margin-right: 15vw;
     
    }
  }
  @media only screen and(min-width:600px) {
    row-gap: 7vh;
    min-height: 20vh;
    #log{
      #twitterImage{
        margin-right:80vw;
      }
    }
    #imageStyling{
 
      grid-template-columns: repeat(auto-fit,minmax(100px,1fr));

      #welcomeStyling{
        font-size: 2em;
        margin-top: 3vh;
      }
    }
  }
  @media only screen and(min-width:1020px){
    min-height:9vh;
    row-gap:4vh;
    #log{
      #twitterImage{
        width:10%;
      }

    }
    #imageStyling{

      grid-template-columns: repeat(2,1fr);
      


    }
  }

}
</style>
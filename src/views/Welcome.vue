<template>
  <div id="container">
    <img
      id="tweeterImage"
      src="https://www.creativefreedom.co.uk/wp-content/uploads/2017/06/Twitter-logo-2012.png"
      alt="logo of tweeter"
    />
    <div id="links">
      <h3 id="tweeterHeading">Join Twitter today</h3>

      <router-link class="linkStyling" to="/signup"> Sign up</router-link>
      <router-link class="linkStyling" to="/login">Login</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "welcome-page"
};
</script>

<style lang="scss" scoped>

#container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  align-items: center;
  justify-items: center;
  min-height: 40vh;
  row-gap: 20vh;
  #tweeterImage {
    width: 40%;
    margin-top: 15vh;
  }

  #links {
    display: grid;
    row-gap: 5vh;
    justify-items: center;
    align-items: center;

    .linkStyling {
      border-radius: 10px;
      padding: 10px;
      width: 200px;
      background-color: rgb(29, 161, 242);
      text-decoration: none;
      color: white;
      text-align: center;
    }
  }
  @media only screen and(min-width:600px) {
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));

    #tweeterImage {
      width: 40%;
    }
    #links {
      #tweeterHeading {
        font-size: xx-large;
      }
      .linkStyling {
        padding: 20px;
        font-size: x-large;
      }
    }
  }
  @media only screen and(min-width:1020px) {
    min-height: 80vh;


  }
}
</style>
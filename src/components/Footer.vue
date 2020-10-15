<template>
  <div id="container">
    <div id="footerStyling">
      <h5 id="h5Styling">2020 Twitter, Inc.</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer-page"
};
</script>

<style lang="scss" scoped>
#container {
  height: 1vh;
  width: 97%;
  background: rgb(29, 161, 242);
  #footerStyling {
    #h5Styling {
      color: white;
    }
  }
  @media only screen and(min-width:600px) {
      width:95%;
      #footerStyling{
          #h5Styling{
              font-size: x-large;
          }
      }
  }
  @media only screen and(min-width:1020px){
    width:99%;
   
  }

}
</style>
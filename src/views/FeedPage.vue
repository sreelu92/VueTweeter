<template>
    <div id="container">
        <header-page></header-page>
        <h2 id="h2Styling">Tweets</h2>
        <alltweets-page></alltweets-page><br><br><br><br><br><br><br><br>
        <footer-page></footer-page>

    </div>
</template>

<script>
import AlltweetsPage from "../components/AllTweets.vue"
import HeaderPage from "../components/Header.vue";
import FooterPage from "../components/Footer.vue";


    export default {
        name:"feed-page",
        components:{
            AlltweetsPage,
            HeaderPage,
            FooterPage
        }
        
        
    }
</script>

<style lang="scss" scoped>
#container{
    display: grid;
    justify-items: center;
    align-items: center;
    min-height: 10vh;
    row-gap: 8vh;
    @media only screen and(min-width:600px) {
        min-height: 20vh;
        #h2Styling{
            font-size:3em;
        }

    }

}

</style>
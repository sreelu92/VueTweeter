<template>
    <div id="container">
        <router-link class="routerStyling" to="/"> Go Back</router-link>

        <signup-form></signup-form>

    </div>
</template>

<script>
import SignupForm from "../components/SignupForm.vue"
    export default {
        name:"signup-page",
        components:{
            SignupForm,
        }
        
    }
</script>

<style lang="scss" scoped>
#container{
    .routerStyling{
        text-decoration: none;
        color:rgb(29, 161, 242);
        font-size: large;
    }
    @media only screen and(min-width:600px) {
        .routerStyling{
            font-size: xx-large;
        }
    }

}


</style>
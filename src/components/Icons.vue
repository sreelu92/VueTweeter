<template>
    <div id="container">
        <img id="iconImage1" @click="gotoProfile"
        src="data:image/png;base64,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" alt="image of profile icon">

    </div>
</template>

<script>
    export default {
        name:"icon-page",
        methods: {
           gotoProfile:function(){
           this.$router.push({ name: "profile-page" });

           }
        },
        
    }
</script>

<style lang="scss" scoped>

#container{
    #iconImage1{
        width:25%;

    }
    @media only screen and(min-width:600px) {
        #iconImage1{
            width:60%;
            margin-right: 5vw;
            margin-bottom: 3vh;


        }

    }
    @media only screen and(min-width:1020px){
        #iconImage1{
            width: 16%;
            margin-bottom: 2vh;
            margin-top: 0;
        }

    }



}

</style>
<template>
    <div id="container">
        <div id="tweeterContainer">
            <textarea  id="tweetTextarea" v-model="tweets" ></textarea><br>
            <button @click="createTweet" id="tweetButton">Tweet</button>
            <h3 id="tweeth1">{{chats}}</h3>

        </div>

    </div>
</template>

<script>
import cookies from "vue-cookies";
import axios from "axios";
    export default {
        name:"create-tweet",
        data() {
            return {
                tweets: "",
                token: cookies.get("loginToken"),
                 chats:''

            }
        },
        methods: {
    createTweet: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/tweets",

          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "5GakGJ6glNqzt5rxIP5ON3KkBIgrLaZODehane6UFhUzc"
          },
          data: {
          content:this.tweets,
          loginToken:this.token
          }
        })
        .then(response => {
            console.log(response)
            this.chats=response.data.content
         
        
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

        
    }
</script>

<style lang="scss" scoped>
#container{
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
    #tweeterContainer {
        #tweetTextarea{
            margin-top: 4vh;
            margin-left: 8vw;

        }
        #tweetButton{
            margin-left: 50vw;
        }
        #tweeth1{
            margin-left:30vw ;
        }
    }
}



</style>
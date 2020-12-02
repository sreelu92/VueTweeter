<template>
  <div id="container">
    <div id="formStyling">
    <p class="ptagStyling">Email</p>
    <input class="inputStyling" type="text" id="email-input" v-model="email"  />
    <p class="ptagStyling">Username</p>
    <input class="inputStyling" type="text" id="username-input" v-model="username" />
    <p class="ptagStyling">Password</p>
    <input class="inputStyling" type="password" id="pawwsord-input" v-model="password" />
    <p class="ptagStyling">Bio</p>
    <textarea class="inputStyling" id="bio-input" v-model="bio" placeholder="Character limit 200" rows="4" cols="40" ></textarea>
    <p class="ptagStyling">Birthday</p>
    <input class="inputStyling" type="text" id="birthday-input" v-model="birthday" />
    </div>
    <h3 @click="signupUser" id="signupStyling">Sign Up</h3>
    <h2>{{ status }}</h2>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "signup-form",
  data() {
    return {
      email: "",
      username: "",
      password: "",
      bio: "",
      birthday: "",
      status: ""
    };
  },
  methods: {
    signupUser: function() {
      axios
        .request({
          url: "https://mytweeters.ml/api/users",

          method: "POST",
          headers: {
            "Content-Type": "application/json",
            
          },
          data: {
            email: this.email,
            username: this.username,
            password: this.password,
            bio: this.bio,
            birthdate: this.birthday
          }
        })
        .then(response => {
          console.log(response)
          if (response.data.loginToken== "") {
            this.$router.push({ name: "signup-page" });
          }
        
        else{
          cookies.set("loginToken", response.data.loginToken);
          this.$store.commit('username',response.data.username);
          this.$store.commit("userId",response.data.userId);
          cookies.set('userId',response.data.userId);
          cookies.set('username',response.data.username);



          //send to home page
          this.$router.push({ name: "home-page" });
          }
        })
        .catch(error => {
          console.log(error);
          this.status = "User Already Exit";
        });
    }
  }
};
</script>

<style lang="scss" scoped>
#container {
  margin-top: 5vh;
  display: grid;
  font-size: large;
  font-weight: bold;
  justify-items: center;
  align-items: center;
  row-gap: 4vh;
  .inputStyling{
    height:30px;
    width:200px;
  }
  #formStyling{
    display: grid;
    text-align: center;
    row-gap: 3vh;
    background:rgb(29, 161, 242); 
    padding:28px;
    border-radius:10px ;
    color: white;

  }
  #signupStyling {
    border-radius: 10px;
    padding: 10px;
    width: 100px;
    background-color: rgb(29, 161, 242);
    color: white;
    text-align: center;
  }
  @media only screen and(min-width:600px) {
    #formStyling{
      padding: 15%;
      background-color: rgb(29, 161, 242);
    }
    .inputStyling{
      height:35px;
      width:300px;
      font-size:x-large;
    }
    .ptagStyling{
      font-size: xx-large;
    }
    #signupStyling{
      border-radius: 20px;
      width: 150px;
      font-size:x-large;
      padding: 20px;
    }
   
  }
  @media only screen and(min-width:1020px) {
    #formStyling{
      padding: 50px;
      #bio-input{
        font-size: larger;
      }
    }

  }


}
</style>
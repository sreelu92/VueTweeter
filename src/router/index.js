import Vue from "vue";
import VueRouter from "vue-router";
import SignupPage from "../views/SignUp.vue";
import LoginPage from "../views/Login.vue";
import WelcomePage from "../views/Welcome.vue";
import HomePage from "../views/Home.vue";
import ProfilePage from "../views/Profile.vue";


Vue.use(VueRouter);

const routes = [
  {
    path:"/",
    name:"welcome-page",
    component: WelcomePage

  } ,
  {
    path:"/signup",
    name:"signup-page",
    component: SignupPage

  } ,
  {
    path:"/login",
    name:"login-page",
    component: LoginPage

  } ,
  {
    path:"/home",
    name:"home-page",
    component: HomePage

  } ,
  {
    path:"/profile",
    name:"profile-page",
    component: ProfilePage

  } 
  
];

const router = new VueRouter({
  routes
});

export default router;

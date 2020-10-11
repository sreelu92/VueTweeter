import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username:"",
    userid:"",
    tweets:[],
    count:[]
   
  
  },
  mutations: {
    username:function(state,name){
      state.username=name;

    },
    userId:function(state,id){
      state.userid=id;

    },
    updateTweet:function(state,tweeter)
    {
      state.tweets.push(tweeter);
    },
    updateList:function(state,users){
      state.count.push=users;
    }
   
    
    

  },
  actions: {},
  modules: {}
});

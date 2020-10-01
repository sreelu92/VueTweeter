import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username:"",
    userid:""
  },
  mutations: {
    username:function(state,name){
      state.username=name;

    },
    userId:function(state,id){
      state.userid=id;

    }
  },
  actions: {},
  modules: {}
});

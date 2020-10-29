import Vue from 'vue'
import Vuex from 'vuex'
import autocomplete from "@/app/store/autocomplete";
import account from "@/app/store/account";

Vue.use(Vuex)

const store = new Vuex.Store({
   modules: {
       autocomplete: autocomplete,
       account: account
   }
});
export default store;
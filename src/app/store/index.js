import Vue from 'vue'
import Vuex from 'vuex'
import autocomplete from "@/app/store/autocomplete";
import account from "@/app/store/account";
import basket from "@/app/store/basket";
import product from "@/app/store/product";

Vue.use(Vuex)

const store = new Vuex.Store({
   modules: {
       autocomplete: autocomplete,
       account: account,
       basket: basket,
       product: product
   }
});
export default store;
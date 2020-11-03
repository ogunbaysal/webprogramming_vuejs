import Vue from 'vue'
import Vuex from 'vuex'
import autocomplete from "@/app/store/autocomplete";
import account from "@/app/store/account";
import basket from "@/app/store/basket";
import product from "@/app/store/product";
import VuexPersistence from "vuex-persist";
import category from "@/app/store/category";
const vuexLocal = new VuexPersistence({
    storage: window.localStorage
});
Vue.use(Vuex)

const store = new Vuex.Store({
   modules: {
       autocomplete: autocomplete,
       account: account,
       basket: basket,
       product: product,
       category: category
   },
    plugins: [vuexLocal.plugin]
});
export default store;
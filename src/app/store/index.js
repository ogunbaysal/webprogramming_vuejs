import Vue from 'vue'
import Vuex from 'vuex'
import autocomplete from "@/app/store/autocomplete";
import account from "@/app/store/account";
import basket from "@/app/store/basket";
import product from "@/app/store/product";
import VuexPersistence from "vuex-persist";
import category from "@/app/store/category";
import favorite from "@/app/store/favorite";
import advertisement from "@/app/store/advertisement";
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
       category: category,
       favorite: favorite,
       advertisement: advertisement
   },
    plugins: [vuexLocal.plugin]
});
export default store;
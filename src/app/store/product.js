import {db} from "@/app/firebase";

const product = {
    namespaced: true,
    state: () => ({
        products: [],
    }),
    mutations: {
        _setProducts(state, items){
           state.products = items;
        }
    },
    actions: {
        retrieveProducts({commit}){
            db.collection('products').get().then(snapshot => {
                let tempItems = [];
                snapshot.forEach(data => {
                    tempItems.push(data.data());
                })
                commit("_setProducts", tempItems);
            });
        },
    },
    getters: {
        isLoggedIn(state){
            return state.user !== null;
        }
    }
}
export default product;
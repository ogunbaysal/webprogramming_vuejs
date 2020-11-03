import {db} from "@/app/firebase";

const product = {
    namespaced: true,
    state: () => ({
        searchProducts: [],
        filteredProducts: [],
        filters: [],
        filterOptions: []
    }),
    mutations: {
        _setProducts(state, items){
           state.products = items;
        },
        _setFilter(state, { key, value }){
            state.filters[key] = value;
        },
        _setFilteredProducts(state, items) {
            state.filteredProducts = items;
        }
    },
    actions: {
        setFilter({commit}, params){
            commit("_setFilter", params);

        },
        retrieveProducts({commit}){
            db.collection('products').get().then(snapshot => {
                let tempItems = [];
                snapshot.forEach(data => {
                    tempItems.push(data.data());
                })
                commit("_setFilteredProducts", tempItems);
            });
        },
    },
    getters: {
        getFilteredProducts(state){
            return state.filteredProducts;
        }
    }
}
export default product;
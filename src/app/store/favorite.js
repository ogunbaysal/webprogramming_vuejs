
const favorite = {
    namespaced: true,
    state: () => ({
        items: []
    }),
    mutations: {
        _addItem(state, { product, options }){
            state.items[product.id] = {
                product: product,
                options: options
            }
        },
        _removeItem(state, product_id) {
            if(state.items[product_id] !== undefined){
                state.items = state.items.filter((el, index) => {
                   return index !== product_id;
                });
            }
        },
    },
    actions: {
        addItem({ commit }, context){
            commit("_addItem", context);
        },
        removeItem({commit}, context){
            commit("_removeItem", context);
        },
    },
    getters: {
        favorites(state){
            return state.items;
        },
        isFavorite(state, product_id){
            return state.items[product_id] !== undefined;
        }
    }
}
export default favorite;
import {uuid} from "vue-uuid";

const basket = {
    namespaced: true,
    state: () => ({
        items: []
    }),
    mutations: {
        _addBasketItem(state, item){
            state.items.push({
                id: uuid.v1(),
                item: item,
                amount: 1
            });
        },
        _removeBasketItem(state, basket_id){
            for (let i = 0; i < state.items.length; i++){
                if(state.items[i].id === basket_id){
                    delete state.items[i];
                }
            }
        },
        _updateAmount(state, basket_id, amount = 1){
            for (let i = 0; i < state.items.length; i++){
                if(state.items[i].id === basket_id){
                    state.items[i].amount += amount;
                    if(state.items[i].amount <= 0){
                        delete state.items[i];
                    }
                }
            }
        }
    },
    actions: {
        addBasketItem({commit}, item){
            commit("_addBasketItem", item);
        },
        removeBasketItem({commit}, basket_id) {
            commit("_removeBasketItem", basket_id);
        },
        updateItemAmount({commit}, basket_id, amount = 1) {
            commit("_updateAmount", basket_id, amount);
        }
    },
    getters: {
        basket(state){
            return state.items;
        }
    }
}
export default basket;
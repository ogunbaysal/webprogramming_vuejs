import {uuid} from "vue-uuid";

const basket = {
    namespaced: true,
    state: () => ({
        items: []
    }),
    mutations: {
        _addBasketItem(state, item){
            for (let i = 0; i < state.items.length; i++){
                if(state.items[i].id === item.id){
                    state.items[i].amount++;
                    return true;
                }
            }
            state.items.push({
                id: uuid.v1(),
                item: item,
                amount: 1
            });
        },
        _removeBasketItem(state, basket_id){
            for (let i = 0; i < state.items.length; i++){
                if(state.items[i].id === basket_id){
                    state.items[i].amount--;
                    if(state.items[i].amount <= 0) {
                        state.items.splice(i, 1);
                    }
                }
            }
        },
        _updateAmount(state, {basket_id, amount}){
            for (let i = 0; i < state.items.length; i++){
                if(state.items[i].id === basket_id){
                    state.items[i].amount = amount;
                    if(state.items[i].amount <= 0){
                        state.items.splice(i, 1);
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
        updateItemAmount({commit}, param) {
            commit("_updateAmount", param);
        }
    },
    getters: {
        basket(state){
            return state.items;
        }
    }

}
export default basket;
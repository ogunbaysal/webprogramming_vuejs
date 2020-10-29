import {db} from "@/app/firebase";

const autocomplete = {
    namespaced: true,
    state: () => ({
        param: '',
        history: [],
        product_results: [],
        category_results: []
    }),
    mutations: {
        _addHistory(state, item) {
            state.history.push(item);
        },
        _setParam(state, param){
            state.param = param;
        },
        _setProductResults(state, results) {
            state.product_results = results;
        },
        _setCategoryResults(state, results) {
            state.category_results = results;
        },
        _clearHistory(state){
            state.history = [];
        }
    },
    actions: {
        addHistory({commit}, item) {
              commit("_addHistory", item);
        },
        clearHistory({commit}){
            commit("_clearHistory");
        },
        setParam({commit}, payload) {
            commit('_setParam', payload);
            db.collection('products').get().then(snapshot => {
                const tempData = [];
                snapshot.forEach(item => {
                    const data = item.data();
                    if(data.title.toLowerCase().includes(payload.toLowerCase())){
                        tempData.push(data);
                    }
                })
                commit('_setProductResults', tempData);
            });
            db.collection('categories').get().then(snapshot => {
                const tempData = [];
                snapshot.forEach(item => {
                    const data = item.data();
                    if(data.title.toLowerCase().includes(payload.toLowerCase())){
                        tempData.push(data);
                    }
                })
                commit('_setCategoryResults', tempData);
            });
        }
    },
    getters: {
        getParam(state){
            return state.param;
        },
        getHistory(state){
            return state.history;
        },
        getResults(state){
            return [
                ...state.category_results,
                ...state.product_results
            ]
        }
    }
}
export default autocomplete;
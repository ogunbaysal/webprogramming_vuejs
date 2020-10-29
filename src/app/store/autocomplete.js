import ProductRepository from "@/repositories/ProductRepository";
import CategoryRepository from "@/repositories/CategoryRepository";

const autocomplete = {
    namespaced: true,
    state: () => ({
        param: '',
        history: [],
        results: []
    }),
    mutations: {
        _addHistory(state, item) {
            state.history.push(item);
        },
        _setParam(state, param){
            state.param = param;
        },
        _setResults(state, results) {
            state.results = results;
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
            const searchResult = [
                ...ProductRepository.searchProducts(payload),
                ...CategoryRepository.searchCategories(payload)
            ]
            commit('_setResults', searchResult);
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
            return state.results;
        }
    }
}
export default autocomplete;
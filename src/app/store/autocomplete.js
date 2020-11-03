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
            const max = 15;
            let count = 0;
            db.collection('products').get().then(snapshot => {
                const tempData = [];
                snapshot.forEach(item => {
                    if(count >= max) return false;
                    const data = item.data();
                    if(data.title.toLowerCase().includes(payload.toLowerCase())){
                        tempData.push(data);
                        count++;
                    }
                })
                commit('_setProductResults', tempData);
            });
            db.collection('categories').get().then(snapshot => {
                const tempData = [];
                if(count >= max) return false;
                snapshot.forEach(item => {
                    const data = item.data();
                    if(count >= max) return false;
                    if(data.title.toLowerCase().includes(payload.toLowerCase())){
                        tempData.push(data);
                        count++;
                    }
                    for(let i = 0; i < data.children.length; i++) {
                        if(count >= max) return false;
                        const level1 = data.children[i];
                        if(level1.title.toLowerCase().includes(payload.toLowerCase())){
                            tempData.push(level1);
                            count++;
                        }
                        for(let j = 0; j < level1.children.length; j++){
                            if(count >= max) return false;
                            const level2 = level1.children[j];
                            if(level2.title.toLowerCase().includes(payload.toLowerCase())){
                                tempData.push(level2);
                                count++;
                            }
                        }
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
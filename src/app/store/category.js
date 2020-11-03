import {db} from "@/app/firebase";

const category = {
    namespaced: true,
    state: () => ({
       categories: []
    }),
    mutations: {
        _setCategories(state, list) {
            state.categories = list;
        }
    },
    actions: {
        initializeCategories({commit, state}) {
            if(state.categories.length === 0) {
                db.collection('categories').get().then(snapshot => {
                    let tempItems = [];
                    snapshot.forEach(data => {
                        tempItems.push(data.data());
                    });
                    commit("_setCategories", tempItems);
                });
            }
        }
    },
    getters: {
        getCategories(state){
            return state.categories;
        }
    }
}
export default category;
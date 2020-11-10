import {db} from "@/app/firebase";

const advertisement = {
    namespaced: true,
    state: () => ({
        rectangular_advertisement: []
    }),
    mutations: {
        _setRectangularItems(state, item){
            state.rectangular_advertisement = item;
        }
    },
    actions: {
        initializeRectangularAdvertisements({commit}){
            db.collection('advertisement').get().then(snapshot => {
                let tempItems = [];
                snapshot.forEach(data => {
                    tempItems.push(data.data());
                });
                commit("_setRectangularItems", tempItems);
            });
        }
    },
    getters: {
        getRectangularAdvertisements(state){
            return state.rectangular_advertisement;
        }
    }
}
export default advertisement;
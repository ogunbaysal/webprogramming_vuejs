
const account = {
    namespaced: true,
    state: () => ({
        user: null
    }),
    mutations: {

    },
    actions: {

    },
    getters: {
        isLoggedIn(state){
            return state.user !== null;
        }
    }
}
export default account;
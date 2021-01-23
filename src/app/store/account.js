import {auth, db} from "@/app/firebase";

export const state = () => ({
    isLoggedIn: false,
    user: null,
    message: null,
});
export const mutations = {
    SET_LOGGED_IN(state, value) {
        state.isLoggedIn = value;
    },
    SET_USER(state, data) {
        state.user = data;
    },
    SET_MESSAGE(state, data) {
        state.message = data;
    }
};
export const actions = {
    fetchUser({ commit }, user) {
        commit("SET_LOGGED_IN", user !== null);
        if (user) {
            commit("SET_USER", {
                displayName: user.displayName,
                email: user.email
            });
        } else {
            commit("SET_USER", null);
        }
    },
    registerWithEmailAndPassword({commit}, {email, password, gender}) {
        auth.createUserWithEmailAndPassword(email, password)
            .then(data => {
                data.user.updateProfile({
                    gender: gender
                });
                commit("SET_LOGGED_IN", data.user !== null);
                if (data.user) {
                    commit("SET_USER", {
                        displayName: data.user.displayName,
                        email: data.user.email
                    });
                } else {
                    commit("SET_USER", null);
                }
                this.$router.replace('/');
            })
            .catch(err => {
                console.log(err);
            })
    },
    loginWithEmailAndPassword({commit, rootState}, {email, password}) {
        auth.signInWithEmailAndPassword(email, password)
            .then(data => {
                commit("SET_LOGGED_IN", data.user !== null);
                if (data.user) {
                    commit("SET_USER", {
                        displayName: data.user.displayName,
                        email: data.user.email
                    });
                    db.collection('basket').doc(rootState.account.user.email).get().then(snapshot => {
                        let obj = snapshot.data();
                        console.log(obj);
                        rootState.basket.items = Object.values(obj);
                    });
                } else {
                    commit("SET_USER", null);
                }
                this.$router.replace('/');
            })
            .catch(err => {
                commit("SET_MESSAGE", err.message);
                console.log(err);
            })
    },
    logout({commit}) {
        commit("SET_LOGGED_IN", false);
        commit("SET_USER", null);
    },
    setMessage({commit}, message) {
        commit("SET_MESSAGE", message);
    }
};
export const getters = {
    user(state) {
        return state.user;
    },
    isLoggedIn(state) {
        return state.isLoggedIn;
    },
    message(state) {
        return state.message;
    }
};

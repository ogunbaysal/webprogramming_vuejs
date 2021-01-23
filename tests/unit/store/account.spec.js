import Vuex from "vuex";
import store from "@/app/store";
import {mount} from "@vue/test-utils";
import Login from "@/app/components/Auth/Login";

describe("store/account", () => {

    const wrapper = mount(Login, {
        store,
    })

    describe('Account Mutation Tests', () => {

        test('Account Logged In Mutation Test', () => {
            wrapper.vm.$store
                .commit('account/SET_LOGGED_IN', true);
            expect(store.getters['account/isLoggedIn']).toEqual(true);
        });

        test('Account Message Mutation Test', () => {
            wrapper.vm.$store
                .commit('account/SET_MESSAGE', 'Hello World');
            expect(store.getters['account/message']).toEqual('Hello World');
        });

        test('Account User Mutation Test', () => {
            wrapper.vm.$store
                .commit('account/SET_USER',  { username: 'john' });
            expect(store.getters['account/user']).toEqual({ username: 'john' });
        })
    });

});

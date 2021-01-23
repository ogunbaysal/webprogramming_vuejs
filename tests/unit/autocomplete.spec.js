import { shallowMount } from '@vue/test-utils'
import Login from "@/app/components/Auth/Login";
import store from "@/app/store";

describe('Login', () => {
    it('rendered', () => {
        const wrapper = shallowMount(Login, {
            store,
            stubs: ['router-link'],
        })
        expect(wrapper).toBeTruthy();
    })
    it('Login Data Testing', () => {
        const wrapper = shallowMount(Login, {
            stubs: ['router-link'],
            store,
            data() {
                return {
                    display_history: true,
                    title: 'Geçmiş Aramalar',
                    display_suggestions: false
                }
            }
        })
        expect(wrapper.findAll('.suggestions-container').length).toBe(0);
        expect(wrapper.vm.$data.display_history).toBe(false)
    })
})

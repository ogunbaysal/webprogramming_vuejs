import { shallowMount } from '@vue/test-utils'
import Login from "@/app/components/Auth/Login";
describe('Login', () => {
    it('rendered', () => {
        const wrapper = shallowMount(Login, {
            stubs: ['router-link'],
        })
        expect(wrapper).toBeTruthy();
    })
    it('Login Data Testing', () => {
        const wrapper = shallowMount(Login, {
            stubs: ['router-link'],
            data() {
                return {
                    form: {
                        email: 'ozgurdurak@mail.com',
                        password: '123456'
                    },
                    showPassword: true
                }
            }
        })
        expect(wrapper.find('#login-email').element.value).toBe('ozgurdurak@mail.com');
        expect(wrapper.find('#login-password-input').element.value).toBe('123456');
    })
})

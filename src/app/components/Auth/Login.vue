<template>
    <div class="q-layout login">
        <form>
            <div class="q-input-wrapper email-input">
                <label class="q-label">E-Posta</label
                ><input
                class="q-input"
                type="text"
                id="login-email"
                list="email-list"
                name="login email"
                autocomplete="username"
                data-testid="email-input"
                v-model="form.email"
            />
            </div>
            <datalist id="email-list"></datalist>
            <div class="password-wrapper">
                <div class="password">
                    <div class="q-input-wrapper">
                        <label class="q-label">Şifre</label>
                        <input

                            class="q-input"
                            :type="showPassword ? 'text' : 'password'"
                            name="login-password"
                            id="login-password-input"
                            data-testid="password-input"
                            autocomplete="current-password"
                            v-model="form.password"
                        />
                    </div>
                    <i @click="showPassword = !showPassword" :class="showPassword ? 'i-eye-close' : 'i-eye-open'"></i>
                </div>
            </div>
            <div class="forgot-password">
                <a><span>Şifremi Unuttum</span></a>
            </div>
            <button
                class="q-primary q-fluid q-button-medium q-button submit"
                type="submit" @click="login"
            >
                <span>Giriş Yap</span>
            </button>
        </form>
    </div>
</template>

<script>
export default {
    name: "Login",
    data: function() {
        return {
            form: {
                email: '',
                password: ''
            },
            showPassword: false,
        };
    },
    methods: {
        login() {
            alert('Logining with Email:' + this.form.email);
        }
    }
}
</script>

<style scoped>
    #login-password-input {
        height: 44px !important;
    }
</style>
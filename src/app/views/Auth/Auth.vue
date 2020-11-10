<template>
    <div id="login-register">
        <div class="lr-title">
            <h1>Merhaba,</h1>
            <h3>Trendyol’a giriş yap veya hesap oluştur, indirimleri kaçırma!</h3>
        </div>
        <div class="q-layout lr-header">
            <div class="flex-center header-buttons">
                <button
                    class="q-secondary q-button-medium q-button tab button mr-5 left"
                    :class="isLogin ? 'active' : ''"
                    @click="isLogin = true"
                >
                    <span>Giriş Yap</span></button
                ><button
                class="q-secondary q-button-medium q-button tab button right"
                :class="isLogin ? '' : 'active'"
                @click="isLogin = false"
            >
                <span>Üye Ol</span>
            </button>
            </div>
        </div>
        <div class="lr-container">
            <Login v-if="isLogin === true" />
            <Register v-if="isLogin === false" />
            <div class="social-account-login-buttons">
                <div class="q-layout social-login-button flex flex-1">
                    <div
                        class="social-login-icon"
                        style="background-color: rgb(76, 110, 168)"
                    >
                        <i class="q-icon icon-facebook i-facebook"></i>
                    </div>
                    <div class="flex flex-column">
                        <div>
                            <div style="text-transform: capitalize">facebook</div>
                            <small>ile kaydol</small>
                        </div>
                    </div>
                </div>
                <div class="q-layout social-login-button flex flex-1">
                    <div
                        class="social-login-icon"
                        style="background-color: rgb(241, 66, 54)"
                    >
                        <i class="q-icon icon-google i-google"></i>
                    </div>
                    <div class="flex flex-column">
                        <div>
                            <div style="text-transform: capitalize">google</div>
                            <small>ile kaydol</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import './auth.css';
import Login from "@/app/components/Auth/Login";
import Register from "@/app/components/Auth/Register";

export default {
    name: "Auth",
    components: {Register, Login},
    data: function () {
        return {
            isLogin: true,

        };
    },
}
</script>

<style scoped>

</style>
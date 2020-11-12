<template>
    <div class="q-layout register">
        <form>
            <div class="q-input-wrapper email-input">
                <label class="q-label">E-Posta</label
                ><input
                id="register-email"
                class="q-input"
                data-testid="email-input"
                list="email-list"
                name="register email"
                type="email"
                value=""
            />
            </div>
            <datalist id="email-list"></datalist>
            <div class="password-wrapper">
                <div class="password">
                    <div class="q-input-wrapper">
                        <label class="q-label">Şifre</label
                        ><input
                        id="register-password-input"
                        autocomplete="new-password"
                        class="q-input"
                        data-testid="password-input"
                        name="register-password"
                        :type="showPassword ? 'text' : 'password'"
                        value=""
                    />
                    </div>
                    <i @click="showPassword = !showPassword" :class="showPassword ? 'i-eye-close' : 'i-eye-open'"></i>
                </div>
                <p class="q-typography q-paragraph q-initial dark-gray">
                    Şifreniz en az 7 karakter olmalı, harf ve rakam içermelidir.
                </p>
            </div>
            <div class="gender flex flex-column">
                <label>Cinsiyet (Opsiyonel)</label>
                <div class="button-group flex">
                    <button
                        class="q-gray q-fluid q-button-medium q-button female border-right-none"
                        type="button"
                    >
                        <span>Kadın</span></button
                    >
                    <button
                        class="q-gray q-fluid q-button-medium q-button male"
                        type="button"
                    >
                        <span>Erkek</span>
                    </button>
                </div>
            </div>
            <div class="marketing-checkbox">
                <div class="q-checkbox-wrapper">
                    <input
                        id="checkbox-true"
                        class="q-input"
                        data-testid="marketing-checkbox"
                        name="marketing-email"
                        type="checkbox" />
                    <label class="q-label" for="checkbox-true">
                    <p class="q-typography q-body q-inline black">
                        Kampanyalardan haberdar olmak için elektronik ileti almak istiyorum.
                    </p>
                    </label>
                </div>
            </div>
            <button
                class="q-primary q-fluid q-button-medium q-button submit"
                data-testid="submit-button"
                type="submit"
            >
                <span>Üye Ol</span>
            </button>
            <div class="contract flex">
                <p>
                    Üye Ol’a basarak&nbsp;<b>Üyelik Koşulları</b>’nı ve&nbsp;<b
                >Kişisel Verilerin Korunması Metni</b
                >’ni kabul ediyorum.
                </p>
            </div>
        </form>
    </div>

</template>

<script>
export default {
    name: "Register",
    data: () => {
        return {
          showPassword: false
        };
    }
}
</script>

<style scoped>
#login-password-input {
    height: 44px !important;
}

#login-register * {
    box-sizing: border-box !important;
}

.lr-container {
    border: 1px solid #e6e6e6;
    border-top: 0;
    padding: 40px;
    padding-top: 37px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
}

</style>
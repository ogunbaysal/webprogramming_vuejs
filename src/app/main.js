import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/common.css';
import './assets/icomoon.css';
import './assets/home.css';
import "./assets/app.css";


Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

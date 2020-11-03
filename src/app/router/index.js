import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/app/views/Home/Home";
import Basket from "@/app/views/Basket/Basket";
import Market from "@/app/views/Market/Market";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Trendyol',
        component: Home
    },
    {
        path: '/sepetim',
        name: 'Sepetim - Trendyol',
        component: Basket
    },
    {
        path: '/urunler',
        name: 'Ürünler - Trendyol',
        component: Market
    },
    // {
    //     path: '/about',
    //     name: 'About',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router

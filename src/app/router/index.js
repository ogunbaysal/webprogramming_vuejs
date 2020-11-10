import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/app/views/Home/Home";
import Basket from "@/app/views/Basket/Basket";
import Market from "@/app/views/Market/Market";
import ProductDetail from "@/app/views/Product/ProductDetail";
import Auth from "@/app/views/Auth/Auth";

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
    {
        path: '/urunler/:category_slug',
        name: 'Ürünler - Trendyol',
        component: Market
    },
    {
        path: '/urun/:product_id',
        name: 'Ürün - Trendyol',
        component: ProductDetail
    },
    {
        path: '/girisyap',
        name: 'Giriş Yap - Trendyol',
        component: Auth
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

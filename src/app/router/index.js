import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/app/views/Home/Home";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'En Trend &#220;r&#252;nler T&#252;rkiye&#39;nin Online Alışveriş Sitesi Trendyol&#39;da',
        component: Home
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

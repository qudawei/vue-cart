import Vue from 'vue';
import VueRouter from 'vue-router'
import Cart from './views/Cart'
import Home from './views/Home'
Vue.use(VueRouter)
let router = new VueRouter({
    routes:[
        {
            path:'/',
            component:Home,
            name:'home'
        },
        {
            path:'/cart',
            component:Cart,
            name:'cart'
        }
    ]
})
export default router
// define router

import {createRouter,createWebHistory} from 'vue-router'
import home from '../views/home.vue'
import products  from '../components/products.vue'
import cart from '../views/cart.vue'
import preview from '../components/preview.vue'

const routes = [
    {
        path:'/',
        component: home,
        children:[
            {
                path: '/products',
                component: products
            },
        ]
    },
    {
        path: '/cart',
        component: cart
    },
    {
        path:'/products/:id',
        component:preview
    }
]


const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
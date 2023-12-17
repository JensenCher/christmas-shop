import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
import Featured from "../views/Featured.vue"
import TodoHome from "../views/TodoHome.vue"
import ProductList from "../views/ProductList.vue"
import Shop from "../views/Shop.vue"
import FrequentAQVue from "../views/FrequentAQ.vue"

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/featured',
        name: 'featured',
        component: Featured,
    },
    {
        path: '/shop',
        name: 'shop',
        component: Shop,
    },
    {
        path: '/faq',
        name: 'faq',
        component: FrequentAQVue,
    },
    {
        path: '/letter/:letter',
        name: 'byLetter',
        component: ProductList,
    },
    {
        path: '/todo',
        name: 'todo',
        component: TodoHome,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
import Vue from  'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home.vue"
import HelloWorld from "../views/HelloWorld.vue"
import History from "../views/History.vue"
import NotFound from "../views/NotFound.vue"

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/helloWorld',
        name: 'helloWorld',
        component: HelloWorld
    },
    {
        path: '/history',
        name: 'history',
        component: History
    },
    {
        path: '*',
        name: "NotFound",
        component: NotFound 
    }

]


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})


export default router
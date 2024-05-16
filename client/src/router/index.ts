import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'
import FriendsActivity from '../pages/FriendsActivity.vue'
import MyActivityView from '../pages/MyActivityView.vue'
import Users from '../pages/Users.vue'
import Statistics from '@/pages/Statistics.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/Friends-Activity',
        name: 'friends-activity',
        component: FriendsActivity
    },
    {
        path: '/Users',
        name: 'users',
        component: Users
    },
    {
        path: '/My-Activity',
        name: 'my-activity',
        component: MyActivityView
    },
    {
        path: '/Statistics',
        name: 'statistics',
        component: Statistics
    }
]



const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'
import FriendsActivity from '../pages/FriendsActivity.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/FriendsActivity',
            name: 'friends-activity',
            component: FriendsActivity
        }
    ]
})

export default router
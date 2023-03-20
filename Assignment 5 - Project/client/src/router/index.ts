
import { createRouter, createWebHistory, type NavigationGuardNext, type RouteLocationNormalized } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FriendsView from '../views/FriendsView.vue'
import StatsView from '../views/StatsView.vue'
import ProfileView from '../views/ProfileView.vue'
import AddPostView from '../views/AddPostView.vue'
import WelcomeView from '../views/WelcomeView.vue'
import { useSession } from '@/model/session'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/friends', name: 'friends', component: FriendsView },
    { path: '/stats', name: 'stats', component: StatsView },
    { path: '/profile', name: 'profile', component: ProfileView },
    { path: '/addpost', name: 'addpost', component: AddPostView },
    { path: '/welcome', name: 'welcome', component: WelcomeView },
  ]
})

export default router

function secureRoute (to : RouteLocationNormalized, from : RouteLocationNormalized, next : NavigationGuardNext ) {
    const session = useSession();
    if (session.user) {
        next()
    } else { 
        next('/login')
    }
}
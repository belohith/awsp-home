import { createRouter, createWebHistory, type RouteLocationNormalized, type NavigationGuardNext} from 'vue-router'
import Home from '../views/Home.vue'
import Workout from '../views/Workout.vue'
import About from '../views/About.vue'
import Admin from '../views/Admin.vue'
import Feed from '../views/Feed.vue'
import SecureRoute from '../views/SecureRoute.vue'
import { useSession } from '../model/session';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', name: 'home', component: Home},
    {path: '/workout', name: 'workout', component: Workout},
    {path: '/about', name: 'about', component: About},
    {path: '/admin', name: 'admin', component: Admin},
    {path: '/feed', name: 'feed', component: Feed},
    {path: '/friends', name: 'friends', component: Feed},
    {path: '/secure', name: 'secure', component: SecureRoute}
  ]
})

export default router

function secureRoute(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext){
  const session = useSession();

  if(session.user){
    next()
  } else {
    if(!session.redirectUrl && to.path != '/secure'){
      session.redirectUrl = to.fullPath;
    }
    next('/secure')
  }
}
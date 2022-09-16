import { createRouter, createWebHistory } from 'vue-router'
import NewLogin from '../views/auth/NewLogin.vue'
import NewRegister from '../views/auth/NewRegister.vue'
// import NotFound from '../components/NotFound'
import Home from '../views/home.vue'
// import Users from '../views/users'
// import Jobs from '../views/jobs'
// import Messages from '../views/messages'
// import Notifications from '../views/notifications'

// import Profile from '../views/profile'
// import Settings from '../views/settings'

import store from '../store'

const routes = [
  {
    path: '/',
    name: 'home',
    meta: { layout: 'home' },
    component: Home,
    beforeEnter(to, from, next) {
      console.log('beforeEnter home', store.getters['user/isLoggedIn'])
      // if (!store.state.user.user) return next('/login')
      return next()
    },
  },
  {
    path: '/register',
    name: 'register',
    meta: { layout: 'auth' },
    component: NewRegister,
    beforeEnter(to, from, next) {
      console.log('beforeEnter register', store.getters['user/isLoggedIn'])
      // if (store.state.user.user) return next('/')
      return next()
    },
  },
  {
    path: '/login',
    name: 'login',
    meta: { layout: 'auth' },
    component: NewLogin,
    beforeEnter(to, from, next) {
      console.log('beforeEnter login', store.getters['user/isLoggedIn'])
      // if (store.state.user.user) return next('/')
      return next()
    },
  },
  // {
  //   path: '/users',
  //   name: 'users',
  //   component: Users,
  // },
  // {
  //   path: '/jobs',
  //   name: 'jobs',
  //   component: Jobs,
  // },
  // {
  //   path: '/messages',
  //   name: 'messages',
  //   component: Messages,
  // },
  // {
  //   path: '/notifications',
  //   name: 'notifications',
  //   component: Notifications,
  // },
  // {
  //   path: '/settings',
  //   name: 'settings',
  //   component: Settings,
  // },
  // {
  //   path: '/profile',
  //   name: 'profile',
  //   component: Profile,
  // },
  // {
  //   path: '/*',
  //   name: 'not-found',
  //   component: NotFound,
  // },
  // {
  //   path: '/feed',
  //   name: 'feed',
  //   meta: { layout: 'home' },
  //   component: Feed,
  //   beforeEnter(to, from, next) {
  //     if (!store.state.user.user) return next('/login')
  //     return next()
  //   },
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
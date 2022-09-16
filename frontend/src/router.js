import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Register from './views/Register.vue'
import Login from './views/Login.vue'
import Dashboard from './views/Dashboard.vue'
import Books from './views/Books.vue'
import Users from './views/Users.vue'

Vue.use(Router)

export default function init(store) {
  return new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
        beforeEnter(to, from, next) {
          if (!store.state.account.user) return next('/login')
          return next()
        }
      },
      {
        path: '/',
        name: 'home',
        component: Home,
        beforeEnter: (to, from, next) => {
          if (!store.state.acccount.user) return next('/login')
          return next()
        }
      },
      {
        path: '/users',
        name: 'users',
        component: Users,
        beforeEnter(to, from, next) {
          if (!store.state.account.user) return next('/login')
          return next()
        }
      },
      {
        path: '/books',
        name: 'books',
        component: Books,
        beforeEnter(to, from, next) {
          if (!store.state.account.user) return next('/login')
          return next()
        }
      },
      {
        path: '/register',
        name: 'register',
        component: Register,
        beforeEnter(to, from, next) {
          if (store.state.account.user) return next('/')
          return next()
        }
      },
      {
        path: '/login',
        name: 'login',
        component: Login,
        beforeEnter(to, from, next) {
          if (store.state.account.user) return next('/')
          return next()
        }
      }
    ]
  })
}

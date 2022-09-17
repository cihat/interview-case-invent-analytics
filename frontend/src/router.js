import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Register from './views/Register.vue'
import Login from './views/Login.vue'
import Dashboard from './views/Dashboard.vue'
import Books from './views/Books.vue'
import Users from './views/Users.vue'
import NotFound from './views/NotFound404.vue'
import BookDetail from './views/BookDetail.vue'

Vue.use(Router)

export default function init(store) {
  return new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/register',
        name: 'register',
        component: Register,
        beforeEnter(to, from, next) {
          if (store.state?.account?.user) return next('/')
          return next()
        }
      },
      {
        path: '/login',
        name: 'login',
        component: Login,
        beforeEnter(to, from, next) {
          if (store.state?.account?.user) return next('/')
          return next()
        }
      },
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
        path: "/books/:id",
        name: "book",
        component: BookDetail,
        beforeEnter(to, from, next) {
          if (!store.state.account.user) return next('/login')
          return next()
        }
      },
      {
        path: '/profile',
        name: 'profile',
        component: () => import('./views/Profile.vue'),
        beforeEnter(to, from, next) {
          if (!store.state.account.user) return next('/login')
          return next()
        }
      },
      {
        path: '*',
        component: NotFound
      }
    ]
  })
}

import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5a353bd4 = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _477fb26a = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _a8060a06 = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _79d1003d = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _518f180f = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _71d2ef4e = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _609b438a = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _5a353bd4,
    children: [{
      path: "",
      component: _477fb26a,
      name: "home"
    }, {
      path: "/login",
      component: _a8060a06,
      name: "login"
    }, {
      path: "/register",
      component: _a8060a06,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _79d1003d,
      name: "profile"
    }, {
      path: "/settings",
      component: _518f180f,
      name: "settings"
    }, {
      path: "/editor",
      component: _71d2ef4e,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _609b438a,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}

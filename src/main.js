// import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

import Router from './router/router.js';
import store from './vuex/store'
import mixins from './mixins'


Vue.use(VueRouter);

const router = new VueRouter({
  routes: Router.routes
})

// router.beforeEach((to, from, next) => {
//   next()
// })
Vue.mixin(mixins)
new Vue({
  el: '#root',
  router,
  store,
  render: h => h(App)
})
// new Vue(Vue.util.extend({ el: '#root', router, store }, App))
router.push('/')

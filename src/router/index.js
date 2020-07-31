import Vue from 'vue';
import VueRouter from 'vue-router';

import Overview from '../pages/Overview/Overview.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Resume',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Overview,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

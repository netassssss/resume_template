import Vue from 'vue';
import VueRouter from 'vue-router';

/* eslint max-len: 0 */
// webpack named chunk for lazy loading: const Foo = () => import(/* webpackChunkName: "group-foo" */ './Foo.vue')
const Overview = () => import(/* webpackChunkName: "overview" */ '../pages/Overview/Overview.vue');
const TemplateBuilder = () => import(/* webpackChunkName: "template-builder" */ '../pages/TemplateBuilder/TemplateBuilder.vue');

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
  {
    path: '/builder',
    name: 'Builder',
    component: TemplateBuilder,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

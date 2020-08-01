import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import { generateStore } from './store/storeHelper';

Vue.config.productionTip = false;

new Vue({
  router,
  store: generateStore(),
  render: (h) => h(App),
}).$mount('#app');

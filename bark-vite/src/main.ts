import { createApp } from 'vue';
import App from './App.vue';
import Payments from './components/Payments.vue';
import Swap from './components/Swap.vue';
import { createRouter, createWebHistory } from 'vue-router';
import WebApp from '@twa-dev/sdk'

WebApp.ready();

const routes = [
  { path: '/', component: Payments },
  { path: '/payments', component: Payments },
  { path: '/swap', component: Swap },
  // Add additional routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');

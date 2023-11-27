
import { createRouter, createWebHistory } from 'vue-router';

import Principal from '../views/Principal.vue';
import Grados from '../views/Grados.vue';
import Eventos from '../views/Eventos.vue';
import Secundaria from '../views/Secundaria.vue';
import Tutores from '../views/Tutores.vue';

const routes = [
  { path: '/', component: Principal },
  { path: '/grados', component: Grados },
  { path: '/eventos', component: Eventos },
  { path: '/secundaria', component: Secundaria },
  { path: '/tutores', component: Tutores },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

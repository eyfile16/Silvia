import { createRouter, createWebHashHistory } from 'vue-router';
import Inicio from '../components/Inicio.vue'; // Verifica que este archivo exista



const routes = [
  { path: '/', component: Inicio },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;

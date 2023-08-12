import { createRouter, createWebHashHistory } from "vue-router";


const routes = [
  { path: "/", component: ()=> import('../pages/Bienvenida.vue') },
  { path: "/consultar/:cedula", component: ()=> import('../pages/ConsultaEstudiante.vue') },
  { path: "/guardar", component: ()=> import('../pages/GuardaEstudiante.vue') },
  { path: "/actualizar", component: ()=> import('../pages/ActualizarEstudiante.vue') },
  { path: "/eliminar", component: ()=> import('../pages/EliminarEstudiante.vue') },
  //{ path: "/:pathMatch(.*)*", component: ()=> import('../modules/pokemon/page/NoEncontradoPage') },

];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router
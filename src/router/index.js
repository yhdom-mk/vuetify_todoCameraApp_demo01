// import VueRouter from 'vue-router'
import { createRouter, createWebHistory } from "vue-router";
import TodoHome from '../views/TodoHome.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: TodoHome
  },
  {
    path: '/photo',
    name: 'Photo',
    component: ()=> import ('../views/TodoPhotos.vue')
  }
]

const router = createRouter({
  mode: "history",
  history: createWebHistory(),
  base: process.env.BASE_URL,
  routes,
});

export default router
// export default new VueRouter({
//   routes
// })
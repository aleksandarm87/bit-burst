import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'To Do List',
      component: () => import('../views/ToDoView.vue')
    },
    {
      path: '/backlog',
      name: 'Backlog',
      component: () => import('../views/BacklogView.vue')
    }
  ]
})

export default router

import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/cv',
    name: 'CV',
    component: () => import('../views/CVView.vue'),
  },
  {
    path: '/psychology',
    name: 'Psychology',
    component: () => import('../views/PsychologyView.vue'),
  },
  {
    path: '/tech',
    name: 'Tech',
    component: () => import('../views/TechView.vue'),
  },
  {
    path: '/books',
    name: 'Books',
    component: () => import('../views/BooksView.vue'),
  },
  {
    path: '/art',
    name: 'Art',
    component: () => import('../views/ArtView.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router

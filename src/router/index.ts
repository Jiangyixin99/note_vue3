import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    { path: '/', redirect: '/home?category=-1' },
    { path: '/home', name: 'home', component: () => import('@/views/Home.vue') },
    { path: '/little', name: 'little', component: () => import('@/views/Little.vue') },
    { path: '/about', name: 'about', component: () => import('@/views/About.vue') },
    { path: '/friends', name: 'friends', component: () => import('@/views/Friends.vue') },
    {
      path: '/article', name: 'article', component: () => import('@/views/Home/Article.vue'), children: [
        { path: '/game', name: 'game', component: () => import('@/views/Home/Article/game.vue') },
        { path: '/daily', name: 'daily', component: () => import('@/views/Home/Article/daily.vue') },

      ]
    },


  ]
})
export default router;
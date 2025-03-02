// src/router.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Posts from './pages/posts/Posts.vue'
import createPosts from './pages/posts/createPosts.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/posts',
    name: 'Posts',
    component: Posts,
  },
  {
    path: '/create-post',
    name: 'createPosts',
    component: createPosts,
  },
]

// console.log('hii')
const router = createRouter({
  history: createWebHistory('/'),
  routes,
})

export default router

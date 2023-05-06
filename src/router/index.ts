//src/router/index.ts
import {
    createRouter,
    createWebHashHistory,
    RouteRecordRaw
  } from 'vue-router'
  import Home from '@/views/home.vue'
  import Demo from '@/views/demo.vue'
  const routes: Array<RouteRecordRaw> = [
    // {
    //   path: '/',
    //   name: 'Home',
    //   component: Home
    // },
    {
      path: '/',
      name: 'demo',
      component: Demo
    },
  ]
  
  const router = createRouter({
    history: createWebHashHistory(),
    routes
  })
  
  export default router
  
  
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'',
      component:()=>import('../layouts/defaultLayout.vue'),
      children:[
        {
          path: '',
          name: 'home',
          component: ()=>import('../views/home/Index.vue'),
        },
        {
          path: '/manage-players',
          name: 'managePlayers',
          component: ()=>import('../views/players/Index.vue'),
        },
        {
          path: '/manage-teams',
          name: 'manageTeam',
          component: ()=>import('../views/teams/Index.vue'),
        },
        {
          path: '/group/:id',
          name: 'GroupDetail',
          component: ()=>import('../views/group/GroupDetail.vue'),
        },
      ]
    }

  ],
})

export default router

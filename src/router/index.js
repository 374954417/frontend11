import { createRouter, createWebHistory } from 'vue-router';
import SearchLivingVue from "@/components/SearchLiving.vue";

import ReserveComponentVue from '@/components/ReserveComponent.vue';

import Homepage from "@/components/HomePage.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [

      { path: '/living/:data', component: ReserveComponentVue}
      { path: '/view', component: SearchLivingVue },
      { path: '/living', component: Homepage }

    ]
  })


export default router
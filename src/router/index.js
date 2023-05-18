import { createRouter, createWebHistory } from 'vue-router';
import SearchLivingVue from "@/components/SearchLiving.vue";
import ReserveComponentVue from '@/components/ReserveComponent.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/living', component: SearchLivingVue },
      { path: '/living/:data', component: ReserveComponentVue}
    ]
  })


export default router
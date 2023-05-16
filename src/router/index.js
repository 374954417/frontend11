import { createRouter, createWebHistory } from 'vue-router';
import SearchLivingVue from "@/components/SearchLiving.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/view', component: SearchLivingVue }
    ]
  })

export default router
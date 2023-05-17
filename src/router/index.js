import { createRouter, createWebHistory } from 'vue-router';
import SearchLivingVue from "@/components/SearchLiving.vue";
import Homepage from "@/components/HomePage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/view', component: SearchLivingVue },
      { path: '/living', component: Homepage }
    ]
  })

export default router
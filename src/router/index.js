import { createRouter, createWebHistory } from 'vue-router';
import SearchLivingVue from "@/components/SearchLiving.vue";

import ReserveComponentVue from '@/components/ReserveComponent.vue';

import Homepage from "@/components/HomePage.vue";
import LoginViewVue from '@/view/LoginView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [

    { path: '/living/reverse', component: ReserveComponentVue },
    { path: '/view', component: SearchLivingVue },
    { path: '/living', component: Homepage },
    { path: '/login', component: LoginViewVue },

  ]
})


export default router
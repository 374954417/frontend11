import { createRouter, createWebHistory } from 'vue-router';
import SearchLivingVue from "@/components/SearchLiving.vue";

import ReserveComponentVue from '@/components/ReserveComponent.vue';

import Homepage from "@/components/HomePage.vue";
import LoginViewVue from '@/view/LoginView.vue';
import BookingViewVue from '@/view/BookingView.vue';
import ChangePassword from "@/components/ChangePassword.vue";
import OrderDelete from "@/components/OrderDelete.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [

    { path: '/living/reverse', component: ReserveComponentVue },
    { path: '/view', component: SearchLivingVue },
    { path: '/living' , component: Homepage },
    { path: '/login', component: LoginViewVue },
    { path: '/living/reverse/confirm', component: BookingViewVue},
    { path: '/', redirect: '/living'},
    { path: '/user/changePwd', component: ChangePassword},
    { path: '/user/order', component: OrderDelete},

    // { path: '/booking', component: BookingViewVue },

  ]
})


export default router
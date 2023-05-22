// import { createApp } from 'vue'
// import App from './App.vue'
//
// createApp(App).mount('#app')
//


import { createApp } from 'vue'
import {createStore} from "vuex";
// import { useRouter } from "vue-router";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import '@/assets/main.scss'

import App from './App.vue'
import router from "./router/index"

import axios from 'axios'

import ToastPlugin from 'vue-toast-notification';
// Import one of the available themes
import 'vue-toast-notification/dist/theme-default.css';
// import 'vue-toast-notification/dist/theme-bootstrap.css';
// vue.prototype.$http = axios

const store = createStore({
    state () {
        return {
            is_login:false,
            uname:''
        }
    },
    mutations: {
        login (state,username) {
            state.is_login=true;
            state.uname=username;
        }

    }
})


const app = createApp(App)
// const route = new useRouter()


app.config.globalProperties.$http= axios
// app.config.globalProperties.$store = store

axios.defaults.baseURL='http://localhost:9291';

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(ElementPlus)
app.use(store)
app.use(router)
app.use(ToastPlugin);
// app.use(VueToast, {
//     // One of the options
//     position: 'top'
// })
app.mount('#app')

// app.config.globalProperties.$toast = app.$toast
// const $toast = useToast()


// let instance = $toast.success('You did it!');
//
// // Force dismiss specific toast
// instance.dismiss();
//
// // Dismiss all opened toast immediately
// $toast.clear();
// app.config.globalProperties.$toast= $toast
// let instance = app.$toast.open('You did it!');
//
// // Force dismiss specific toast
// instance.dismiss();
//
// // Dismiss all opened toast immediately
// app.$toast.clear();
// console.log(app.config.globalProperties.$store)

//
//
// const app = createApp(App)

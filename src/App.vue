<template>
<!--<LoginView>123</LoginView>-->
<!--    <SearchLiving></SearchLiving>-->
<!--    <ReserveComponent></ReserveComponent>-->
<!--  <BookingView></BookingView>-->
  <RouterComponent></RouterComponent>
</template>

<script>
// import HelloWorld from './components/HelloView.vue'
// import LoginView from "./view/LoginView.vue";
// import SearchLiving from "./components/SearchLiving.vue";
import RouterComponent from "./router/RouterComponent"
//import ReserveComponent from './components/ReserveComponent.vue';
// import BookingView from "@/view/BookingView.vue";

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // LoginView,
    // SearchLiving,
    RouterComponent,
    //ReserveComponent
    // BookingView
  },
}
</script>

<!--<style>-->
<!--#app {-->
<!--  font-family: Avenir, Helvetica, Arial, sans-serif;-->
<!--  -webkit-font-smoothing: antialiased;-->
<!--  -moz-osx-font-smoothing: grayscale;-->
<!--  text-align: center;-->
<!--  color: #2c3e50;-->
<!--  margin-top: 60px;-->
<!--}-->
<!--</style>-->

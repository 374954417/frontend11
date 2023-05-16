<template>
  <!--<LoginView>123</LoginView>
    <SearchLiving></SearchLiving>
  -->
  <RouterComponent></RouterComponent>


</template>

<script>
// import HelloWorld from './components/HelloView.vue'
// import LoginView from "./view/LoginView.vue";
// import SearchLiving from "./components/SearchLiving.vue";
import RouterComponent from "./router/RouterComponent"
import router from "./router/index"

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // LoginView,
    // SearchLiving,
    RouterComponent,
  },
  router: router,
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

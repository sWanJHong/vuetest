<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <MyView name="是我"/>
    <Revolution /> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import MyView from './components/MyView.vue'
// import Revolution from './components/Revolution.vue'
// import Home from './views/home.vue'
// import SecondPage from './views/secondPage.vue'
export default {
  name: 'app'
  // ,
  // components: {
  //   HelloWorld,
  //   MyView,
  //   Revolution
  // }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

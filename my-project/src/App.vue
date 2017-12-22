<template>
  <div id="app">
    <img src="./assets/background.png"width = "400px"height = "160">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>

  @import './assets/css/public.css';
  #app {
    padding-top:5rem;
    background-color: rgba(213, 215, 217, .18);
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0px;
    padding-bottom: 25rem;
    border-radius:5px
  }
</style>

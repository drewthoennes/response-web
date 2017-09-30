<template>
  <div id="app">
    <!-- <router-link to="/">Dashboard</router-link>
    <router-link to="/taskbar">Taskbar</router-link>
    <router-link to="/body">Body</router-link> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  width: 100vw;
  height: 100vh;
}
html, body {
  margin: 0;
  padding: 0;
}
</style>

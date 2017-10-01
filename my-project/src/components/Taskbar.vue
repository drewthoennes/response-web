<template>
  <div class="taskbar p-3">
    <div class="logo d-flex flex-row justify-content-start align-items-center">
      <img src="/static/r.png" class="img-fluid logo mr-2" alt=""/>
      <h2 class="m-0 p-0">Taskbar</h2>
    </div>
    <div class="list-group mt-3">
      <router-link to="/" class="list-group-item list-group-item-action" exact-active-class="active"><i class="mr-2 fa fa-tachometer" aria-hidden="true"></i>Dashboard</router-link>
      <router-link to="/analysis" class="list-group-item list-group-item-action" exact-active-class="active"><i class="mr-2 fa fa-bar-chart" aria-hidden="true"></i>Analysis</router-link>
      <router-link to="/tags" class="list-group-item list-group-item-action" exact-active-class="active"><i class="mr-2 fa fa-tags" aria-hidden="true"></i>Tags</router-link>
      <router-link to="/questions" class="list-group-item list-group-item-action" exact-active-class="active"><i class="mr-2 fa fa-question" aria-hidden="true"></i>Questions</router-link>
      <router-link to="/settings" class="list-group-item list-group-item-action" exact-active-class="active"><i class="mr-2 fa fa-cog" aria-hidden="true"></i>Settings</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'taskbar',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.taskbar {
  width: 100%;
  height: 100vh;
}
.logo {
  width: auto;
  height: 2em;
}
</style>

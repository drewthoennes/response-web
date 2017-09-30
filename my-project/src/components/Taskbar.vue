<template>
  <div class="taskbar p-2">
    <h2>Taskbar</h2>
    <div class="list-group">
      <router-link to="/" class="list-group-item" exact-active-class="active"><i class="fa fa-tachometer" aria-hidden="true"></i> Dashboard</router-link>
      <router-link to="/analysis" class="list-group-item" exact-active-class="active"><i class="fa fa-bar-chart" aria-hidden="true"></i> Analysis</router-link>
      <router-link to="/settings" class="list-group-item" exact-active-class="active"><i class="fa fa-cog" aria-hidden="true"></i> Settings</router-link>
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
</style>

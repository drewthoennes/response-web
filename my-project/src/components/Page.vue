<template>
  <div class="page container-fluid">

      <div class="row h-100">

        <div class="col-3 h-100">
          <Taskbar/>
        </div>

        <div class="col h-100">
          <Dashboard/>
        </div>

    </div>

  </div>
</template>

<script>
import Dashboard from './Dashboard'
import Taskbar from './Taskbar'
export default {
  name: 'page',
  components: {
    Dashboard,
    Taskbar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dashboard {
  height: 100%;
}
</style>

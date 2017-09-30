<template lang="html">
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
import Taskbar from '@/components/Taskbar'
import Dashboard from '@/components/Settings/Dashboard'

export default {
  name: "settings",
  components: {
    Taskbar,
    Dashboard
  }
}
</script>

<style lang="css" scoped>
</style>

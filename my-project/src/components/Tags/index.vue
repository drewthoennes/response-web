<template lang="html">
<div class="page container-fluid">
      <div class="row h-100">
        <div class="col-3 h-100">
          <Taskbar/>
        </div>

        <div class="col-9 h-100">
          <Dashboard/>
        </div>
    </div>
</div>
</template>

<script>
import Taskbar from '@/components/Taskbar'
import Dashboard from '@/components/Tags/Dashboard'

export default {
  name: "analysis",
  components: {
    Taskbar,
    Dashboard
  }
}
</script>

<style lang="css" scoped>
</style>

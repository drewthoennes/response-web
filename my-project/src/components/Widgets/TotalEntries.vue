<template lang="html">
  <div class="card border-primary" style="">
    <div class="card-header border-primary">Total responses</div>
    <div class="card-body border-primary">
      <TotalEntries :rawChartData="chartData.groups"/>
      <p class="card-text w-100 mt-1">Total: {{chartData.total}}</p>
    </div>
  </div>

</template>

<script>
import TotalEntries from './TotalEntries'

export default {
  name: 'totalentries-template',
  components: {
    TotalEntries
  },
  data() {
    return {
      chartData: {
        groups: []
      }
    }
  },
  mounted() {
    this.getData()
    setInterval(() => {
      this.getData()
    }, 20000)

  },
  methods: {
    getData() {
      this.$http.get('http://a.elnardu.me:8080/api/totalCount').then(res => {
        this.chartData = res.data[0]
      })
    }
  }
}
</script>

<style lang="css" scoped>
.card-text {
  text-align: center;
}
</style>

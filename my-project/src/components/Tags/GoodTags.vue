<template lang="html">
  <div class="card w-100 h-50 border-success">
    <div class="card-header border-success bg-success text-white">Things that went well</div>
    <div class="card-body a">
      <TagsBarChart :rawChartData="chartData" class="h-100"/>
    </div>
  </div>

</template>

<script>
import TagsBarChart from './TagsBarChart.js'

export default {
  components: {
    TagsBarChart
  },
  data() {
    return {
      chartData: []
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
      this.$http.get('http://a.elnardu.me:8080/api/tagsStatisticsGood').then(res => {
        this.chartData = res.data
      })
    }
  }
}
</script>

<style lang="css" scoped>
.card-text {
  text-align: center;
}
.a {
  height: 25em;
}
</style>

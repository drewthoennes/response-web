<template lang="html">
  <div class="card w-100 h-50">
    <div class="card-header">Sentiment graph</div>
    <div class="card-body h-50">
      <SentimentGraph :rawChartData="chartData" class="a"/>
    </div>
  </div>

</template>

<script>
import SentimentGraph from './SentimentGraph.js'

export default {
  components: {
    SentimentGraph
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
      this.$http.get('http://a.elnardu.me:8080/api/getSentimentByTime').then(res => {
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
  height: 30em;
}
</style>

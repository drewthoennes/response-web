<template lang="html">
  <div class="card" style="">
    <div class="card-header">Overall status</div>
    <div class="card-body d-flex justify-content-center align-items-center" :class="mainClass">
      <div class="sentiment">
        {{message}} – {{sentiment.toPrecision(3)}}
      </div>
    </div>
  </div>

</template>

<script>

export default {
  data() {
    return {
      sentiment: 0
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
      this.$http.get('http://a.elnardu.me:8080/api/overallSentiment').then(res => {
        this.sentiment = res.data.sentiment
      })
    }
  },
  computed: {
    mainClass() {
      return {
        bad: this.sentiment < 0.3,
        normal: this.sentiment >= 0.3 && this.sentiment <= 0.6,
        good: this.sentiment > 0.6
      }
    },

    message() {
      if (this.sentiment < 0.3) return 'Low Positivity'
      else if (this.sentiment >= 0.3 && this.sentiment <= 0.6) return 'Medium Positivity'
      else if (this.sentiment > 0.6) return 'High Positivity'
    }
  }
}
</script>

<style lang="css" scoped>
.sentiment {
  color: white;
  font-size: 2em;
}

.bad {
  background-color: #e74c3c
}

.normal {
  background-color: #7f8c8d
}

.good {
  background-color: #2ecc71
}
</style>

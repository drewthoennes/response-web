<template lang="html">
  <div class="card border-danger w-100 h-100" style="">
    <div class="card-header border-danger">Latest responses</div>
    <div class="card-body border-primary h-100">
      <div class="card-deck h-100">
        <div class="card" v-for="r in responses">
          <div class="card-body">
            <p v-if="r.text" class="card-text">{{r.text}}</p>
            <div v-if="r.source == 'vote'" class="">
              <router-link :to="{ name: 'Question', params: { pollId: r.pollId }}" class="btn btn-primary">
                Open Question
              </router-link>
            </div>
            <p v-else class="card-text text-warning">No text data</p>
          </div>
          <div class="card-footer d-flex flex-row justify-content-between align-items-center">
            <small class="text-muted">{{r.source}}</small>
            <span class="">{{r.sentiment.toPrecision(3)}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  name: 'latestresponses',
  data() {
    return {
      responses: {

      }
    }
  },
  mounted() {
    this.getData()
    setInterval(() => {
      this.getData()
    }, 10000)

  },
  methods: {
    getData() {
      this.$http.get('http://a.elnardu.me:8080/api/latestResponces').then(res => {
        this.responses = res.data
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

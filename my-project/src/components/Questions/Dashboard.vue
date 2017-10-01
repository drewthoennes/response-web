<template lang="html">
  <div class="p-3">
    <h2>Current Polls</h2>
    <div class="list-group mt-3">
      <router-link :to="{ name: 'Question', params: { pollId: q._id }}" class="list-group-item list-group-item-action" v-for="(q, i) in questions" :key="q._id">
        {{i+1}}. {{q.question}}
      </router-link>
    </div>
  </div>
</template>

<script>


export default {
  components: {

  },
  data() {
    return {
      questions: []
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
      this.$http.get('http://a.elnardu.me:8080/polls/list').then(res => {
        this.questions = res.data
      })
    }
  }
}
</script>

<style lang="css">
</style>

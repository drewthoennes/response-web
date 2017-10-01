<template lang="html">
<div class="page container-fluid">
      <div class="row h-100">
        <div class="col-3 h-100">
          <Taskbar/>
        </div>

        <div class="col-9 h-100 pt-5">
          <b>Question:</b> {{question.question}}
          <br/>
          <b>Key:</b> {{question.tag}}
          <br/>
          <b>Answers:</b>
            <ol>
              <li>{{question.goodAnswer}}</li>
              <li>{{question.badAnswer}}</li>
            </ol>
          <br/>

          <div class="progress">
            <div class="progress-bar bg-success" role="progressbar" :style="`width: ${(question.goodCount/total)*100}%`">{{question.goodAnswer}} [{{question.goodCount}}]</div>
            <div class="progress-bar bg-danger" role="progressbar" :style="`width: ${(question.badCount/total)*100}%`">{{question.badAnswer}} [{{question.badCount}}]</div>
          </div>
        </div>
    </div>
</div>
</template>

<script>
import Taskbar from '@/components/Taskbar'

export default {
  name: "analysis",
  components: {
    Taskbar
  },
  data() {
    return {
      question: {}
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
      this.$http.post('http://a.elnardu.me:8080/polls/info', {
        id: this.$route.params.pollId
      }).then(res => {
        this.question = res.data
      })
    }
  },
  watch: {
    $route() {
      this.getData()
    }
  },
  computed: {
    total() {
      return this.question.goodCount + this.question.badCount
    }
  }
}
</script>

<style lang="css" scoped>
</style>

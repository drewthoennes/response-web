<template lang="html">
  <div class="p-3">
    <h2>Analysis</h2>
    <div class="row">
      <div class="col">
        <CurrentSentiment/>
      </div>
      <div class="col">
        <OverallSentiment/>
      </div>
    </div>
    <!-- <br> -->
    <div class="h-50 mt-2">
      <SentimentGraph/>
    </div>
  </div>
</template>

<script>
import CurrentSentiment from '@/components/Widgets/CurrentSentiment'
import OverallSentiment from '@/components/Widgets/OverallSentiment'
import SentimentGraph from '@/components/Widgets/SentimentGraph.vue'

export default {
  components: {
    CurrentSentiment,
    SentimentGraph,
    OverallSentiment
  }
}
</script>

<style lang="css">
</style>

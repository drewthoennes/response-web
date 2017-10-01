<template>
<div class="dashboard p-3">
  <h2>Dashboard</h2>
  <div class="card">
    <h4 class="card-header">{{eventName}}</h4>
    <div class="card-body">
      <p class="card-text">{{eventDescription}}</p>
    </div>
  </div>


    <!-- <div class="card bg-light mb-3 border-warning" style="max-width: 20rem;">
      <div class="card-header border-warning">Instagram Responses</div>
      <div class="card-body">
        <h4 class="card-title">{{ instagramResponses }}</h4>
      </div>
    </div>
    <div class="card bg-light mb-3 border-danger" style="max-width: 20rem;">
      <div class="card-header border-danger">Facebook Responses</div>
      <div class="card-body">
        <h4 class="card-title">{{ facebookResponses }}</h4>
      </div>
    </div> -->
  <div class="row mt-2">
    <div class="col-sm-4">
      <TotalEntries/>
    </div>

    <div class="col-sm-8">
      <LatestResponses/>
    </div>
  </div>

</div>
</template>

<script>
import TotalEntries from './Widgets/TotalEntries.vue'
import LatestResponses from './Widgets/LatestResponses.vue'

export default {
  name: 'dashboard',
  components: {
    TotalEntries,
    LatestResponses
  },
  data() {
    return {
      eventName: 'Covfefe',
      eventDescription: 'The most infamous thing ever tweeted',
      linkTitle: 'View tweet',
      twitterResponses: '100',
      instagramResponses: '150',
      facebookResponses: '150'
    }
  },
  mounted() {
    this.$http.get('http://a.elnardu.me:8080/status').then(res => {
      this.eventName = res.data.name
      this.eventDescription = res.data.description
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

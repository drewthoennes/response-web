<template>
  <div class="dashboard p-3">

    <h2>Dashboard</h2>

    <div class="card">
      <h4 class="card-header">Event</h4>
      <div class="card-body">
        <p class="card-text">{{ eventDescription }}</p>
      </div>
    </div>

    <br>

    <div class="row">

      <div class="col-sm-3">
        <div class="card bg-light mb-3 border-primary" style="max-width: 20rem;">
          <div class="card-header border-primary">Twitter Responses</div>
          <div class="card-body">
            <h4 class="card-title">{{ twitterResponses }}</h4>
          </div>
        </div>
      </div>

      <div class="col-sm-3">
        <div class="card bg-light mb-3 border-warning" style="max-width: 20rem;">
          <div class="card-header border-warning">Instagram Responses</div>
          <div class="card-body">
            <h4 class="card-title">{{ instagramResponses }}</h4>
          </div>
        </div>
      </div>

      <div class="col-sm-3">
        <div class="card bg-light mb-3 border-danger" style="max-width: 20rem;">
          <div class="card-header border-danger">Facebook Responses</div>
          <div class="card-body">
            <h4 class="card-title">{{ facebookResponses }}</h4>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'dashboard',
  data () {
    return {
      event: 'Covfefe',
      eventDescription: 'The most infamous thing ever tweeted',
      linkTitle: 'View tweet',
      twitterResponses: '100',
      instagramResponses: '150',
      facebookResponses: '150'
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body {
  width: 100%;
  height: 100%;
}
.card-body {
  text-align: center;
}
.card-header {
  font-size: 14px;
  text-align: center;
}
</style>

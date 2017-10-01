<template lang="html">
  <div class="dashboard p-3">
    <h2>Tags</h2>
    <GoodTags class="mt-2"/>
    <BadTags class="mt-2"/>
  </div>
</template>

<script>
import GoodTags from  './GoodTags'
import BadTags from  './BadTags'

export default {
  components: {
    GoodTags,
    BadTags
  }
}
</script>

<style lang="css">
</style>

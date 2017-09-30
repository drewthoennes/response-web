<template lang="html">
  <div class="p-3">
    <h2>Settings</h2>
    <form>
      <div class="form-group">
        <label for="tagsInput">Tags</label>
        <input type="text" class="form-control" id="tagsInput" aria-describedby="emailHelp" placeholder="Comma separated list">
        <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input type="checkbox" class="form-check-input">
          Check me out
        </label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>

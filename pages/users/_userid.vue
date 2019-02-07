<template>
  <div>
    <h2>User ID: {{userId}}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: this.$route.params.userid,
    }
  }
}
</script>


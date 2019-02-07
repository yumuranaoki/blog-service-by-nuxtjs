<template>
  <div>
    <h2>Login</h2>
    <form>
      <el-input placeholder="user name" v-model="userName"></el-input>
      <el-button @click="handleClickLogin"></el-button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: '',
    }
  },
  methods: {
    handleClickLogin() {
      console.log('clicked');
    }
  }
}
</script>

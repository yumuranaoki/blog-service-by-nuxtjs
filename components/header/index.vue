<template>
  <div>
    <h1 id="title">Blog service by nuxt</h1>
    <span>{{ isLoggedIn ? user.name : 'Loginしてください'　}}</span>
    <ul>
      <li><nuxt-link to='/'><el-button type='primary'>Home</el-button></nuxt-link></li>
      <li><nuxt-link to='/login'><el-button type='primary'>Login</el-button></nuxt-link></li>
      <li><nuxt-link to='/signup'><el-button type='primary'>Signup</el-button></nuxt-link></li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(['isLoggedIn', 'user'])
  }
}
</script>


<style scoped>
  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
  }
  li {
    margin: 0 20px;
  }

  #title {
    margin: 0 20px;
  }
</style>


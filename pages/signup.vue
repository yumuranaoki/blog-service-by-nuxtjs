<template>
  <div>
    <h2>Signup</h2>
    <div>Name: {{ name }}</div>
    <form>
      <el-input placeholder="user name" v-model="formData.userName" />
      <el-button @click="changeNameMethod">Signup</el-button>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Cookies from 'universal-cookie';

export default {
  data() {
    return {
      formData: {
        name: '',
      },
    }
  },
  computed: {
    ...mapGetters({
      name: 'signup/name',
    })
  },
  methods: {
    async changeNameMethod() {
      try {
        await this.changeName(this.formData.userName)
        const cookie = new Cookies();
        const user = {
          name: this.name
        };
        cookie.set('user', JSON.stringify(user));
        this.$router.push('/users') 
      } catch (err) {
        // modalを表示
        console.log(err)
      }
    },
    ...mapActions({
      changeName: 'signup/changeName',
    })
  }
}
</script>


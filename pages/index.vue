<template>
  <div>
    <div v-if="isLoggedIn"><LoggedIn /></div>
    <div v-else><LandingPage /></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import LoggedIn from '../components/loggedIn';
import LandingPage from '../components/landingPage';

export default {
  computed: {
    ...mapGetters(['isLoggedIn'])
  },
  components: {
    LoggedIn,
    LandingPage,
  }
}
</script>


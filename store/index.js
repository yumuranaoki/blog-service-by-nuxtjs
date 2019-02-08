const state = () => ({
  isLoggedIn: false,
  user: null,
});

const getters = {
  isLoggedIn: (state) => state.isLoggedIn,
  user: (state) => state.user,
};

const mutations = {
  setUser(state, text) {
    state.isLoggedIn = true;
    state.user = {name: text};
  },
}

export default {
  state,
  getters,
  mutations,
}

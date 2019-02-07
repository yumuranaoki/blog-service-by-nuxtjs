export const state = () => ({
  isLoggedIn: false,
  user: null,
});

export const getters = {
  isLoggedIn: (state) => state.isLoggedIn,
  user: (state) => state.user,
};

export const mutations = {
  setUser(state, text) {
    state.isLoggedIn = true;
    state.user = {name: text};
  },
  isNotLoggedIn(state) {
    state.isLoggedIn = false;
  }
}

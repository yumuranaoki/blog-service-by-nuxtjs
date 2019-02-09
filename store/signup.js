import firebase from '~/plugins/firebase';

const state = () => ({
  name: 'kneegorilla',
})

const getters = {
  name: (state) => state.name,
};

const mutations = {
  changeName(state, text) {
    state.name = text;
  }
};

const actions = {
  async changeName({ commit }, text) {
    try {
      const firestore = firebase.firestore();
      await firestore.collection('users').add({
        name: text,
      });
    } catch(err) {
      console.log(err);
      throw new Error('invalid data');
    }
    commit('setUser', text, { root: true });
    commit('signup/changeName', text);
  }
}

export default {
  state,
  getters,
  mutations,
  actions,
}
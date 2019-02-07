import firebase from '~/plugins/firebase';

export const state = () => ({
  name: 'kneegorilla',
})

export const getters = {
  name: (state) => state.name,
};

export const mutations = {
  changeName(state, text) {
    state.name = text;
  }
};

export const actions = {
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
    commit('setUser', text, { root: true })
  }
}
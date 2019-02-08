import Vuex from 'vuex';
import { createLocalVue } from '@vue/test-utils';
import cloneDeep from 'lodash.clonedeep';
import config from '~/store/index';


const localVue = createLocalVue();
localVue.use(Vuex);

describe('store/index.js', () => {
  let store;

  beforeEach(() => {
    store = new Vuex.Store(cloneDeep(config));
  })

  describe('mutations', () => {
    test('setUser changes set user and login status', () => {
      expect(store.getters.isLoggedIn).toBe(false);
      store.commit('setUser', 'user1');
      expect(store.getters.isLoggedIn).toBe(true);
      expect(store.getters.user.name).toBe('user1');
    })
  })
})
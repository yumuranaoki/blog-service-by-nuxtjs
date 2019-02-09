import { createLocalVue } from '@vue/test-utils';
import cloneDeep from 'lodash.clonedeep';
import Vuex from 'vuex';
import indexStoreConifg from '~/store/index';
import signupStoreConfig from '~/store/signup';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('store/signup', () => {
  let store;

  beforeEach(() => {
    store = null;

    const clonedIndexStoreConfig = cloneDeep(indexStoreConifg);

    store = new Vuex.Store({
      clonedIndexStoreConfig,
      modules: {
        signup: {
          namespaced: true,
          state: signupStoreConfig.state,
          getters: signupStoreConfig.getters,
          mutations: signupStoreConfig.mutations,
        }
      }
    });
  })

  test('changeName changes name', () => {
    expect(store.getters['signup/name']).toBe('kneegorilla');
    store.commit('signup/changeName', 'naoki');
    expect(store.getters['signup/name']).toBe('naoki');
  })

})
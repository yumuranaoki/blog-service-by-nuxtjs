import { mount, createLocalVue, } from '@vue/test-utils';
import Vuex from 'vuex';
import cloneDeep from 'lodash.clonedeep';
import ElementUI from "element-ui";
import SignupPage from '~/pages/signup';
import config from '~/store/signup';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(ElementUI);

describe('pages/index.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = null;

    const actions = {
      changeName: jest.fn()
    }

    wrapper = mount(SignupPage, {
      store: new Vuex.Store({
        modules: {
          signup: {
            namespaced: true,
            state: config.state,
            getters: config.getters, 
            actions: actions,
            mutations: config.mutations,
          }
      }}),
      localVue,
    });
  })

  test('buttonをクリックしてchangeNameMethodを呼ぶとlogin状態になる', () => {
    expect(wrapper.vm.name).toBe("kneegorilla");
  });
})

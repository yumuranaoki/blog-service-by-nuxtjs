import { mount, RouterLinkStub, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import ElementUI from 'element-ui';
import Header from '~/components/header/index';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(ElementUI);

describe('components/header', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = null;
    
    wrapper = mount(Header, {
      localVue,
      store: new Vuex.Store({
        getters: {
          isLoggedIn: state => state.isLoggedIn,
          user: state => state.user,
        }
      }),
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    })
  });

  test('link: home, login, signupへのリンクが存在する', () => {
    const linkArray = wrapper.findAll(RouterLinkStub)
    expect(linkArray.at(0).props().to).toBe('/')
    expect(linkArray.at(1).props().to).toBe('/login')
    expect(linkArray.at(2).props().to).toBe('/signup')
  })
})
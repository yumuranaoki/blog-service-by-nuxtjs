import LoggedIn from '~/components/loggedIn/index';
import { mount } from '@vue/test-utils';

describe('logggedIn component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = null;

    wrapper = mount(LoggedIn);
  })

  test('deafult: あなたのフィード', () => {
    expect(wrapper.find('div').text()).toBe('あなたのフィード');
  })
})
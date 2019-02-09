import { mount } from '@vue/test-utils';
import LoggedIn from '~/components/loggedIn/index';

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
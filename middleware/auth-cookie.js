import Cookies from 'universal-cookie';

export default ({ req, store }) => {
  if (process.browser) {
    console.log('process in browser')
    return
  }

  console.log('process in server side')

  const cookie = new Cookies(req.headers.cookie);
  const user = cookie.get('user');
  console.log(`user is ${user.name}`)
  if (user) {
    store.commit('setUser', user.name);
  }
}
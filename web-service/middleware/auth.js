export default function ({ route, redirect }) {
  if (process.client) {
    const refresh_token = sessionStorage.getItem('refresh_token');

    if (refresh_token !== null) {
      if (route.path === '/login' || route.path === '/signup') {
        return redirect('/');
      }
    } else {
      if (route.path !== '/login' && route.path !== '/signup') {
        return redirect('/login');
      }
    }
  }
}
// export default function ({ store, redirect }) {
//   return store.dispatch('checkAuth')
//     .then(() => redirect('/home'))
//     .catch(() => redirect('/login'));
// }
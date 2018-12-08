export default {
  routes: [
    {
      path: '/',
      name: 'index',
      component: resolve => require(['../pages/index'], resolve),
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
}

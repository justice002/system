// 路由表
const constantRouterMap = [

  {
    path: '/',
    redirect: '/admin',
  },
  {
    path: '/adminLogin',
    name: 'adminLogin',
    component: () => import('/@/views/admin-login.vue'),
  },
  {
    path: '/admin',
    name: 'admin',
    redirect: '/admin/thing',
    component: () => import('/@/views/main.vue'),
    children: [
      { path: 'thing', name: 'thing', component: () => import('/@/views/thing.vue') },
      { path: 'classification', name: 'classification', component: () => import('/@/views/classification.vue') },
      { path: 'sysInfo', name: 'sysInfo', component: () => import('/@/views/sys-info.vue') },
    ]
  }
];

export default constantRouterMap;

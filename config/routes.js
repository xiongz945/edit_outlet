export default [
  {
    path: '/',
    component: '../layouts/BlankLayout',
    routes: [
      // {
      //   path: '/user',
      //   component: '../layouts/UserLayout',
      //   routes: [
      //     {
      //       name: 'login',
      //       path: '/user/login',
      //       component: './User/login',
      //     },
      //   ],
      // },
      {
        path: '/',
        component: './Home',
      },
      {
        name: 'edit outlet',
        path: '/edit',
        component: './Edit',
      },
      {
        component: './404',
      },
      
    ],
  },
  {
    component: './404',
  },
];

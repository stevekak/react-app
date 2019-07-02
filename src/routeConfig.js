// 服务器入口
const { Home, } = require('./pages/Home');
module.exports = {
  '/list': {
    component: Home,
    exact: true,
    path: '/list', // 前端路由规则
  },
  '/': {
    component: Home,
    exact: true,
    path: '/', // 前端路由规则
  },
};

// module.exports = function (route) {
//   // 判断route 返回 组件
//   if (route) {
//     return route;
//   }
//   const Application = Home;
//   return Application;
// }

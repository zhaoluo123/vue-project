import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '../views/HomePage.vue'
import Login from '../views/Login.vue'
import MainIndex from '../views/MainIndex/MainIndex.vue'
import ApplicationList from '../views/Application/ApplicationList.vue'
import ApplicationCheck from '../views/Application/ApplicationCheck.vue'
import DeviceModelList from '../views/DeviceModel/DeviceModelList.vue'

Vue.use(Router);
let menuRouter =  new Router({
  routes: [
      {//刷新当前缓存页面使用中间页面进行过渡跳转
          path: '/redirect',
          component: HomePage,
          name: 'redirect',
          children: [
              {
                  path: '/redirect/:path*',
                  component: () => import('../views/redirect/index')
              }
          ]
      },
    {
        path: '/',
        name: 'login',
        component: Login,
        meta: {'menuName': 'login', 'icon': ''}
    },
    {
        path: '',
        name: 'main',
        component: HomePage,
        children: [
            {
                path: '/main-index',
                name: 'main-index',
                component: MainIndex,
                meta: {'menuName': 'mainIndex', 'icon': 'el-icon-s-home', fixed: true}
            },
        ]},
      {
          path: '/application',
          name: 'application',
          component: HomePage,
          meta: {'menuName': 'applicationManagement', 'icon': 'el-icon-s-help'},
          children: [
              {
                  path: 'applicationList',
                  name: 'applicationList',
                  component: ApplicationList,
                  meta: {'menuName': 'applicationList'}
              },
              {
                  path: 'applicationCheck/:id',
                  name: 'applicationCheck',
                  component: ApplicationCheck,
                  meta: {'menuName': 'applicationCheck'},
                  hidden: true
              },
          ]},
      {
          path: '/deviceModel',
          name: 'deviceModel',
          component: HomePage,
          meta: {'menuName': 'deviceModelManagement', 'icon': 'el-icon-s-order'},
          children: [
              {
                  path: 'deviceModelList',
                  name: 'deviceModelList',
                  component: DeviceModelList,
                  meta: {'menuName': 'deviceModelList'}
              },

          ]},
  ]
});

export default menuRouter;

//解决路由跳转NavigationDuplicated错误
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject);
    return originalPush.call(this, location).catch(err => err)
};

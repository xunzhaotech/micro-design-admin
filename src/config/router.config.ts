import { RouteRecordRaw } from "vue-router";
import {
  UserLayout,
  // BasicLayout,
  // BlankLayout,
  // RouteView,
  // PageView,
  // CustomLayout,
} from "@/layouts/";
/**
 * 动态路由
 * @type { *[] }
 */
export const asyncRouterMap: RouteRecordRaw[] = [];
/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap: RouteRecordRaw[] = [
  {
    path: "/",
    component: UserLayout,
    redirect: "/login",
    // hidden: true,
    children: [
      {
        path: "login",
        name: "login",
        component: () =>
          import(/* webpackChunkName: "user" */ "@/views/HomeView.vue"),
      },
      {
        path: "register2",
        name: "register2",
        component: () =>
          import(/* webpackChunkName: "user" */ "@/views/login/index.vue"),
      },
      {
        path: "register-result",
        name: "registerResult",
        component: () =>
          import(/* webpackChunkName: "user" */ "@/views/login/index.vue"),
      },
      // {
      //   path: "recover",
      //   name: "recover",
      //   component: undefined,
      // },
    ],
  },
  // {
  //   path: "/404",
  //   component: () =>
  //     import(/* webpackChunkName: "fail" */ "@/views/exception/404.vue"),
  // },
];
export default constantRouterMap;

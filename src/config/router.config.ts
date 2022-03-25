import { RouteRecordRaw } from "vue-router";
// import { bxAnaalyse } from "@/core/icons";
// const RouteView = {
//   name: "RouteView",
//   render: (h: any) => h("router-view"),
// };
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
export const asyncRouterMap: RouteRecordRaw[] = [
  {
    path: "*",
    redirect: "/404",
    // hidden: true,
  },
];
/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap: RouteRecordRaw[] = [
  {
    path: "/user",
    name: "user",
    component: UserLayout,
    redirect: "/user/login",
    // hidden: true,
    children: [
      {
        path: "login",
        name: "login",
        component: () =>
          import(
            /* webpackChunkName: "user" */ "@/views/system/user/login/index.vue"
          ),
      },
      {
        path: "register",
        name: "register",
        component: () =>
          import(
            /* webpackChunkName: "user" */
            "@/views/system/user/register/index.vue"
          ),
      },
      {
        path: "register-result",
        name: "registerResult",
        component: () =>
          import(
            /* webpackChunkName: "user" */ "@/views/system/user/register-result/index.vue"
          ),
      },
      // {
      //   path: "recover",
      //   name: "recover",
      //   component: undefined,
      // },
    ],
  },
  {
    path: "/404",
    component: () =>
      import(/* webpackChunkName: "fail" */ "@/views/exception/404/index.vue"),
  },
];
export default constantRouterMap;

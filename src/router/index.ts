/*
 * @Author: xunzhaotech
 * @Email: luyb@xunzhaotech.com
 * @QQ: 1525572900
 * @LastEditors: xunzhaotech
 */
import { createRouter, createWebHistory } from "vue-router";
import { constantRouterMap } from "@/config/router.config";
// import NProgress from "nprogress"; // progress bar
// import { TO_DISPLAY_STRING } from "@vue/compiler-core";
// import { ACCESS_TOKEN } from "@/store/mutation-types";
// import storage from "store";
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: constantRouterMap,
  linkActiveClass: "active-class", // 自定义class 作为 路由样式
  linkExactActiveClass: "init-class",
  scrollBehavior(to, from, savedPosition): any {
    // return 期望滚动到哪个的位置
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});
// const whiteList = ["login", "register", "registerResult"]; // no redirect whitelist
// const loginRoutePath = "/user/login";
// const defaultRoutePath = "/dashboard/workplace";
/**
 * @fullPath: "/user/login"
 * @hash: ""
 * @href: "/user/login"
 * @matched: []
 * @meta: {}
 * @name: undefined
 * @params: {}
 * @path: "/user/login"
 * @query: {}
 * @redirectedFrom: undefined
 */
// router.beforeEach((to, from, next) => {
//   NProgress.start(); // start progress bar;
//   const token = storage.get(ACCESS_TOKEN);
//   if (token) {
//     console.log(token);
//   } else {
//     console.log(13213131);
//     console.log(to.name);
//     if (whiteList.includes()) {
//       // 在免登录白名单，直接进入
//     next();
//     } else {
//       next({ path: loginRoutePath, query: { redirect: to.fullPath } });
//       NProgress.done(); // if current page is login will not trigger afterEach hook, so manually handle it
//     }
//   }
//   // console.log(Object.keys(to));
//   // Object.keys(to).map((item) => {});
//   // console.log(to[item]);
//   // to.meta && (typeof to.meta.title !== "undefined";)
//   // next({ path: loginRoutePath, query: { redirect: to.fullPath } });
// });
// router.afterEach((to, from) => {
//   console.log(`${to},222222222${from}`);
// });
// router.addRoute({
//   path: "/",
//   component: UserLayout,
// });

export default router;

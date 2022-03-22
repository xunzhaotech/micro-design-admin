/*
 * @Author: xunzhaotech
 * @Email: luyb@xunzhaotech.com
 * @QQ: 1525572900
 * @LastEditors: xunzhaotech
 */
import { createRouter, createWebHistory } from "vue-router";
import { constantRouterMap } from "@/config/router.config";
import NProgress from "nprogress"; // progress bar
// import { TO_DISPLAY_STRING } from "@vue/compiler-core";
import { ACCESS_TOKEN } from "@/store/mutation-types";
import storage from "store";
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: constantRouterMap,
  linkActiveClass: "active-class", // 自定义class 作为 路由样式
  linkExactActiveClass: "init-class",
  scrollBehavior(to, from, savedPosition): any {
    console.log(to, from, savedPosition);
    // return 期望滚动到哪个的位置
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  NProgress.start(); // start progress bar;
  storage.get(ACCESS_TOKEN);
  console.log(111111111);
  // console.log(Object.keys(to));
  // Object.keys(to).map((item) => {});
  // console.log(to[item]);
  // to.meta && (typeof to.meta.title !== "undefined";)
  next();
});
router.afterEach((to, from) => {
  console.log(`${to},222222222${from}`);
});
// router.addRoute({
//   path: "/",
//   component: UserLayout,
// });

export default router;

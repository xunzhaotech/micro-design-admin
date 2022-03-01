/*
 * @Author: xunzhaotech
 * @Email: luyb@xunzhaotech.com
 * @QQ: 1525572900
 * @LastEditors: xunzhaotech
 */
import { createRouter, createWebHistory } from "vue-router";
import { constantRouterMap } from "@/config/router.config";
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
  console.log(`${to},1111111111${from}`);
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

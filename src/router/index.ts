/*
 * @Author: xunzhaotech
 * @Email: luyb@xunzhaotech.com
 * @QQ: 1525572900
 * @LastEditors: xunzhaotech
 */
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import BasicLayout from "@/layouts/BasicLayout/index.vue";
import RouteView from "@/layouts/RouteView/index.vue";
// import {
//   UserLayout,
//   BasicLayout,
//   BlankLayout,
//   RouteView,
//   PageView,
// } from "@/layouts/";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    meta: { title: "Home" },
    component: BasicLayout,
    redirect: "/single1",
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        meta: { title: "Dashboard", icon: "DashboardOutlined" },
        redirect: "/dashboard/monitor",
        component: RouteView,
        children: [
          {
            path: "workspace",
            name: "workspace",
            meta: { title: "Workspace", icon: "icon-antdesign" },
            component: () => import("@/views/page1-view.vue"),
          },
          {
            path: "monitor",
            name: "monitor",
            meta: { title: "Monitor", icon: "icon-icon-test" },
            component: () => import("@/views/page2.vue"),
          },
        ],
      },
      {
        path: "/form",
        name: "form",
        meta: { title: "Form", icon: "FormOutlined" },
        redirect: "/form/basic-form",
        component: RouteView,
        children: [
          {
            path: "basic-form",
            name: "basic-form",
            meta: { title: "Basic Form" },
            component: () => import("@/views/page1-view.vue"),
          },
        ],
      },
      {
        path: "/single1",
        name: "single1",
        meta: { title: "Single1", icon: "SettingOutlined" },
        component: () => import("@/views/page1-view.vue"),
      },
      {
        path: "/single2",
        name: "single2",
        meta: { title: "Single2", icon: "SettingOutlined" },
        component: () => import("@/views/page1-view.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
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
  console.log(to, from);
  next();
});
router.afterEach((to, from) => {
  console.log(to, from);
});
router.addRoute({
  path: "/single1",
  component: BasicLayout,
});

export default router;

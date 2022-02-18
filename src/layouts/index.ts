/*
 * @Author: xunzhaotech
 * @Email: luyb@xunzhaotech.com
 * @QQ: 1525572900
 * @LastEditors: xunzhaotech
 */

const UserLayout = () => import("./UserLayout/index.vue");
const BlankLayout = () => import("./BlankLayout/index.vue");
const BasicLayout = () => import("./BasicLayout/index.vue");
const RouteView = () => import("./RouteView/index.vue");
const PageView = () => import("./PageView/index.vue");
const CustomLayout = () => import("./CustomLayout/index.vue");
export {
  UserLayout,
  BasicLayout,
  BlankLayout,
  RouteView,
  PageView,
  CustomLayout,
};

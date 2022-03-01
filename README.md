# Micro Admin

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Run your end-to-end tests
```
yarn test:e2e
```

### Lints and fixes files
```
yarn lint
```
### 学习网址
- https://github.com/vue3/vue3-News
- Deployment
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 目录结构
```
├── public
│   └── logo.png             # LOGO
|   └── index.html           # Vue 入口模板
├── src
│   ├── api                  # Api ajax 等
│   ├── assets               # 本地静态资源
│   ├── config               # 项目基础配置，包含路由，全局设置
│   ├── components           # 业务通用组件
│   ├── core                 # 项目引导, 全局配置初始化，依赖包引入等
│   ├── router               # Vue-Router
│   ├── store                # Vuex
│   ├── utils                # 工具库
│   ├── locales              # 国际化资源
│   ├── views                # 业务页面入口和常用模板
│   ├── App.vue              # Vue 模板入口
│   └── main.js              # Vue 入口 JS
│   └── permission.js        # 路由守卫(路由权限控制)
├── tests                    # 测试工具
├── README.md
└── package.json
```

```vue
<!--
 * @Author: xunzhaotech
 * @Email: luyb@xunzhaotech.com
 * @QQ: 1525572900
 * @LastEditors: xunzhaotech
-->
<template>
  <!-- <a-config-provider :getPopupContainer="getPopupContainer">
    <router-view />
  </a-config-provider> -->
  <ConfigProvider :locale="zhCN">
    <router-view v-slot="{ Component }">
      <Suspense>
        <component :is="Component" />
      </Suspense>
    </router-view>
    <LockScreen />
  </ConfigProvider>
</template>
<script setup lang="ts">
import zhCN from "ant-design-vue/es/locale/zh_CN";
// import { defineComponent } from "vue";

// export default defineComponent({
//   name: "App",
//   setup() {
//     const getPopupContainer = (el: Element, dialogContext: any) => {
//       if (dialogContext) {
//         return dialogContext.getDialogWrap();
//       }
//       return document.body;
//     };
//     return {
//       getPopupContainer,
//     };
//   },
// });
</script>
<style lang="less">
#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #fff;
}
</style>
```

```vue
import {
  UserLayout,
  // BasicLayout,
  // BlankLayout,
  // RouteView,
  // PageView,
  // CustomLayout,
} from "@/layouts/";

// const routes: RouteRecordRaw[] = [
// {
//   path: "/",
//   name: "Home",
//   meta: { title: "Home" },
//   component: UserLayout,
//   redirect: "/single1",
//   children: [
//     {
//       path: "/dashboard",
//       name: "dashboard",
//       meta: { title: "Dashboard", icon: "DashboardOutlined" },
//       redirect: "/dashboard/monitor",
//       component: () => import("@/views/page1-view.vue"),
//       children: [
//         {
//           path: "workspace",
//           name: "workspace",
//           meta: { title: "Workspace", icon: "icon-antdesign" },
//           component: () => import("@/views/page1-view.vue"),
//         },
//         {
//           path: "monitor",
//           name: "monitor",
//           meta: { title: "Monitor", icon: "icon-icon-test" },
//           component: () => import("@/views/page2.vue"),
//         },
//       ],
//     },
//     {
//       path: "/form",
//       name: "form",
//       meta: { title: "Form", icon: "FormOutlined" },
//       redirect: "/form/basic-form",
//       component: () => import("@/views/page1-view.vue"),
//       children: [
//         {
//           path: "basic-form",
//           name: "basic-form",
//           meta: { title: "Basic Form" },
//           component: () => import("@/views/page1-view.vue"),
//         },
//       ],
//     },
//     {
//       path: "/single1",
//       name: "single1",
//       meta: { title: "Single1", icon: "SettingOutlined" },
//       component: () => import("@/views/page1-view.vue"),
//     },
//     {
//       path: "/single2",
//       name: "single2",
//       meta: { title: "Single2", icon: "SettingOutlined" },
//       component: () => import("@/views/page1-view.vue"),
//     },
//   ],
// },
// ];

```
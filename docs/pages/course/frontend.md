<!--
 * @Author: xunzhaotech
 * @Email: luyb@xunzhaotech.com
 * @QQ: 1525572900
 * @LastEditors: xunzhaotech
-->
# Vue3入门实践指南
:::tip
刚接触 Vue.js？先从[基础指南](https://v3.cn.vuejs.org/guide/introduction.html#vue-js-%E6%98%AF%E4%BB%80%E4%B9%88)开始吧。
:::
本指南主要是为有 Vue 2 经验的、希望了解 Vue 3 的新功能和更改的用户而提供的。
## 知识准备
- Babel
- TypeScript
- Progressive Web App (PWA) Support
- Router
- Vuex
- CSS Pre-processors
- Linter
- Formatter
- Unit Testing
- E2E Testing
- class-style component
- polyfills
- JSX
- dart-sass
- node-sass
- Sass
- SCSS
- Less
- Stylus
- ESLint + Airbnb config
- ESLint + Standard config
- ESLint + Prettier
- TSLint (deprecated)
- TSLint (deprecated)
- Lint and fix on commit
- Lint on save
- unit testing
  - Mocha + Chai
  - Jest
- E2E testing
  - Cypress (Chrome only)
  - Nightwatch (WebDriver-based)
  - WebdriverIO (WebDriver/DevTools based)
- In dedicated config files
- In package.json
## Vue 全家桶

| 名称       | 版本                                                         |                  文档                  |                       GitHub                       |
| :--------- | :----------------------------------------------------------- | :------------------------------------: | :------------------------------------------------: |
| Vue CLI    | [![img](https://img.shields.io/npm/v/@vue/cli)](https://www.npmjs.com/package/@vue/cli) |   [文档](https://cli.vuejs.org/zh/)    |     [GitHub](https://github.com/vuejs/vue-cli)     |
| Vue Router | [![img](https://img.shields.io/npm/v/vue-router/next.svg)](https://www.npmjs.com/package/vue-router/v/next) | [文档](https://next.router.vuejs.org/) | [Github](https://github.com/vuejs/vue-router-next) |
| Vuex       | [![img](https://img.shields.io/npm/v/vuex/next.svg)](https://www.npmjs.com/package/vuex/v/next) |  [文档](https://next.vuex.vuejs.org/)  |  [Github](https://github.com/vuejs/vuex/tree/4.0)  |

## 线上运行
- [Codepen](https://codepen.io/yyx990803/pen/OJNoaZL) 上的浏览器内试验田
- [CodeSandbox](https://v3.vue.new/) 上的浏览器内沙盒
## IDE 支持
推荐使用 [VSCode](https://code.visualstudio.com/) 和我们官方拓展 [Volar](https://github.com/johnsoncodehk/volar)，它为 Vue 3 提供了全面的 IDE 支持

##  Devtools 扩展
新版本目前处于测试阶段，目前只支持 Vue 3。Vuex 和 Router 的集成也在进行中。
-  Chrome：[从 Chrome web 商店中安装](https://chrome.google.com/webstore/detail/vuejs-devtools/ljjemllljcmogpfapbkkighbhhppjdbg?hl=en)
-  Firefox：[下载签名扩展](https://github.com/vuejs/vue-devtools/releases/tag/v6.0.0-beta.20) (assets 下的 `.xpi` 文件)

## 项目引入
如果你想要在一个新项目里快速尝试 Vue 3：
- 通过 CDN：`<script src="https://unpkg.com/vue@next"></script>`

- 通过脚手架 [Vite](https://github.com/vitejs/vite)：

  ```bash
  npm init vite hello-vue3 -- --template vue 
  # 或 ## Vue 2 的项目或者库升级到 Vue 3
  yarn create vite hello-vue3 --template vue
  ```

- 通过脚手架 [vue-cli](https://cli.vuejs.org/)：

  ```bash
  npm install -g @vue/cli 
  # 或 
  yarn global add @vue/cli
  vue create hello-vue3
  # 选择 vue 3 preset
  ```
## Vue 2升级Vue 3
如果你打算要将一个基于 Vue 2 的项目或者库升级到 Vue 3，我们提供了一个与 Vue 2 API 兼容的 Vue 3 构建版本，详情见[用于迁移的构建版本](https://v3.cn.vuejs.org/guide/migration/migration-build.html)。
## Vue3新特性
- [组合式 API](https://v3.cn.vuejs.org/guide/composition-api-introduction.html)
- [Teleport](https://v3.cn.vuejs.org/guide/teleport.html)
- [片段](https://v3.cn.vuejs.org/guide/migration/fragments.html)
- [触发组件选项](https://v3.cn.vuejs.org/guide/component-custom-events.html)
- [来自 `@vue/runtime-core` 的 `createRenderer` API](https://github.com/vuejs/vue-next/tree/master/packages/runtime-core)，用于创建自定义渲染器
- [单文件组件组合式 API 语法糖 (``)](https://v3.cn.vuejs.org/api/sfc-script-setup.html)
- [单文件组件状态驱动的 CSS 变量 (`` 中的 `v-bind`)](https://v3.cn.vuejs.org/api/sfc-style.html#状态驱动的动态-css)
- [SFC `` 现在可以包含全局规则或只针对插槽内容的规则](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0023-scoped-styles-changes.md)
- [Suspense](https://v3.cn.vuejs.org/guide/migration/suspense.html) 实验性
## 非兼容的变更
- [全局 Vue API 已更改为使用应用程序实例](https://v3.cn.vuejs.org/guide/migration/global-api.html)
- [全局和内部 API 已经被重构为支持 tree-shake](https://v3.cn.vuejs.org/guide/migration/global-api-treeshaking.html)

## 模板指令

- [组件上 `v-model` 用法已更改，以替换 `v-bind.sync`](https://v3.cn.vuejs.org/guide/migration/v-model.html)
- `<template v-for>` 和非 `v-for` 节点上的 `key` 用法已更改
-  [在同一元素上使用的 `v-if` 和 `v-for` 优先级已更改](https://v3.cn.vuejs.org/guide/migration/v-if-v-for.html)
- [`v-bind="object"` 现在排序敏感](https://v3.cn.vuejs.org/guide/migration/v-bind.html)
- [`v-on:event.native` 修饰符已移除](https://v3.cn.vuejs.org/guide/migration/v-on-native-modifier-removed.html)
- [`v-for` 中的 `ref` 不再注册 ref 数组](https://v3.cn.vuejs.org/guide/migration/array-refs.html)

## 组件

- [只能使用普通函数创建函数式组件](https://v3.cn.vuejs.org/guide/migration/functional-components.html)
- [`functional` attribute 在单文件组件 (SFC) 的 `
- [异步组件现在需要使用 `defineAsyncComponent` 方法来创建](https://v3.cn.vuejs.org/guide/migration/async-components.html)
- [组件事件现在需要在 `emits` 选项中声明](https://v3.cn.vuejs.org/guide/migration/emits-option.html)

## TypeScript学习
- http://ts.xcatliu.com
- https://typescript.bootcss.com
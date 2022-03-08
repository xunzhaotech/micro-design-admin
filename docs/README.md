---
home: true
# heroImage: https://vuejs.org/images/logo.png
heroAlt: 快智岛
heroText: 快智岛
tagline: 快智岛
actions:
  - text: 在线预览
    link: /guide/
    type: primary
  - text: 项目简介
    link: /guide/
    type: secondary
features:
  - title: 简洁至上
    details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
  - title: Vue 驱动
    details: 享受 Vue 的开发体验，可以在 Markdown 中使用 Vue 组件，又可以使用 Vue 来开发自定义主题。
  - title: 企业级架构
    details: 开发和服务于企级后台产品
footer: <p>IT Licensed | Copyright © 2018-present Evan You</p>
footerHtml: true
---
## 安装

- 安装vue-cli脚手架
<CodeGroup>
  <CodeGroupItem title="YARN">

```bash:no-line-numbers
yarn global add @vue/cli@next
```
  </CodeGroupItem>

  <CodeGroupItem title="NPM" active>

```bash:no-line-numbers
npm install @vue/cli@next -g
```

  </CodeGroupItem>
   <CodeGroupItem title="CNPM">

```bash:no-line-numbers
cnpm install @vue/cli@next -g
```
  </CodeGroupItem>
</CodeGroup>

- 安装ant-design-vue
:::: code-group
::: code-group-item NPM
```bash
$ npm install ant-design-vue@next --save
```
:::
::: code-group-item YARN
```bash
$ yarn add ant-design-vue@next
```
:::
::: code-group-item CNPM
```bash
# $ npm install cnpm -g --registry=https://registry.npmmirror.com
$cnpm install ant-design-vue@next --save
```
:::
::::
## 项目创建
```bash
vue create my-project
```
1. 选择`Manually select features`
```bash
Vue CLI v5.0.0-rc.1
? Please pick a preset:
  ts-admin ([Vue 2] less, babel, typescript, pwa, router, vuex, eslint, unit-jest)
  vue3-ts-admin ([Vue 2] typescript, pwa, router, vuex, eslint)
  my-project ([Vue 3] less, babel, typescript, pwa, router, vuex, eslint, unit-jest, e2e-cypress)
  Default ([Vue 2] babel, eslint)
  Default (Vue 3) ([Vue 3] babel, eslint)
> Manually select features

```
2. 根据自己的配置选择
```bash
Vue CLI v5.0.0-rc.1
? Please pick a preset: Manually select features
? Check the features needed for your project:
 (*) Choose Vue version
 (*) Babel
 (*) TypeScript
 (*) Progressive Web App (PWA) Support
 (*) Router
 (*) Vuex
 (*) CSS Pre-processors
 (*) Linter / Formatter
 (*) Unit Testing
>(*) E2E Testing

```
3. 选择Vue3.x
```bash
Vue CLI v5.0.0-rc.1
? Please pick a preset: Manually select features
? Check the features needed for your project: Choose Vue version, Babel, TS, PWA, Router, Vuex, CSS Pre-processors, Lint
er, Unit, E2E
? Choose a version of Vue.js that you want to start the project with
  2.x
> 3.x

```
4. 选择对应配置
```bash
Vue CLI v5.0.0-rc.1
? Please pick a preset: Manually select features
? Check the features needed for your project: Choose Vue version, Babel, TS, PWA, Router, Vuex, CSS Pre-processors, Lint
er, Unit, E2E
? Choose a version of Vue.js that you want to start the project with 3.x
? Use class-style component syntax? Yes
? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? Yes
? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): Less
? Pick a linter / formatter config: Prettier
? Pick additional lint features: Lint on save
? Pick a unit testing solution: Jest
? Pick an E2E testing solution: Cypress
? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated config files
? Save this as a preset for future projects? (y/N)

```
5. 组件编写
```vue
import { Options, Vue } from 'vue-class-component';
@Options({
    emits: ["myEvent"]
})
export default class MyComponent extends Vue {
    myMethod(){
        this.$emit('myEvent')
    }
}
```
## vuex4.0 使用
```bash
npm install vuex@next --save
```
### 安装
### state
### getters
### mutations
### actions
## 版本
- 稳定版：npm package

::: tip 测试数据
提示内容
:::
::: warning 测试数据
提示内容
:::
::: danger 测试数据
提示内容
:::
::: details 测试数据
提示内容
:::

- VuePress - <Badge type="tip" text="v2" vertical="top" />
- VuePress - <Badge type="warning" text="v2" vertical="middle" />
- VuePress - <Badge type="danger" text="v2" vertical="bottom" />
<!--
 * @Author: xunzhaotech
 * @Email: luyb@xunzhaotech.com
 * @QQ: 1525572900
 * @LastEditors: xunzhaotech
-->
## 一、安装脚手架
1. 全局安装Vue-cli脚手架

```bash
yarn global add @vue/cli@next
# OR
npm install -g @vue/cli@next
```
2. 输入`vue -V`查看版本

```bash
@vue/cli 5.0.0-beta.5
```
## 二、 创建项目
使用`vue create vue-xxx`创建项目,可根据提示项创建自己需要的项目
## 三、引入ant-design-vue

```bash
yarn  add ant-design-vue@next -S
# OR
npm i ant-design-vue@next -S
```
### 3.1 全局引入
在main.js中引入
```
/*
 * @Author: xunzhaotech
 * @Email: luyb@xunzhaotech.com
 * @QQ: 1525572900
 * @LastEditors: xunzhaotech
 */
import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css'
import './registerServiceWorker'
import router from './router'
import store from './store'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(Antd)
app.mount('#app')

```
### 3.2 局部引入
在main.js中引入
```
/*
 * @Author: xunzhaotech
 * @Email: luyb@xunzhaotech.com
 * @QQ: 1525572900
 * @LastEditors: xunzhaotech
 */
import { createApp } from 'vue'
import { Button, message } from 'ant-design-vue';
import App from './App.vue'
import 'ant-design-vue/lib/button/style/css'
import './registerServiceWorker'
import router from './router'
import store from './store'

const app = createApp(App)
app.use(store)
app.use(router)
/* 会自动注册 Button 下的子组件, 例如 Button.Group */
app.use(Button)
app.mount('#app')

app.config.globalProperties.$message = message;

```
### 3.3 按需加载
```js
import Button from 'ant-design-vue/lib/button';
import 'ant-design-vue/lib/button/style'; // 或者 ant-design-vue/lib/button/style/css 加载 css 文件
```
### 3.4 插件引入
如果你使用了 babel，那么可以使用 babel-plugin-import(注意，babel-plugin-import 的 style 属性除了引入对应组件的样式，也会引入一些必要的全局样式。如果你不需要它们，建议不要使用此属性。你可以 import 'ant-design-vue/dist/antd.css 手动引入，并覆盖全局样式) 来进行按需加载，加入这个插件后。你可以仍然这么写：
```js
import { Button } from 'ant-design-vue';
```
插件会帮你转换成 ant-design-vue/lib/xxx 的写法。另外此插件配合 style 属性可以做到模块样式的按需自动加载。如果你使用的 Vite，你可以使用 vite-plugin-components 来进行按需加载。
> 注意:
相对于2.0版本的引入略有不同，3.0使用createApp(App)创建Vue的实例，然后使用熟悉的use，进行引入组件库。
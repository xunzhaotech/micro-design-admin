<template><!--
 * @Author: xunzhaotech
 * @Email: luyb@xunzhaotech.com
 * @QQ: 1525572900
 * @LastEditors: xunzhaotech
-->
<h1 id="vue3入门实践指南" tabindex="-1"><a class="header-anchor" href="#vue3入门实践指南">#</a> Vue3入门实践指南</h1>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>刚接触 Vue.js？先从<a href="https://v3.cn.vuejs.org/guide/introduction.html#vue-js-%E6%98%AF%E4%BB%80%E4%B9%88" target="_blank" rel="noopener noreferrer">基础指南<OutboundLink/></a>开始吧。</p>
</div>
<p>本指南主要是为有 Vue 2 经验的、希望了解 Vue 3 的新功能和更改的用户而提供的。</p>
<h2 id="知识准备" tabindex="-1"><a class="header-anchor" href="#知识准备">#</a> 知识准备</h2>
<ul>
<li>Babel</li>
<li>TypeScript</li>
<li>Progressive Web App (PWA) Support</li>
<li>Router</li>
<li>Vuex</li>
<li>CSS Pre-processors</li>
<li>Linter</li>
<li>Formatter</li>
<li>Unit Testing</li>
<li>E2E Testing</li>
<li>class-style component</li>
<li>polyfills</li>
<li>JSX</li>
<li>dart-sass</li>
<li>node-sass</li>
<li>Sass</li>
<li>SCSS</li>
<li>Less</li>
<li>Stylus</li>
<li>ESLint + Airbnb config</li>
<li>ESLint + Standard config</li>
<li>ESLint + Prettier</li>
<li>TSLint (deprecated)</li>
<li>TSLint (deprecated)</li>
<li>Lint and fix on commit</li>
<li>Lint on save</li>
<li>unit testing
<ul>
<li>Mocha + Chai</li>
<li>Jest</li>
</ul>
</li>
<li>E2E testing
<ul>
<li>Cypress (Chrome only)</li>
<li>Nightwatch (WebDriver-based)</li>
<li>WebdriverIO (WebDriver/DevTools based)</li>
</ul>
</li>
<li>In dedicated config files</li>
<li>In package.json</li>
</ul>
<h2 id="vue-全家桶" tabindex="-1"><a class="header-anchor" href="#vue-全家桶">#</a> Vue 全家桶</h2>
<table>
<thead>
<tr>
<th style="text-align:left">名称</th>
<th style="text-align:left">版本</th>
<th style="text-align:center">文档</th>
<th style="text-align:center">GitHub</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">Vue CLI</td>
<td style="text-align:left"><a href="https://www.npmjs.com/package/@vue/cli" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/npm/v/@vue/cli" alt="img"><OutboundLink/></a></td>
<td style="text-align:center"><a href="https://cli.vuejs.org/zh/" target="_blank" rel="noopener noreferrer">文档<OutboundLink/></a></td>
<td style="text-align:center"><a href="https://github.com/vuejs/vue-cli" target="_blank" rel="noopener noreferrer">GitHub<OutboundLink/></a></td>
</tr>
<tr>
<td style="text-align:left">Vue Router</td>
<td style="text-align:left"><a href="https://www.npmjs.com/package/vue-router/v/next" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/npm/v/vue-router/next.svg" alt="img"><OutboundLink/></a></td>
<td style="text-align:center"><a href="https://next.router.vuejs.org/" target="_blank" rel="noopener noreferrer">文档<OutboundLink/></a></td>
<td style="text-align:center"><a href="https://github.com/vuejs/vue-router-next" target="_blank" rel="noopener noreferrer">Github<OutboundLink/></a></td>
</tr>
<tr>
<td style="text-align:left">Vuex</td>
<td style="text-align:left"><a href="https://www.npmjs.com/package/vuex/v/next" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/npm/v/vuex/next.svg" alt="img"><OutboundLink/></a></td>
<td style="text-align:center"><a href="https://next.vuex.vuejs.org/" target="_blank" rel="noopener noreferrer">文档<OutboundLink/></a></td>
<td style="text-align:center"><a href="https://github.com/vuejs/vuex/tree/4.0" target="_blank" rel="noopener noreferrer">Github<OutboundLink/></a></td>
</tr>
</tbody>
</table>
<h2 id="线上运行" tabindex="-1"><a class="header-anchor" href="#线上运行">#</a> 线上运行</h2>
<ul>
<li><a href="https://codepen.io/yyx990803/pen/OJNoaZL" target="_blank" rel="noopener noreferrer">Codepen<OutboundLink/></a> 上的浏览器内试验田</li>
<li><a href="https://v3.vue.new/" target="_blank" rel="noopener noreferrer">CodeSandbox<OutboundLink/></a> 上的浏览器内沙盒</li>
</ul>
<h2 id="ide-支持" tabindex="-1"><a class="header-anchor" href="#ide-支持">#</a> IDE 支持</h2>
<p>推荐使用 <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">VSCode<OutboundLink/></a> 和我们官方拓展 <a href="https://github.com/johnsoncodehk/volar" target="_blank" rel="noopener noreferrer">Volar<OutboundLink/></a>，它为 Vue 3 提供了全面的 IDE 支持</p>
<h2 id="devtools-扩展" tabindex="-1"><a class="header-anchor" href="#devtools-扩展">#</a> Devtools 扩展</h2>
<p>新版本目前处于测试阶段，目前只支持 Vue 3。Vuex 和 Router 的集成也在进行中。</p>
<ul>
<li>Chrome：<a href="https://chrome.google.com/webstore/detail/vuejs-devtools/ljjemllljcmogpfapbkkighbhhppjdbg?hl=en" target="_blank" rel="noopener noreferrer">从 Chrome web 商店中安装<OutboundLink/></a></li>
<li>Firefox：<a href="https://github.com/vuejs/vue-devtools/releases/tag/v6.0.0-beta.20" target="_blank" rel="noopener noreferrer">下载签名扩展<OutboundLink/></a> (assets 下的 <code>.xpi</code> 文件)</li>
</ul>
<h2 id="项目引入" tabindex="-1"><a class="header-anchor" href="#项目引入">#</a> 项目引入</h2>
<p>如果你想要在一个新项目里快速尝试 Vue 3：</p>
<ul>
<li>
<p>通过 CDN：<code>&lt;script src=&quot;https://unpkg.com/vue@next&quot;&gt;&lt;/script&gt;</code></p>
</li>
<li>
<p>通过脚手架 <a href="https://github.com/vitejs/vite" target="_blank" rel="noopener noreferrer">Vite<OutboundLink/></a>：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> init vite hello-vue3 -- --template vue 
<span class="token comment"># 或 ## Vue 2 的项目或者库升级到 Vue 3</span>
<span class="token function">yarn</span> create vite hello-vue3 --template vue
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li>
<li>
<p>通过脚手架 <a href="https://cli.vuejs.org/" target="_blank" rel="noopener noreferrer">vue-cli<OutboundLink/></a>：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> -g @vue/cli 
<span class="token comment"># 或 </span>
<span class="token function">yarn</span> global <span class="token function">add</span> @vue/cli
vue create hello-vue3
<span class="token comment"># 选择 vue 3 preset</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li>
</ul>
<h2 id="vue-2升级vue-3" tabindex="-1"><a class="header-anchor" href="#vue-2升级vue-3">#</a> Vue 2升级Vue 3</h2>
<p>如果你打算要将一个基于 Vue 2 的项目或者库升级到 Vue 3，我们提供了一个与 Vue 2 API 兼容的 Vue 3 构建版本，详情见<a href="https://v3.cn.vuejs.org/guide/migration/migration-build.html" target="_blank" rel="noopener noreferrer">用于迁移的构建版本<OutboundLink/></a>。</p>
<h2 id="vue3新特性" tabindex="-1"><a class="header-anchor" href="#vue3新特性">#</a> Vue3新特性</h2>
<ul>
<li><a href="https://v3.cn.vuejs.org/guide/composition-api-introduction.html" target="_blank" rel="noopener noreferrer">组合式 API<OutboundLink/></a></li>
<li><a href="https://v3.cn.vuejs.org/guide/teleport.html" target="_blank" rel="noopener noreferrer">Teleport<OutboundLink/></a></li>
<li><a href="https://v3.cn.vuejs.org/guide/migration/fragments.html" target="_blank" rel="noopener noreferrer">片段<OutboundLink/></a></li>
<li><a href="https://v3.cn.vuejs.org/guide/component-custom-events.html" target="_blank" rel="noopener noreferrer">触发组件选项<OutboundLink/></a></li>
<li><a href="https://github.com/vuejs/vue-next/tree/master/packages/runtime-core" target="_blank" rel="noopener noreferrer">来自 <code>@vue/runtime-core</code> 的 <code>createRenderer</code> API<OutboundLink/></a>，用于创建自定义渲染器</li>
<li><a href="https://v3.cn.vuejs.org/api/sfc-script-setup.html" target="_blank" rel="noopener noreferrer">单文件组件组合式 API 语法糖 (``)<OutboundLink/></a></li>
<li><a href="https://v3.cn.vuejs.org/api/sfc-style.html#%E7%8A%B6%E6%80%81%E9%A9%B1%E5%8A%A8%E7%9A%84%E5%8A%A8%E6%80%81-css" target="_blank" rel="noopener noreferrer">单文件组件状态驱动的 CSS 变量 (`` 中的 <code>v-bind</code>)<OutboundLink/></a></li>
<li><a href="https://github.com/vuejs/rfcs/blob/master/active-rfcs/0023-scoped-styles-changes.md" target="_blank" rel="noopener noreferrer">SFC `` 现在可以包含全局规则或只针对插槽内容的规则<OutboundLink/></a></li>
<li><a href="https://v3.cn.vuejs.org/guide/migration/suspense.html" target="_blank" rel="noopener noreferrer">Suspense<OutboundLink/></a> 实验性</li>
</ul>
<h2 id="非兼容的变更" tabindex="-1"><a class="header-anchor" href="#非兼容的变更">#</a> 非兼容的变更</h2>
<ul>
<li><a href="https://v3.cn.vuejs.org/guide/migration/global-api.html" target="_blank" rel="noopener noreferrer">全局 Vue API 已更改为使用应用程序实例<OutboundLink/></a></li>
<li><a href="https://v3.cn.vuejs.org/guide/migration/global-api-treeshaking.html" target="_blank" rel="noopener noreferrer">全局和内部 API 已经被重构为支持 tree-shake<OutboundLink/></a></li>
</ul>
<h2 id="模板指令" tabindex="-1"><a class="header-anchor" href="#模板指令">#</a> 模板指令</h2>
<ul>
<li><a href="https://v3.cn.vuejs.org/guide/migration/v-model.html" target="_blank" rel="noopener noreferrer">组件上 <code>v-model</code> 用法已更改，以替换 <code>v-bind.sync</code><OutboundLink/></a></li>
<li><code>&lt;template v-for&gt;</code> 和非 <code>v-for</code> 节点上的 <code>key</code> 用法已更改</li>
<li><a href="https://v3.cn.vuejs.org/guide/migration/v-if-v-for.html" target="_blank" rel="noopener noreferrer">在同一元素上使用的 <code>v-if</code> 和 <code>v-for</code> 优先级已更改<OutboundLink/></a></li>
<li><a href="https://v3.cn.vuejs.org/guide/migration/v-bind.html" target="_blank" rel="noopener noreferrer"><code>v-bind=&quot;object&quot;</code> 现在排序敏感<OutboundLink/></a></li>
<li><a href="https://v3.cn.vuejs.org/guide/migration/v-on-native-modifier-removed.html" target="_blank" rel="noopener noreferrer"><code>v-on:event.native</code> 修饰符已移除<OutboundLink/></a></li>
<li><a href="https://v3.cn.vuejs.org/guide/migration/array-refs.html" target="_blank" rel="noopener noreferrer"><code>v-for</code> 中的 <code>ref</code> 不再注册 ref 数组<OutboundLink/></a></li>
</ul>
<h2 id="组件" tabindex="-1"><a class="header-anchor" href="#组件">#</a> 组件</h2>
<ul>
<li><a href="https://v3.cn.vuejs.org/guide/migration/functional-components.html" target="_blank" rel="noopener noreferrer">只能使用普通函数创建函数式组件<OutboundLink/></a></li>
<li>[`functional` attribute 在单文件组件 (SFC) 的 `</li>
<li><a href="https://v3.cn.vuejs.org/guide/migration/async-components.html" target="_blank" rel="noopener noreferrer">异步组件现在需要使用 <code>defineAsyncComponent</code> 方法来创建<OutboundLink/></a></li>
<li><a href="https://v3.cn.vuejs.org/guide/migration/emits-option.html" target="_blank" rel="noopener noreferrer">组件事件现在需要在 <code>emits</code> 选项中声明<OutboundLink/></a></li>
</ul>
<h2 id="typescript学习" tabindex="-1"><a class="header-anchor" href="#typescript学习">#</a> TypeScript学习</h2>
<ul>
<li>http://ts.xcatliu.com</li>
<li>https://typescript.bootcss.com</li>
</ul>
<h2 id="vue-router加载组件的方法" tabindex="-1"><a class="header-anchor" href="#vue-router加载组件的方法">#</a> vue-router加载组件的方法</h2>
<h3 id="import加载" tabindex="-1"><a class="header-anchor" href="#import加载">#</a> import加载</h3>
<ol>
<li>一般方法</li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>import Login from '../views/Login.vue'
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="2">
<li>按需加载</li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>const Login= () => import("../views/Login.vue")
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="require加载" tabindex="-1"><a class="header-anchor" href="#require加载">#</a> require加载</h3>
<ol>
<li>非按需加载（注意需要加上.default）</li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>const Login= require("../views/Login.vue").default
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="2">
<li>按需加载</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>const Login= (resolve) => {
	require(["../views/Login.vue"],resolve)
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></template>

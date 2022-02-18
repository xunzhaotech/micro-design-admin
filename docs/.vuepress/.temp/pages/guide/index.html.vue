<template><!--
 * @Author: your name
 * @Date: 2020-05-04 12:27:39
 * @LastEditTime: 2021-10-09 14:07:10
 * @LastEditors: xunzhaotech
 * @Description: In User Settings Edit
 * @FilePath: \undefinedd:\project\frontend-docs\docs\guide\guide.md
 -->
<h1 id="快速入门" tabindex="-1"><a class="header-anchor" href="#快速入门">#</a> 快速入门</h1>
<h2 id="适合人群" tabindex="-1"><a class="header-anchor" href="#适合人群">#</a> 适合人群</h2>
<ul>
<li>了解关于 HTML、CSS 和 JavaScript 的中级知识，并且已经完全掌握了 Vue 的正确开发方式。</li>
<li>推荐先学习 <a href="https://cn.vuejs.org/" target="_blank" rel="noopener noreferrer">Vue<OutboundLink/></a> 和 <a href="https://babeljs.io/docs/en/learn" target="_blank" rel="noopener noreferrer">ES2015<OutboundLink/></a></li>
</ul>
<h2 id="环境要求" tabindex="-1"><a class="header-anchor" href="#环境要求">#</a> 环境要求</h2>
<h3 id="nodejs安装" tabindex="-1"><a class="header-anchor" href="#nodejs安装">#</a> NodeJS安装</h3>
<p>正确安装和配置了 <a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">Node.js<OutboundLink/></a> v8.9 或以上</p>
<blockquote>
<p>直接安装
<a href="">nrm</a>安装
nvm是nodejs的版本管理工具</p>
</blockquote>
<h2 id="包管理器" tabindex="-1"><a class="header-anchor" href="#包管理器">#</a> 包管理器</h2>
<ul>
<li><a href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer">npm<OutboundLink/></a></li>
<li><a href="https://github.com/cnpm/cnpm" target="_blank" rel="noopener noreferrer">cnpm<OutboundLink/></a></li>
<li><a href="https://pnpm.io/zh/" target="_blank" rel="noopener noreferrer">pnpm<OutboundLink/></a></li>
<li><a href="https://classic.yarnpkg.com/lang/en/" target="_blank" rel="noopener noreferrer">yarn<OutboundLink/></a></li>
<li><a href="https://yarnpkg.com/getting-started/migration" target="_blank" rel="noopener noreferrer">yarn2<OutboundLink/></a></li>
</ul>
<h2 id="兼容性" tabindex="-1"><a class="header-anchor" href="#兼容性">#</a> 兼容性</h2>
<ul>
<li>对于 IE 系列浏览器，需要提供 es5-shim 和 es6-shim 等 Polyfills 的支持。</li>
<li>如果使用了babel，强烈推荐使用 babel-polyfill 和 babel-plugin-transform-runtime 来替代以上两个 shim</li>
</ul>
<h2 id="前端工具" tabindex="-1"><a class="header-anchor" href="#前端工具">#</a> 前端工具</h2>
<ul>
<li><a href="https://www.webpackjs.com/" target="_blank" rel="noopener noreferrer">Webpack<OutboundLink/></a></li>
<li><a href="https://vitejs.cn/" target="_blank" rel="noopener noreferrer">Vite<OutboundLink/></a></li>
<li><a href="https://www.rollupjs.com/" target="_blank" rel="noopener noreferrer">Rollup<OutboundLink/></a></li>
<li><a href="https://www.parceljs.cn/" target="_blank" rel="noopener noreferrer">Parcel<OutboundLink/></a></li>
<li><a href="https://tencent.github.io/omi/" target="_blank" rel="noopener noreferrer">omi<OutboundLink/></a></li>
</ul>
<h2 id="常用工具" tabindex="-1"><a class="header-anchor" href="#常用工具">#</a> 常用工具</h2>
<ul>
<li><a href="">Babel</a></li>
<li><a href="">ESLint</a></li>
<li><a href="">PostCSS</a></li>
<li><a href="">PWA</a></li>
<li><a href="">单元测试</a></li>
</ul>
<h2 id="svelte体系" tabindex="-1"><a class="header-anchor" href="#svelte体系">#</a> Svelte体系</h2>
<ul>
<li><a href="https://www.sveltejs.cn/" target="_blank" rel="noopener noreferrer">Svelte<OutboundLink/></a></li>
</ul>
<h2 id="vue体系" tabindex="-1"><a class="header-anchor" href="#vue体系">#</a> Vue体系</h2>
<ul>
<li><a href="https://cli.vuejs.org" target="_blank" rel="noopener noreferrer">vue-cli documentation<OutboundLink/></a></li>
<li><a href="https://vuejs.org" target="_blank" rel="noopener noreferrer">Vue<OutboundLink/></a></li>
<li><a href="https://router.vuejs.org" target="_blank" rel="noopener noreferrer">vue-router<OutboundLink/></a></li>
<li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener noreferrer">vuex<OutboundLink/></a></li>
<li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener noreferrer">vue-devtools<OutboundLink/></a></li>
<li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener noreferrer">vue-loader<OutboundLink/></a></li>
<li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener noreferrer">awesome-vue<OutboundLink/></a></li>
<li><a href="https://iview.github.io/" target="_blank" rel="noopener noreferrer">iview<OutboundLink/></a></li>
</ul>
<h2 id="react体系" tabindex="-1"><a class="header-anchor" href="#react体系">#</a> React体系</h2>
<ul>
<li><a href="https://ant.design/index-cn" target="_blank" rel="noopener noreferrer">Ant.Design<OutboundLink/></a></li>
<li><a href="https://charts.ant.design/" target="_blank" rel="noopener noreferrer">Ant Design Charts<OutboundLink/></a></li>
<li><a href="https://pro.ant.design/zh-CN/" target="_blank" rel="noopener noreferrer">Ant Design Pro<OutboundLink/></a></li>
<li><a href="https://github.com/websemantics/awesome-ant-design" target="_blank" rel="noopener noreferrer">Awesome Ant Design<OutboundLink/></a></li>
</ul>
<h2 id="小程序" tabindex="-1"><a class="header-anchor" href="#小程序">#</a> 小程序</h2>
<ul>
<li><a href="https://developers.weixin.qq.com/miniprogram/dev/devtools/stable.html" target="_blank" rel="noopener noreferrer">小程序开发者工具<OutboundLink/></a></li>
<li><a href="https://uniapp.dcloud.net.cn/" target="_blank" rel="noopener noreferrer">uniapp<OutboundLink/></a></li>
<li><a href="http://mpvue.com/" target="_blank" rel="noopener noreferrer">mpvue<OutboundLink/></a></li>
<li><a href="https://didi.github.io/mpx/" target="_blank" rel="noopener noreferrer">mpx<OutboundLink/></a></li>
<li><a href="https://wepyjs.github.io/wepy-docs/2.x/#/" target="_blank" rel="noopener noreferrer">WePY<OutboundLink/></a></li>
<li><a href="https://www.uviewui.com/" target="_blank" rel="noopener noreferrer">uView<OutboundLink/></a></li>
<li><a href="http://demo.color-ui.com/" target="_blank" rel="noopener noreferrer">color-ui<OutboundLink/></a></li>
<li><a href="https://github.com/aben1188/awesome-wepy" target="_blank" rel="noopener noreferrer">awesome-wepy<OutboundLink/></a></li>
</ul>
<h2 id="vue-router引入" tabindex="-1"><a class="header-anchor" href="#vue-router引入">#</a> vue-router引入</h2>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router


</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div></template>

<template><!--
 * @Author: xunzhaotech
 * @Email: luyb@xunzhaotech.com
 * @QQ: 1525572900
 * @LastEditors: xunzhaotech
-->
<h2 id="一、安装脚手架" tabindex="-1"><a class="header-anchor" href="#一、安装脚手架">#</a> 一、安装脚手架</h2>
<ol>
<li>全局安装Vue-cli脚手架</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> global <span class="token function">add</span> @vue/cli@next
<span class="token comment"># OR</span>
<span class="token function">npm</span> <span class="token function">install</span> -g @vue/cli@next
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="2">
<li>输入<code>vue -V</code>查看版本</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>@vue/cli <span class="token number">5.0</span>.0-beta.5
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="二、-创建项目" tabindex="-1"><a class="header-anchor" href="#二、-创建项目">#</a> 二、 创建项目</h2>
<p>使用<code>vue create vue-xxx</code>创建项目,可根据提示项创建自己需要的项目</p>
<h2 id="三、引入ant-design-vue" tabindex="-1"><a class="header-anchor" href="#三、引入ant-design-vue">#</a> 三、引入ant-design-vue</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">yarn</span>  <span class="token function">add</span> ant-design-vue@next -S
<span class="token comment"># OR</span>
<span class="token function">npm</span> i ant-design-vue@next -S
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_3-1-全局引入" tabindex="-1"><a class="header-anchor" href="#_3-1-全局引入">#</a> 3.1 全局引入</h3>
<p>在main.js中引入</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>/*
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

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h3 id="_3-2-局部引入" tabindex="-1"><a class="header-anchor" href="#_3-2-局部引入">#</a> 3.2 局部引入</h3>
<p>在main.js中引入</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>/*
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

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h3 id="_3-3-按需加载" tabindex="-1"><a class="header-anchor" href="#_3-3-按需加载">#</a> 3.3 按需加载</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">'ant-design-vue/lib/button'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'ant-design-vue/lib/button/style'</span><span class="token punctuation">;</span> <span class="token comment">// 或者 ant-design-vue/lib/button/style/css 加载 css 文件</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_3-4-插件引入" tabindex="-1"><a class="header-anchor" href="#_3-4-插件引入">#</a> 3.4 插件引入</h3>
<p>如果你使用了 babel，那么可以使用 babel-plugin-import(注意，babel-plugin-import 的 style 属性除了引入对应组件的样式，也会引入一些必要的全局样式。如果你不需要它们，建议不要使用此属性。你可以 import 'ant-design-vue/dist/antd.css 手动引入，并覆盖全局样式) 来进行按需加载，加入这个插件后。你可以仍然这么写：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'ant-design-vue'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>插件会帮你转换成 ant-design-vue/lib/xxx 的写法。另外此插件配合 style 属性可以做到模块样式的按需自动加载。如果你使用的 Vite，你可以使用 vite-plugin-components 来进行按需加载。</p>
<blockquote>
<p>注意:
相对于2.0版本的引入略有不同，3.0使用createApp(App)创建Vue的实例，然后使用熟悉的use，进行引入组件库。</p>
</blockquote>
</template>

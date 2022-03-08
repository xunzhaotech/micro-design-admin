<template><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装">#</a> 安装</h2>
<ul>
<li>安装vue-cli脚手架</li>
</ul>
<CodeGroup>
  <CodeGroupItem title="YARN">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> global <span class="token function">add</span> @vue/cli@next
</code></pre></div>  </CodeGroupItem>
  <CodeGroupItem title="NPM" active>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> @vue/cli@next -g
</code></pre></div>  </CodeGroupItem>
   <CodeGroupItem title="CNPM">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>cnpm <span class="token function">install</span> @vue/cli@next -g
</code></pre></div>  </CodeGroupItem>
</CodeGroup>
<ul>
<li>安装ant-design-vue</li>
</ul>
<CodeGroup>
<CodeGroupItem title="NPM">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> ant-design-vue@next --save
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="YARN">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">yarn</span> <span class="token function">add</span> ant-design-vue@next
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="CNPM">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># $ npm install cnpm -g --registry=https://registry.npmmirror.com</span>
<span class="token variable">$cnpm</span> <span class="token function">install</span> ant-design-vue@next --save
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></CodeGroupItem>
</CodeGroup>
<h2 id="项目创建" tabindex="-1"><a class="header-anchor" href="#项目创建">#</a> 项目创建</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>vue create my-project
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol>
<li>选择<code>Manually select features</code></li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>Vue CLI v5.0.0-rc.1
? Please pick a preset:
  ts-admin <span class="token punctuation">(</span><span class="token punctuation">[</span>Vue <span class="token number">2</span><span class="token punctuation">]</span> less, babel, typescript, pwa, router, vuex, eslint, unit-jest<span class="token punctuation">)</span>
  vue3-ts-admin <span class="token punctuation">(</span><span class="token punctuation">[</span>Vue <span class="token number">2</span><span class="token punctuation">]</span> typescript, pwa, router, vuex, eslint<span class="token punctuation">)</span>
  my-project <span class="token punctuation">(</span><span class="token punctuation">[</span>Vue <span class="token number">3</span><span class="token punctuation">]</span> less, babel, typescript, pwa, router, vuex, eslint, unit-jest, e2e-cypress<span class="token punctuation">)</span>
  Default <span class="token punctuation">(</span><span class="token punctuation">[</span>Vue <span class="token number">2</span><span class="token punctuation">]</span> babel, eslint<span class="token punctuation">)</span>
  Default <span class="token punctuation">(</span>Vue <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token punctuation">[</span>Vue <span class="token number">3</span><span class="token punctuation">]</span> babel, eslint<span class="token punctuation">)</span>
<span class="token operator">></span> Manually <span class="token keyword">select</span> features

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ol start="2">
<li>根据自己的配置选择</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>Vue CLI v5.0.0-rc.1
? Please pick a preset: Manually <span class="token keyword">select</span> features
? Check the features needed <span class="token keyword">for</span> your project:
 <span class="token punctuation">(</span>*<span class="token punctuation">)</span> Choose Vue version
 <span class="token punctuation">(</span>*<span class="token punctuation">)</span> Babel
 <span class="token punctuation">(</span>*<span class="token punctuation">)</span> TypeScript
 <span class="token punctuation">(</span>*<span class="token punctuation">)</span> Progressive Web App <span class="token punctuation">(</span>PWA<span class="token punctuation">)</span> Support
 <span class="token punctuation">(</span>*<span class="token punctuation">)</span> Router
 <span class="token punctuation">(</span>*<span class="token punctuation">)</span> Vuex
 <span class="token punctuation">(</span>*<span class="token punctuation">)</span> CSS Pre-processors
 <span class="token punctuation">(</span>*<span class="token punctuation">)</span> Linter / Formatter
 <span class="token punctuation">(</span>*<span class="token punctuation">)</span> Unit Testing
<span class="token operator">></span><span class="token punctuation">(</span>*<span class="token punctuation">)</span> E2E Testing

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><ol start="3">
<li>选择Vue3.x</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>Vue CLI v5.0.0-rc.1
? Please pick a preset: Manually <span class="token keyword">select</span> features
? Check the features needed <span class="token keyword">for</span> your project: Choose Vue version, Babel, TS, PWA, Router, Vuex, CSS Pre-processors, Lint
er, Unit, E2E
? Choose a version of Vue.js that you want to start the project with
  <span class="token number">2</span>.x
<span class="token operator">></span> <span class="token number">3</span>.x

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ol start="4">
<li>选择对应配置</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>Vue CLI v5.0.0-rc.1
? Please pick a preset: Manually <span class="token keyword">select</span> features
? Check the features needed <span class="token keyword">for</span> your project: Choose Vue version, Babel, TS, PWA, Router, Vuex, CSS Pre-processors, Lint
er, Unit, E2E
? Choose a version of Vue.js that you want to start the project with <span class="token number">3</span>.x
? Use class-style component syntax? Yes
? Use Babel alongside TypeScript <span class="token punctuation">(</span>required <span class="token keyword">for</span> modern mode, auto-detected polyfills, transpiling JSX<span class="token punctuation">)</span>? Yes
? Use <span class="token function">history</span> mode <span class="token keyword">for</span> router? <span class="token punctuation">(</span>Requires proper server setup <span class="token keyword">for</span> index fallback <span class="token keyword">in</span> production<span class="token punctuation">)</span> Yes
? Pick a CSS pre-processor <span class="token punctuation">(</span>PostCSS, Autoprefixer and CSS Modules are supported by default<span class="token punctuation">)</span>: Less
? Pick a linter / formatter config: Prettier
? Pick additional lint features: Lint on save
? Pick a unit testing solution: Jest
? Pick an E2E testing solution: Cypress
? Where <span class="token keyword">do</span> you prefer placing config <span class="token keyword">for</span> Babel, ESLint, etc.? In dedicated config files
? Save this as a preset <span class="token keyword">for</span> future projects? <span class="token punctuation">(</span>y/N<span class="token punctuation">)</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><ol start="5">
<li>组件编写</li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>import { Options, Vue } from 'vue-class-component';
@Options({
    emits: ["myEvent"]
})
export default class MyComponent extends Vue {
    myMethod(){
        this.$emit('myEvent')
    }
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="vuex4-0-使用" tabindex="-1"><a class="header-anchor" href="#vuex4-0-使用">#</a> vuex4.0 使用</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> vuex@next --save
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="安装-1" tabindex="-1"><a class="header-anchor" href="#安装-1">#</a> 安装</h3>
<h3 id="state" tabindex="-1"><a class="header-anchor" href="#state">#</a> state</h3>
<h3 id="getters" tabindex="-1"><a class="header-anchor" href="#getters">#</a> getters</h3>
<h3 id="mutations" tabindex="-1"><a class="header-anchor" href="#mutations">#</a> mutations</h3>
<h3 id="actions" tabindex="-1"><a class="header-anchor" href="#actions">#</a> actions</h3>
<h2 id="版本" tabindex="-1"><a class="header-anchor" href="#版本">#</a> 版本</h2>
<ul>
<li>稳定版：npm package</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">测试数据</p>
<p>提示内容</p>
</div>
<div class="custom-container warning"><p class="custom-container-title">测试数据</p>
<p>提示内容</p>
</div>
<div class="custom-container danger"><p class="custom-container-title">测试数据</p>
<p>提示内容</p>
</div>
<details class="custom-container details"><summary>测试数据</summary>
<p>提示内容</p>
</details>
<ul>
<li>VuePress - <Badge type="tip" text="v2" vertical="top" /></li>
<li>VuePress - <Badge type="warning" text="v2" vertical="middle" /></li>
<li>VuePress - <Badge type="danger" text="v2" vertical="bottom" /></li>
</ul>
</template>

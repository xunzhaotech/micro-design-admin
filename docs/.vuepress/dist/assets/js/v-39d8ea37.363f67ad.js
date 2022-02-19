"use strict";(self.webpackChunkmicro_design_admin=self.webpackChunkmicro_design_admin||[]).push([[4410],{7087:function(e,l,n){n.r(l),n.d(l,{data:function(){return r}});const r={key:"v-39d8ea37",path:"/pages/course/frontend.html",title:"Vue3入门实践指南",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"知识准备",slug:"知识准备",children:[]},{level:2,title:"Vue 全家桶",slug:"vue-全家桶",children:[]},{level:2,title:"线上运行",slug:"线上运行",children:[]},{level:2,title:"IDE 支持",slug:"ide-支持",children:[]},{level:2,title:"Devtools 扩展",slug:"devtools-扩展",children:[]},{level:2,title:"项目引入",slug:"项目引入",children:[]},{level:2,title:"Vue 2升级Vue 3",slug:"vue-2升级vue-3",children:[]},{level:2,title:"Vue3新特性",slug:"vue3新特性",children:[]},{level:2,title:"非兼容的变更",slug:"非兼容的变更",children:[]},{level:2,title:"模板指令",slug:"模板指令",children:[]},{level:2,title:"组件",slug:"组件",children:[]},{level:2,title:"TypeScript学习",slug:"typescript学习",children:[]},{level:2,title:"vue-router加载组件的方法",slug:"vue-router加载组件的方法",children:[{level:3,title:"import加载",slug:"import加载",children:[]},{level:3,title:"require加载",slug:"require加载",children:[]}]}],filePathRelative:"pages/course/frontend.md",git:{updatedTime:1645168273e3,contributors:[{name:"luyb",email:"luyb@xunzhaotech.com",commits:5}]}}},5077:function(e,l,n){n.r(l),n.d(l,{default:function(){return Xl}});var r=n(6252);const t=(0,r._)("h1",{id:"vue3入门实践指南",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#vue3入门实践指南"},"#"),(0,r.Uk)(" Vue3入门实践指南")],-1),i={class:"custom-container tip"},a=(0,r._)("p",{class:"custom-container-title"},"TIP",-1),s=(0,r.Uk)("刚接触 Vue.js？先从"),o={href:"https://v3.cn.vuejs.org/guide/introduction.html#vue-js-%E6%98%AF%E4%BB%80%E4%B9%88",target:"_blank",rel:"noopener noreferrer"},u=(0,r.Uk)("基础指南"),c=(0,r.Uk)("开始吧。"),h=(0,r.uE)('<p>本指南主要是为有 Vue 2 经验的、希望了解 Vue 3 的新功能和更改的用户而提供的。</p><h2 id="知识准备" tabindex="-1"><a class="header-anchor" href="#知识准备">#</a> 知识准备</h2><ul><li>Babel</li><li>TypeScript</li><li>Progressive Web App (PWA) Support</li><li>Router</li><li>Vuex</li><li>CSS Pre-processors</li><li>Linter</li><li>Formatter</li><li>Unit Testing</li><li>E2E Testing</li><li>class-style component</li><li>polyfills</li><li>JSX</li><li>dart-sass</li><li>node-sass</li><li>Sass</li><li>SCSS</li><li>Less</li><li>Stylus</li><li>ESLint + Airbnb config</li><li>ESLint + Standard config</li><li>ESLint + Prettier</li><li>TSLint (deprecated)</li><li>TSLint (deprecated)</li><li>Lint and fix on commit</li><li>Lint on save</li><li>unit testing <ul><li>Mocha + Chai</li><li>Jest</li></ul></li><li>E2E testing <ul><li>Cypress (Chrome only)</li><li>Nightwatch (WebDriver-based)</li><li>WebdriverIO (WebDriver/DevTools based)</li></ul></li><li>In dedicated config files</li><li>In package.json</li></ul><h2 id="vue-全家桶" tabindex="-1"><a class="header-anchor" href="#vue-全家桶">#</a> Vue 全家桶</h2>',4),p=(0,r._)("thead",null,[(0,r._)("tr",null,[(0,r._)("th",{style:{"text-align":"left"}},"名称"),(0,r._)("th",{style:{"text-align":"left"}},"版本"),(0,r._)("th",{style:{"text-align":"center"}},"文档"),(0,r._)("th",{style:{"text-align":"center"}},"GitHub")])],-1),d=(0,r._)("td",{style:{"text-align":"left"}},"Vue CLI",-1),g={style:{"text-align":"left"}},v={href:"https://www.npmjs.com/package/@vue/cli",target:"_blank",rel:"noopener noreferrer"},m=(0,r._)("img",{src:"https://img.shields.io/npm/v/@vue/cli",alt:"img"},null,-1),_={style:{"text-align":"center"}},f={href:"https://cli.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},b=(0,r.Uk)("文档"),k={style:{"text-align":"center"}},U={href:"https://github.com/vuejs/vue-cli",target:"_blank",rel:"noopener noreferrer"},x=(0,r.Uk)("GitHub"),j=(0,r._)("td",{style:{"text-align":"left"}},"Vue Router",-1),y={style:{"text-align":"left"}},W={href:"https://www.npmjs.com/package/vue-router/v/next",target:"_blank",rel:"noopener noreferrer"},V=(0,r._)("img",{src:"https://img.shields.io/npm/v/vue-router/next.svg",alt:"img"},null,-1),S={style:{"text-align":"center"}},E={href:"https://next.router.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},w=(0,r.Uk)("文档"),L={style:{"text-align":"center"}},C={href:"https://github.com/vuejs/vue-router-next",target:"_blank",rel:"noopener noreferrer"},A=(0,r.Uk)("Github"),I=(0,r._)("td",{style:{"text-align":"left"}},"Vuex",-1),q={style:{"text-align":"left"}},P={href:"https://www.npmjs.com/package/vuex/v/next",target:"_blank",rel:"noopener noreferrer"},T=(0,r._)("img",{src:"https://img.shields.io/npm/v/vuex/next.svg",alt:"img"},null,-1),D={style:{"text-align":"center"}},B={href:"https://next.vuex.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},F=(0,r.Uk)("文档"),R={style:{"text-align":"center"}},G={href:"https://github.com/vuejs/vuex/tree/4.0",target:"_blank",rel:"noopener noreferrer"},N=(0,r.Uk)("Github"),O=(0,r._)("h2",{id:"线上运行",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#线上运行"},"#"),(0,r.Uk)(" 线上运行")],-1),z={href:"https://codepen.io/yyx990803/pen/OJNoaZL",target:"_blank",rel:"noopener noreferrer"},H=(0,r.Uk)("Codepen"),J=(0,r.Uk)(" 上的浏览器内试验田"),Z={href:"https://v3.vue.new/",target:"_blank",rel:"noopener noreferrer"},M=(0,r.Uk)("CodeSandbox"),X=(0,r.Uk)(" 上的浏览器内沙盒"),Y=(0,r._)("h2",{id:"ide-支持",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#ide-支持"},"#"),(0,r.Uk)(" IDE 支持")],-1),K=(0,r.Uk)("推荐使用 "),Q={href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"},$=(0,r.Uk)("VSCode"),ee=(0,r.Uk)(" 和我们官方拓展 "),le={href:"https://github.com/johnsoncodehk/volar",target:"_blank",rel:"noopener noreferrer"},ne=(0,r.Uk)("Volar"),re=(0,r.Uk)("，它为 Vue 3 提供了全面的 IDE 支持"),te=(0,r._)("h2",{id:"devtools-扩展",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#devtools-扩展"},"#"),(0,r.Uk)(" Devtools 扩展")],-1),ie=(0,r._)("p",null,"新版本目前处于测试阶段，目前只支持 Vue 3。Vuex 和 Router 的集成也在进行中。",-1),ae=(0,r.Uk)("Chrome："),se={href:"https://chrome.google.com/webstore/detail/vuejs-devtools/ljjemllljcmogpfapbkkighbhhppjdbg?hl=en",target:"_blank",rel:"noopener noreferrer"},oe=(0,r.Uk)("从 Chrome web 商店中安装"),ue=(0,r.Uk)("Firefox："),ce={href:"https://github.com/vuejs/vue-devtools/releases/tag/v6.0.0-beta.20",target:"_blank",rel:"noopener noreferrer"},he=(0,r.Uk)("下载签名扩展"),pe=(0,r.Uk)(" (assets 下的 "),de=(0,r._)("code",null,".xpi",-1),ge=(0,r.Uk)(" 文件)"),ve=(0,r._)("h2",{id:"项目引入",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#项目引入"},"#"),(0,r.Uk)(" 项目引入")],-1),me=(0,r._)("p",null,"如果你想要在一个新项目里快速尝试 Vue 3：",-1),_e=(0,r._)("li",null,[(0,r._)("p",null,[(0,r.Uk)("通过 CDN："),(0,r._)("code",null,'<script src="https://unpkg.com/vue@next"><\/script>')])],-1),fe=(0,r.Uk)("通过脚手架 "),be={href:"https://github.com/vitejs/vite",target:"_blank",rel:"noopener noreferrer"},ke=(0,r.Uk)("Vite"),Ue=(0,r.Uk)("："),xe=(0,r.uE)('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> init vite hello-vue3 -- --template vue \n<span class="token comment"># 或 ## Vue 2 的项目或者库升级到 Vue 3</span>\n<span class="token function">yarn</span> create vite hello-vue3 --template vue\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',1),je=(0,r.Uk)("通过脚手架 "),ye={href:"https://cli.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},We=(0,r.Uk)("vue-cli"),Ve=(0,r.Uk)("："),Se=(0,r.uE)('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> -g @vue/cli \n<span class="token comment"># 或 </span>\n<span class="token function">yarn</span> global <span class="token function">add</span> @vue/cli\nvue create hello-vue3\n<span class="token comment"># 选择 vue 3 preset</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>',1),Ee=(0,r._)("h2",{id:"vue-2升级vue-3",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#vue-2升级vue-3"},"#"),(0,r.Uk)(" Vue 2升级Vue 3")],-1),we=(0,r.Uk)("如果你打算要将一个基于 Vue 2 的项目或者库升级到 Vue 3，我们提供了一个与 Vue 2 API 兼容的 Vue 3 构建版本，详情见"),Le={href:"https://v3.cn.vuejs.org/guide/migration/migration-build.html",target:"_blank",rel:"noopener noreferrer"},Ce=(0,r.Uk)("用于迁移的构建版本"),Ae=(0,r.Uk)("。"),Ie=(0,r._)("h2",{id:"vue3新特性",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#vue3新特性"},"#"),(0,r.Uk)(" Vue3新特性")],-1),qe={href:"https://v3.cn.vuejs.org/guide/composition-api-introduction.html",target:"_blank",rel:"noopener noreferrer"},Pe=(0,r.Uk)("组合式 API"),Te={href:"https://v3.cn.vuejs.org/guide/teleport.html",target:"_blank",rel:"noopener noreferrer"},De=(0,r.Uk)("Teleport"),Be={href:"https://v3.cn.vuejs.org/guide/migration/fragments.html",target:"_blank",rel:"noopener noreferrer"},Fe=(0,r.Uk)("片段"),Re={href:"https://v3.cn.vuejs.org/guide/component-custom-events.html",target:"_blank",rel:"noopener noreferrer"},Ge=(0,r.Uk)("触发组件选项"),Ne={href:"https://github.com/vuejs/vue-next/tree/master/packages/runtime-core",target:"_blank",rel:"noopener noreferrer"},Oe=(0,r.Uk)("来自 "),ze=(0,r._)("code",null,"@vue/runtime-core",-1),He=(0,r.Uk)(" 的 "),Je=(0,r._)("code",null,"createRenderer",-1),Ze=(0,r.Uk)(" API"),Me=(0,r.Uk)("，用于创建自定义渲染器"),Xe={href:"https://v3.cn.vuejs.org/api/sfc-script-setup.html",target:"_blank",rel:"noopener noreferrer"},Ye=(0,r.Uk)("单文件组件组合式 API 语法糖 (``)"),Ke={href:"https://v3.cn.vuejs.org/api/sfc-style.html#%E7%8A%B6%E6%80%81%E9%A9%B1%E5%8A%A8%E7%9A%84%E5%8A%A8%E6%80%81-css",target:"_blank",rel:"noopener noreferrer"},Qe=(0,r.Uk)("单文件组件状态驱动的 CSS 变量 (`` 中的 "),$e=(0,r._)("code",null,"v-bind",-1),el=(0,r.Uk)(")"),ll={href:"https://github.com/vuejs/rfcs/blob/master/active-rfcs/0023-scoped-styles-changes.md",target:"_blank",rel:"noopener noreferrer"},nl=(0,r.Uk)("SFC `` 现在可以包含全局规则或只针对插槽内容的规则"),rl={href:"https://v3.cn.vuejs.org/guide/migration/suspense.html",target:"_blank",rel:"noopener noreferrer"},tl=(0,r.Uk)("Suspense"),il=(0,r.Uk)(" 实验性"),al=(0,r._)("h2",{id:"非兼容的变更",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#非兼容的变更"},"#"),(0,r.Uk)(" 非兼容的变更")],-1),sl={href:"https://v3.cn.vuejs.org/guide/migration/global-api.html",target:"_blank",rel:"noopener noreferrer"},ol=(0,r.Uk)("全局 Vue API 已更改为使用应用程序实例"),ul={href:"https://v3.cn.vuejs.org/guide/migration/global-api-treeshaking.html",target:"_blank",rel:"noopener noreferrer"},cl=(0,r.Uk)("全局和内部 API 已经被重构为支持 tree-shake"),hl=(0,r._)("h2",{id:"模板指令",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#模板指令"},"#"),(0,r.Uk)(" 模板指令")],-1),pl={href:"https://v3.cn.vuejs.org/guide/migration/v-model.html",target:"_blank",rel:"noopener noreferrer"},dl=(0,r.Uk)("组件上 "),gl=(0,r._)("code",null,"v-model",-1),vl=(0,r.Uk)(" 用法已更改，以替换 "),ml=(0,r._)("code",null,"v-bind.sync",-1),_l=(0,r._)("li",null,[(0,r._)("code",null,"<template v-for>"),(0,r.Uk)(" 和非 "),(0,r._)("code",null,"v-for"),(0,r.Uk)(" 节点上的 "),(0,r._)("code",null,"key"),(0,r.Uk)(" 用法已更改")],-1),fl={href:"https://v3.cn.vuejs.org/guide/migration/v-if-v-for.html",target:"_blank",rel:"noopener noreferrer"},bl=(0,r.Uk)("在同一元素上使用的 "),kl=(0,r._)("code",null,"v-if",-1),Ul=(0,r.Uk)(" 和 "),xl=(0,r._)("code",null,"v-for",-1),jl=(0,r.Uk)(" 优先级已更改"),yl={href:"https://v3.cn.vuejs.org/guide/migration/v-bind.html",target:"_blank",rel:"noopener noreferrer"},Wl=(0,r._)("code",null,'v-bind="object"',-1),Vl=(0,r.Uk)(" 现在排序敏感"),Sl={href:"https://v3.cn.vuejs.org/guide/migration/v-on-native-modifier-removed.html",target:"_blank",rel:"noopener noreferrer"},El=(0,r._)("code",null,"v-on:event.native",-1),wl=(0,r.Uk)(" 修饰符已移除"),Ll={href:"https://v3.cn.vuejs.org/guide/migration/array-refs.html",target:"_blank",rel:"noopener noreferrer"},Cl=(0,r._)("code",null,"v-for",-1),Al=(0,r.Uk)(" 中的 "),Il=(0,r._)("code",null,"ref",-1),ql=(0,r.Uk)(" 不再注册 ref 数组"),Pl=(0,r._)("h2",{id:"组件",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#组件"},"#"),(0,r.Uk)(" 组件")],-1),Tl={href:"https://v3.cn.vuejs.org/guide/migration/functional-components.html",target:"_blank",rel:"noopener noreferrer"},Dl=(0,r.Uk)("只能使用普通函数创建函数式组件"),Bl=(0,r._)("li",null,"[`functional` attribute 在单文件组件 (SFC) 的 `",-1),Fl={href:"https://v3.cn.vuejs.org/guide/migration/async-components.html",target:"_blank",rel:"noopener noreferrer"},Rl=(0,r.Uk)("异步组件现在需要使用 "),Gl=(0,r._)("code",null,"defineAsyncComponent",-1),Nl=(0,r.Uk)(" 方法来创建"),Ol={href:"https://v3.cn.vuejs.org/guide/migration/emits-option.html",target:"_blank",rel:"noopener noreferrer"},zl=(0,r.Uk)("组件事件现在需要在 "),Hl=(0,r._)("code",null,"emits",-1),Jl=(0,r.Uk)(" 选项中声明"),Zl=(0,r.uE)('<h2 id="typescript学习" tabindex="-1"><a class="header-anchor" href="#typescript学习">#</a> TypeScript学习</h2><ul><li>http://ts.xcatliu.com</li><li>https://typescript.bootcss.com</li></ul><h2 id="vue-router加载组件的方法" tabindex="-1"><a class="header-anchor" href="#vue-router加载组件的方法">#</a> vue-router加载组件的方法</h2><h3 id="import加载" tabindex="-1"><a class="header-anchor" href="#import加载">#</a> import加载</h3><ol><li>一般方法</li></ol><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>import Login from &#39;../views/Login.vue&#39;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="2"><li>按需加载</li></ol><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>const Login= () =&gt; import(&quot;../views/Login.vue&quot;)\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="require加载" tabindex="-1"><a class="header-anchor" href="#require加载">#</a> require加载</h3><ol><li>非按需加载（注意需要加上.default）</li></ol><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>const Login= require(&quot;../views/Login.vue&quot;).default\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="2"><li>按需加载</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const Login= (resolve) =&gt; {\n\trequire([&quot;../views/Login.vue&quot;],resolve)\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',13),Ml={};var Xl=(0,n(3744).Z)(Ml,[["render",function(e,l){const n=(0,r.up)("OutboundLink");return(0,r.wg)(),(0,r.iD)(r.HY,null,[t,(0,r._)("div",i,[a,(0,r._)("p",null,[s,(0,r._)("a",o,[u,(0,r.Wm)(n)]),c])]),h,(0,r._)("table",null,[p,(0,r._)("tbody",null,[(0,r._)("tr",null,[d,(0,r._)("td",g,[(0,r._)("a",v,[m,(0,r.Wm)(n)])]),(0,r._)("td",_,[(0,r._)("a",f,[b,(0,r.Wm)(n)])]),(0,r._)("td",k,[(0,r._)("a",U,[x,(0,r.Wm)(n)])])]),(0,r._)("tr",null,[j,(0,r._)("td",y,[(0,r._)("a",W,[V,(0,r.Wm)(n)])]),(0,r._)("td",S,[(0,r._)("a",E,[w,(0,r.Wm)(n)])]),(0,r._)("td",L,[(0,r._)("a",C,[A,(0,r.Wm)(n)])])]),(0,r._)("tr",null,[I,(0,r._)("td",q,[(0,r._)("a",P,[T,(0,r.Wm)(n)])]),(0,r._)("td",D,[(0,r._)("a",B,[F,(0,r.Wm)(n)])]),(0,r._)("td",R,[(0,r._)("a",G,[N,(0,r.Wm)(n)])])])])]),O,(0,r._)("ul",null,[(0,r._)("li",null,[(0,r._)("a",z,[H,(0,r.Wm)(n)]),J]),(0,r._)("li",null,[(0,r._)("a",Z,[M,(0,r.Wm)(n)]),X])]),Y,(0,r._)("p",null,[K,(0,r._)("a",Q,[$,(0,r.Wm)(n)]),ee,(0,r._)("a",le,[ne,(0,r.Wm)(n)]),re]),te,ie,(0,r._)("ul",null,[(0,r._)("li",null,[ae,(0,r._)("a",se,[oe,(0,r.Wm)(n)])]),(0,r._)("li",null,[ue,(0,r._)("a",ce,[he,(0,r.Wm)(n)]),pe,de,ge])]),ve,me,(0,r._)("ul",null,[_e,(0,r._)("li",null,[(0,r._)("p",null,[fe,(0,r._)("a",be,[ke,(0,r.Wm)(n)]),Ue]),xe]),(0,r._)("li",null,[(0,r._)("p",null,[je,(0,r._)("a",ye,[We,(0,r.Wm)(n)]),Ve]),Se])]),Ee,(0,r._)("p",null,[we,(0,r._)("a",Le,[Ce,(0,r.Wm)(n)]),Ae]),Ie,(0,r._)("ul",null,[(0,r._)("li",null,[(0,r._)("a",qe,[Pe,(0,r.Wm)(n)])]),(0,r._)("li",null,[(0,r._)("a",Te,[De,(0,r.Wm)(n)])]),(0,r._)("li",null,[(0,r._)("a",Be,[Fe,(0,r.Wm)(n)])]),(0,r._)("li",null,[(0,r._)("a",Re,[Ge,(0,r.Wm)(n)])]),(0,r._)("li",null,[(0,r._)("a",Ne,[Oe,ze,He,Je,Ze,(0,r.Wm)(n)]),Me]),(0,r._)("li",null,[(0,r._)("a",Xe,[Ye,(0,r.Wm)(n)])]),(0,r._)("li",null,[(0,r._)("a",Ke,[Qe,$e,el,(0,r.Wm)(n)])]),(0,r._)("li",null,[(0,r._)("a",ll,[nl,(0,r.Wm)(n)])]),(0,r._)("li",null,[(0,r._)("a",rl,[tl,(0,r.Wm)(n)]),il])]),al,(0,r._)("ul",null,[(0,r._)("li",null,[(0,r._)("a",sl,[ol,(0,r.Wm)(n)])]),(0,r._)("li",null,[(0,r._)("a",ul,[cl,(0,r.Wm)(n)])])]),hl,(0,r._)("ul",null,[(0,r._)("li",null,[(0,r._)("a",pl,[dl,gl,vl,ml,(0,r.Wm)(n)])]),_l,(0,r._)("li",null,[(0,r._)("a",fl,[bl,kl,Ul,xl,jl,(0,r.Wm)(n)])]),(0,r._)("li",null,[(0,r._)("a",yl,[Wl,Vl,(0,r.Wm)(n)])]),(0,r._)("li",null,[(0,r._)("a",Sl,[El,wl,(0,r.Wm)(n)])]),(0,r._)("li",null,[(0,r._)("a",Ll,[Cl,Al,Il,ql,(0,r.Wm)(n)])])]),Pl,(0,r._)("ul",null,[(0,r._)("li",null,[(0,r._)("a",Tl,[Dl,(0,r.Wm)(n)])]),Bl,(0,r._)("li",null,[(0,r._)("a",Fl,[Rl,Gl,Nl,(0,r.Wm)(n)])]),(0,r._)("li",null,[(0,r._)("a",Ol,[zl,Hl,Jl,(0,r.Wm)(n)])])]),Zl],64)}]])},3744:function(e,l){l.Z=(e,l)=>{const n=e.__vccOpts||e;for(const[e,r]of l)n[e]=r;return n}}}]);
"use strict";(self.webpackChunkmicro_design_admin=self.webpackChunkmicro_design_admin||[]).push([[3257],{8864:function(n,s,a){a.r(s),a.d(s,{data:function(){return e}});const e={key:"v-bb6d310c",path:"/pages/standard/IOS.html",title:"iOS规范",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"命名规范",slug:"命名规范",children:[]},{level:2,title:"目录规范",slug:"目录规范",children:[]},{level:2,title:"编码规范",slug:"编码规范",children:[]}],filePathRelative:"pages/standard/IOS.md",git:{updatedTime:1637570873e3,contributors:[{name:"luyb",email:"luyb@xunzhaotech.com",commits:1}]}}},2091:function(n,s,a){a.r(s),a.d(s,{default:function(){return o}});const e=(0,a(6252).uE)('<h1 id="ios规范" tabindex="-1"><a class="header-anchor" href="#ios规范">#</a> iOS规范</h1><h2 id="命名规范" tabindex="-1"><a class="header-anchor" href="#命名规范">#</a> 命名规范</h2><blockquote><p>文件/文件夹命名</p></blockquote><p>采用首字母大写的大驼峰命名法 <code>(Camel-Case)</code></p><p>如：<code>LoginViewController.swift</code></p><blockquote><p>函数命名</p></blockquote><p>采用首字母小写的小驼峰命名法<code> (Camel-Case)</code></p><p>如：<code>func myFunc() {}</code></p><blockquote><p>变量命名</p></blockquote><p>采用首字母小写的小驼峰命名法 <code>(Camel-Case)</code> ，使变量名尽量可以推测其用途属性具有描述性，切勿使用拼音命名</p><p>正确示范：<code>let puppy = Puppy()</code></p><p>错误示范：<code>let xiaoGou = Puppy()</code></p><blockquote><p>图片资源文件命名</p></blockquote><p>图片资源命名方式，以功能为组织形式，有利于查看资源文件。</p><p><strong>命名原则：</strong></p><ol><li><p>采用单词全拼，或者大家公认无岐义的缩写（比如：<code>nav</code>，<code>bg</code>，<code>btn</code>等）</p></li><li><p>采用下划线进行连接</p></li><li><p>采用 “模块+功能” 命名法，模块分为公共模块、私有模块。公共模块主要包括统一的背</p><p>景，导航条，标签，公共的按钮背景，公共的默认图等等；私有模块主要根据 <code>APP</code> 的业务</p><p>功能模块划分，比如用户中心，消息中心等</p></li><li><p>背景图采用以 <code>bg</code> 作为前缀</p></li><li><p>普通状态的图片以 <code>normal</code> 作为后缀，高亮状态的图片以 <code>selected</code> 作为后缀</p></li></ol><p><strong>命名示例：</strong></p><p>导航条背影图片：<code>bg_nav_bar@2x.png</code></p><p>导航返回按钮：<code>nav_back_normal@2x.png</code>，<code>nav_back_selected@2x.png</code></p><p>标签item图片：<code>tabbar_record_normal@2x.png</code>，<code>tabbar_record_selected@2x.png</code></p><h2 id="目录规范" tabindex="-1"><a class="header-anchor" href="#目录规范">#</a> 目录规范</h2><blockquote><p>整体结构：</p></blockquote><p><img src="/doc/ios_total_structure.png" alt="Image text"></p><blockquote><p>主要模块结构：</p></blockquote><p><img src="/doc/ios_main_structure.png" alt="Image text"></p><blockquote><p>子模块结构：</p></blockquote><p><img src="/doc/ios_sub_structure.png" alt="Image text"></p><h2 id="编码规范" tabindex="-1"><a class="header-anchor" href="#编码规范">#</a> 编码规范</h2><blockquote><p>方法声明规范</p></blockquote><ol><li>前括号提至方法后</li><li>同一模块功能代码写在一起</li><li>不同模块功能换行写</li><li>方法与方法之间需换行</li></ol><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code><span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">viewDidLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">viewDidLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n    <span class="token function">setupHeadView</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token function">setupTableView</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  \n    <span class="token function">getCellDatas</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">func</span> <span class="token function-definition function">setupHeadView</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\n<span class="token punctuation">}</span>\n\n<span class="token keyword">func</span> <span class="token function-definition function">setupTableView</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n<span class="token punctuation">}</span>\n\n<span class="token keyword">func</span> <span class="token function-definition function">getCellDatas</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><blockquote><p>空格规范</p></blockquote><ol><li>符号两边需留出空格。如 <code>=、&amp;&amp;、||</code> 等</li><li>冒号 <code>：</code> 只需在后面留出空格</li><li>采用四个空格进行缩进</li></ol><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code><span class="token keyword">func</span> <span class="token function-definition function">myFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> condition1 <span class="token operator">=</span> <span class="token boolean">true</span>\n    <span class="token keyword">let</span> condition2<span class="token punctuation">:</span> <span class="token class-name">Bool</span> <span class="token operator">=</span> <span class="token boolean">false</span>\n\n    <span class="token keyword">if</span> condition1 <span class="token operator">&amp;&amp;</span> condition2 <span class="token punctuation">{</span>\n        <span class="token comment">// do something...</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">if</span> condition1 <span class="token operator">||</span> condition2 <span class="token punctuation">{</span>\n        <span class="token comment">// do something...</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><blockquote><p>模块方法分类</p></blockquote><ol><li>使用 <code>extension</code> 对 <code>viewController</code> 进行分类</li><li>使用 <code>// MARK:- </code> 、<code>// TODO: - </code> 、<code>// FIXME: - </code> 进行标记</li></ol><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code><span class="token comment">// MARK: - Private Functions</span>\n<span class="token keyword">extension</span> <span class="token class-name">LoginViewController</span> <span class="token punctuation">{</span>\n    <span class="token comment">// TODO: - 用来表示待完成，或者待解决问题</span>\n  \t<span class="token comment">// FIXME: - 用来表示待解决的问题</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// MARK: - Action Functions</span>\n<span class="token keyword">extension</span> <span class="token class-name">LoginViewController</span> <span class="token punctuation">{</span>\n    \n<span class="token punctuation">}</span>\n\n<span class="token comment">// MARK: - xxx DataSource</span>\n<span class="token keyword">extension</span> <span class="token class-name">LoginViewController</span> <span class="token punctuation">{</span>\n    \n<span class="token punctuation">}</span>\n\n<span class="token comment">// MARK: - xxx Delegate</span>\n<span class="token keyword">extension</span> <span class="token class-name">LoginViewController</span> <span class="token punctuation">{</span>\n    \n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div>',37),p={};var o=(0,a(3744).Z)(p,[["render",function(n,s){return e}]])},3744:function(n,s){s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}}}]);
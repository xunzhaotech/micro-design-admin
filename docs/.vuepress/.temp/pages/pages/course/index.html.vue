<template><!--
 * @Author: xunzhaotech
 * @Email: luyb@xunzhaotech.com
 * @QQ: 1525572900
 * @LastEditors: xunzhaotech
-->
<h1 id="全栈攻略" tabindex="-1"><a class="header-anchor" href="#全栈攻略">#</a> 全栈攻略</h1>
<nav class="table-of-contents"><ul><li><RouterLink to="#前言">前言</RouterLink></li><li><RouterLink to="#ecmascript教程">ECMAScript教程</RouterLink></li><li><RouterLink to="#typescript教程">TypeScript教程</RouterLink><ul><li><RouterLink to="#线上运行">线上运行</RouterLink></li><li><RouterLink to="#数据类型">数据类型</RouterLink></li><li><RouterLink to="#装饰器">装饰器</RouterLink></li></ul></li><li><RouterLink to="#前端基础">前端基础</RouterLink></li><li><RouterLink to="#vue学习">Vue学习</RouterLink></li><li><RouterLink to="#react学习">React学习</RouterLink></li><li><RouterLink to="#angular学习">Angular学习</RouterLink></li><li><RouterLink to="#vscode插件">VSCode插件</RouterLink></li></ul></nav>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言">#</a> 前言</h2>
<p><strong>ECMAScript、JavaScript和TypeScript 到底是什么关系？</strong></p>
<blockquote>
<p>要讲清楚这个问题，需要回顾历史。1996 年 11 月，JavaScript 的创造者 Netscape 公司，决定将 JavaScript 提交给标准化组织 ECMA，希望这种语言能够成为国际标准。次年，ECMA 发布 262 号标准文件（ECMA-262）的第一版，规定了浏览器脚本语言的标准，并将这种语言称为 ECMAScript，这个版本就是 1.0 版。</p>
</blockquote>
<blockquote>
<p>该标准从一开始就是针对 JavaScript 语言制定的，但是之所以不叫 JavaScript，有两个原因。一是商标，Java 是 Sun 公司的商标，根据授权协议，只有 Netscape 公司可以合法地使用 JavaScript 这个名字，且 JavaScript 本身也已经被 Netscape 公司注册为商标。二是想体现这门语言的制定者是 ECMA，不是 Netscape，这样有利于保证这门语言的开放性和中立性。</p>
</blockquote>
<blockquote>
<p>因此，ECMAScript 和 JavaScript 的关系是，前者是后者的规格，后者是前者的一种实现（另外的 ECMAScript 方言还有 JScript 和 ActionScript）。日常场合，这两个词是可以互换的。</p>
</blockquote>
<p><strong>ES6 与 ECMAScript 2015 的关系</strong></p>
<blockquote>
<p>ECMAScript 2015（简称 ES2015）这个词，也是经常可以看到的。它与 ES6 是什么关系呢？</p>
</blockquote>
<blockquote>
<p>2011 年，ECMAScript 5.1 版发布后，就开始制定 6.0 版了。因此，ES6 这个词的原意，就是指 JavaScript 语言的下一个版本。</p>
</blockquote>
<blockquote>
<p>但是，因为这个版本引入的语法功能太多，而且制定过程当中，还有很多组织和个人不断提交新功能。事情很快就变得清楚了，不可能在一个版本里面包括所有将要引入的功能。常规的做法是先发布 6.0 版，过一段时间再发 6.1 版，然后是 6.2 版、6.3 版等等。</p>
</blockquote>
<blockquote>
<p>但是，标准的制定者不想这样做。他们想让标准的升级成为常规流程：任何人在任何时候，都可以向标准委员会提交新语法的提案，然后标准委员会每个月开一次会，评估这些提案是否可以接受，需要哪些改进。如果经过多次会议以后，一个提案足够成熟了，就可以正式进入标准了。这就是说，标准的版本升级成为了一个不断滚动的流程，每个月都会有变动。</p>
</blockquote>
<blockquote>
<p>标准委员会最终决定，标准在每年的 6 月份正式发布一次，作为当年的正式版本。接下来的时间，就在这个版本的基础上做改动，直到下一年的 6 月份，草案就自然变成了新一年的版本。这样一来，就不需要以前的版本号了，只要用年份标记就可以了。</p>
</blockquote>
<blockquote>
<p>ES6 的第一个版本，就这样在 2015 年 6 月发布了，正式名称就是《ECMAScript 2015 标准》（简称 ES2015）。2016 年 6 月，小幅修订的《ECMAScript 2016 标准》（简称 ES2016）如期发布，这个版本可以看作是 ES6.1 版，因为两者的差异非常小（只新增了数组实例的includes方法和指数运算符），基本上是同一个标准。根据计划，2017 年 6 月发布 ES2017 标准。</p>
</blockquote>
<blockquote>
<p>因此，ES6 既是一个历史名词，也是一个泛指，含义是 5.1 版以后的 JavaScript 的下一代标准，涵盖了 ES2015、ES2016、ES2017 等等，而 ES2015 则是正式名称，特指该年发布的正式版本的语言标准。本书中提到 ES6 的地方，一般是指 ES2015 标准，但有时也是泛指“下一代 JavaScript 语言”。</p>
</blockquote>
<h2 id="ecmascript教程" tabindex="-1"><a class="header-anchor" href="#ecmascript教程">#</a> ECMAScript教程</h2>
<ul>
<li><a href="https://es6.ruanyifeng.com/#docs/intro" target="_blank" rel="noopener noreferrer">ECMAScript 6 入门<OutboundLink/></a></li>
<li><a href="https://yuchengkai.cn/docs/frontend/#%E5%86%85%E7%BD%AE%E7%B1%BB%E5%9E%8B" target="_blank" rel="noopener noreferrer">前端进阶之道<OutboundLink/></a></li>
<li><a href="https://jsgodroad.com/interview/" target="_blank" rel="noopener noreferrer">前端面试资料<OutboundLink/></a></li>
<li><a href="https://my.oschina.net/yuche/blog/3027423" target="_blank" rel="noopener noreferrer">程序多端框架<OutboundLink/></a></li>
</ul>
<h2 id="typescript教程" tabindex="-1"><a class="header-anchor" href="#typescript教程">#</a> TypeScript教程</h2>
<ul>
<li><a href="https://www.typescriptlang.org/docs/handbook/basic-types.html" target="_blank" rel="noopener noreferrer">TypeScript 官方手册<OutboundLink/></a></li>
<li><a href="https://www.tslang.cn/docs/handbook/classes.html" target="_blank" rel="noopener noreferrer">TypeScript 非官方中文网 <OutboundLink/></a></li>
</ul>
<h3 id="线上运行" tabindex="-1"><a class="header-anchor" href="#线上运行">#</a> 线上运行</h3>
<ul>
<li><a href="https://www.typescriptlang.org/zh/play?#code/PTAEiJrQ5+MU3NAYlUAqBPADgUwMoGMBOBLFAF1EA47QBTlAudUBh-gKBFEE34wejNAAOUCo5QTb9ADeUAXjQbPlAaP6BMxSqAwJUDVcoBiVQGbagAzlEqTLgLFAIW6BFf0CbXoCAGGnTCAKg0D3yoFO5E4CDNQNBygSDlAs56BO00Dw+oH95QBSugYO1AWP-79oUAFpQdkBYOUAseUAWD0B5dUBvuUBVeUAcOUB-SNU5BXRsfCJQVUAGdXtdegCgtkBleUAYrLSlTOJAW+jAVZtANz1AODlAaojALrkJXPzfIvZXQDi5QGlbQFXo4MAYFUqMlVABQEXowHxzQHylQF+A1UBMm0BG710aLAB7ADsAZ2IAQ32AUQAPE4BbFAAbNAA1E-wTgCNH0ABeUAAiAASaHu912oAA6rscPcACZ-HYHQ67R4AOlBAHMABRnK63B7PV54D6PACUenopkAnQ6Ab8VAFBy9lUoEAOASALk9ANHygFwCUCANCNmYAG00A36kcqgmQBhcoBjyMAL2aALE1AM6K-RqgAAo1SAQ-lAPYG2nh9G5gFAAwAESoATNIYgGy5QAXNoApxIagBQ5QAA+oBpzTcVEALqZscgUVSANDlADKugF+EwB6Ov0uLo-EA" target="_blank" rel="noopener noreferrer">TypeScript Playground<OutboundLink/></a></li>
</ul>
<h3 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型">#</a> 数据类型</h3>
<ul>
<li>基本数据类型和引用数据类型访问</li>
</ul>
<blockquote>
<p>基本类型值：存在栈中，按值访问，操作的是他们实际保存的值；</p>
<p>引用类型值：栈中保存地址，堆中保存值，按引用访问，当查询时，我们需要先从栈中读取内存地址，然后再顺藤摸瓜地找到保存在堆内存中的值；</p>
</blockquote>
<ul>
<li>基础类型</li>
</ul>
<table>
<thead>
<tr>
<th>数据类型</th>
<th style="text-align:left">关键字</th>
<th style="text-align:center">TS</th>
<th style="text-align:center">ES5</th>
<th style="text-align:center">ES6</th>
<th style="text-align:center">ES7</th>
<th style="text-align:center">ES8</th>
<th style="text-align:center">ES9</th>
<th style="text-align:center">ES10</th>
<th style="text-align:center">ES11</th>
<th style="text-align:left">说明</th>
<th>代码</th>
</tr>
</thead>
<tbody>
<tr>
<td>字符串类型</td>
<td style="text-align:left">string(基本)</td>
<td style="text-align:center">Y</td>
<td style="text-align:center">Y</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:left">一个字符系列，使用单引号（<strong>'</strong>）或双引号（<strong>&quot;</strong>）来表示字符串类型。反引号来定义多行文本和内嵌表达式。</td>
<td><code>let name: string = &quot;KUAIZHIDAO&quot;; let years: number = 6; let words: string = 您好，今年是 ${ name } 发布 ${ years + 1} 周年;</code></td>
</tr>
<tr>
<td>数字类型</td>
<td style="text-align:left">number(基本)</td>
<td style="text-align:center">Y</td>
<td style="text-align:center">Y</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:left">双精度 64 位浮点值。它可以用来表示整数和分数。用于任何类型的数字，整数或者浮点数</td>
<td><code>let binaryLiteral: number = 0b1010; // 二进制 let octalLiteral: number = 0o744;    // 八进制 let decLiteral: number = 6;    // 十进制 let hexLiteral: number = 0xf00d;    // 十六进制</code></td>
</tr>
<tr>
<td>布尔类型</td>
<td style="text-align:left">boolean(基本)</td>
<td style="text-align:center">Y</td>
<td style="text-align:center">Y</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:left">表示逻辑值：用于 true 和 false</td>
<td><code>let flag: boolean = true;</code></td>
</tr>
<tr>
<td>undefined</td>
<td style="text-align:left">undefined(基本)</td>
<td style="text-align:center">Y</td>
<td style="text-align:center">Y</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:left">用于初始化变量为一个未定义的值,用于未定义的值 ，只有一个 undefined 值的独立类型</td>
<td></td>
</tr>
<tr>
<td>null</td>
<td style="text-align:left">null(基本)</td>
<td style="text-align:center">Y</td>
<td style="text-align:center">Y</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:left">表示对象值缺失,用于未知的值，只有一个 null 值的独立类型,</td>
<td><code>const object = null</code></td>
</tr>
<tr>
<td>Symbol</td>
<td style="text-align:left">symbol(基本)</td>
<td style="text-align:center">/</td>
<td style="text-align:center">N</td>
<td style="text-align:center">Y</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:left">用于唯一的标识符</td>
<td><code>let name;console.log(name)</code></td>
</tr>
<tr>
<td>Object</td>
<td style="text-align:left">object(引用)</td>
<td style="text-align:center">/</td>
<td style="text-align:center">Y</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:left">用于更复杂的数据结构</td>
<td>在ES5中，除去基本数据类型，其他的返回都是object</td>
</tr>
<tr>
<td>Function</td>
<td style="text-align:left">function(函数)</td>
<td style="text-align:center">/</td>
<td style="text-align:center">Y</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:left">函数是一组一起执行一个任务的语句，属于object</td>
<td></td>
</tr>
<tr>
<td>数组类型</td>
<td style="text-align:left">array(引用)</td>
<td style="text-align:center">Y</td>
<td style="text-align:center">Y</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:left">项目中常见的写法，需要声明<code>列表数据</code>类型,声明变量为数组。</td>
<td><code>// 在元素类型后面加上[] let arr: number[] = [1, 2];  // 或者使用数组泛型 let arr: Array&lt;number&gt; = [1, 2];</code></td>
</tr>
<tr>
<td>枚举</td>
<td style="text-align:left">enum(基本)</td>
<td style="text-align:center">Y</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:left">枚举类型用于定义数值集合,提高代码可维护性，统一维护某些枚举值，避免 <code>status === 1</code>这种魔法数字。<code>status === workEnum.TEACHERJ</code>这样写，方便代码维护。</td>
<td><code>enum Color {Red, Green, Blue}; let c: Color = Color.Blue; console.log(c);    // 输出 2</code></td>
</tr>
<tr>
<td>任意类型</td>
<td style="text-align:left">any(基本)</td>
<td style="text-align:center">Y</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:left">任意值是 TypeScript 针对编程时类型不明确的变量使用的一种数据类型</td>
<td><code>let x: any = 1;    // 数字类型 x = 'I am who I am';    // 字符串类型 x = false;    // 布尔类型</code></td>
</tr>
<tr>
<td>void</td>
<td style="text-align:left">void(常用)</td>
<td style="text-align:center">Y</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:left">返回值类型，没有返回值的函数: void</td>
<td><code>function hello(): void {     alert(&quot;Hello Kuaizhidao&quot;); }</code></td>
</tr>
<tr>
<td>元组</td>
<td style="text-align:left">tuple(引用)</td>
<td style="text-align:center">Y</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:left">元组和数组类似，但是类型注解时会不一样，赋值的类型、位置、个数需要和定义（声明）的类型、位置、个数一致。元组类型用来表示已知元素数量和类型的数组，各元素的类型不必相同，对应位置的类型需要相同。</td>
<td><code>let x: [string, number]; x = ['kuaizhidao', 6;    // 运行正常 x = [6, 'kuaizhidao'];    // 报错 console.log(x[0]);    // 输出 kuaizhidao</code></td>
</tr>
<tr>
<td>never</td>
<td style="text-align:left">never(基本)</td>
<td style="text-align:center">Y</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:center">/</td>
<td style="text-align:left">函数是永远也执行不完的，就可以定义返回值为 never，它是其它类型（包括 null 和 undefined）的子类型，代表从不会出现的值。比如抛出异常的函数,</td>
<td><code>function error(message: string): never {     throw new Error(message); }</code></td>
</tr>
</tbody>
</table>
<ul>
<li>基本数据类型和引用数据类型复制</li>
</ul>
<blockquote>
<p>基本类型变量的传递(复制)：（<code>互不干涉</code>）
从一个变量向一个变量复制时，会在栈中创建一个新值，然后把值复制到为新变量分配的位置上，改变源数据不会影响到新的变量；</p>
<p>引用类型变量的传递(浅复制)：（<code>影响值</code>）
复制的是存储在栈中的指针，将指针复制到栈中未新变量分配的空间中，而这个指针副本和原指针执行存储在堆中的同一个对象，复制操作结束后，两个变量实际上将引用同一个对象；因此改变其中的一个，将影响另一个；</p>
</blockquote>
<ul>
<li>typeof 运算符可以查看变量的类型</li>
</ul>
<blockquote>
<p>两种形式：typeof x 或者 typeof(x)。</p>
<p>返回的类型的字符串，比如 &quot;string&quot;。</p>
<p>null 返回 &quot;object&quot; —— 这是语言中的一个错误，实际上它并不是一个对象</p>
<p>Symbol 返回&quot;function&quot;</p>
<p>一般object建议用instanceof来判断类型</p>
</blockquote>
<ul>
<li>类型转换</li>
</ul>
<blockquote>
<p>undefined转换NaN</p>
<p>null转换0</p>
<p>true和false转换为1和0</p>
<p>string转换(字符串开始和末尾的空白会被移除，剩下的如果是空字符串，结果为 0，否则 —— 从字符串中读出数字。错误返回 NaN)</p>
</blockquote>
<ul>
<li>
<p>转换场景及案例</p>
<p>JS转换包括显式和隐式转换，下面列入一些使用的场景供大家参考。</p>
<ul>
<li>使用Number()显示转换</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">'123'</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// string</span>
  <span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token function">Number</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// number</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul>
<li>使用算术操作符<code>+</code></li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">'123'</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// string</span>
<span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token operator">+</span>str<span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// number</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str <span class="token operator">+</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// '1234'，字符串拼接</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul>
<li>使用算术操作符<code>/</code></li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'6'</span><span class="token operator">/</span><span class="token string">'3'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul>
<li>使用位运算符<code>~~</code></li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token operator">~</span><span class="token operator">~</span><span class="token string">'123'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// number</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul>
<li>转换为 string 类型</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>  显示转换：String<span class="token punctuation">(</span><span class="token punctuation">)</span>
  隐式转化：<span class="token string">'hello'</span> + <span class="token number">123</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul>
<li>转换为 boolean 类型</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>  假值，比如 <span class="token number">0</span>、空的字符串、null、undefined 和 NaN 变成 false。
  其他值变成 true。<span class="token string">'0'</span>,<span class="token punctuation">[</span><span class="token punctuation">]</span>,<span class="token string">' '</span><span class="token punctuation">(</span>空格，属于非空的字符串<span class="token punctuation">)</span>----true
  操作符：Boolean<span class="token punctuation">(</span><span class="token punctuation">)</span>
  操作符：<span class="token operator">!</span><span class="token operator">!</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul>
<li>场景案例</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token string">""</span> <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// "10"</span>
    <span class="token string">""</span> <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// -1</span>
    <span class="token boolean">true</span> <span class="token operator">+</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
    <span class="token number">6</span> <span class="token operator">/</span> <span class="token string">"3"</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
    <span class="token string">"2"</span> <span class="token operator">*</span> <span class="token string">"3"</span><span class="token punctuation">;</span> <span class="token comment">// 6</span>
    <span class="token number">4</span> <span class="token operator">+</span> <span class="token number">5</span> <span class="token operator">+</span> <span class="token string">"px"</span><span class="token punctuation">;</span> <span class="token comment">// "45px"</span>
    <span class="token string">"$"</span> <span class="token operator">+</span> <span class="token number">4</span> <span class="token operator">+</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token comment">// "$45"</span>
    <span class="token string">"4"</span> <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
    <span class="token string">"4px"</span> <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// NaN</span>
    <span class="token number">7</span> <span class="token operator">/</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// Infinity</span>
    <span class="token string">"  -9\n"</span> <span class="token operator">+</span> <span class="token number">5</span><span class="token punctuation">;</span>
    <span class="token string">"  -9\n"</span> <span class="token operator">-</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token comment">// "  -9</span>
                   <span class="token number">5</span>"
    <span class="token string">"-4\t"</span><span class="token operator">+</span><span class="token number">6</span><span class="token punctuation">;</span> <span class="token comment">// "4 6"</span>
    <span class="token keyword">null</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 0</span>
    <span class="token keyword">undefined</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// NaN</span>
    <span class="token operator">!</span><span class="token operator">!</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>   <span class="token comment">// true</span>
    <span class="token operator">!</span><span class="token operator">!</span><span class="token string">''</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
    <span class="token operator">!</span><span class="token operator">!</span><span class="token string">' '</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div></li>
</ul>
<h3 id="装饰器" tabindex="-1"><a class="header-anchor" href="#装饰器">#</a> 装饰器</h3>
<p>装饰器是最新的 ECMA 中的一个提案，是一种与类（class）相关的语法，用来注释或修改类和类方法。装饰器在 Python 和 Java 等语言中也被大量使用。装饰器是实现 AOP（面向切面）编程的一种重要方式。</p>
<h2 id="前端基础" tabindex="-1"><a class="header-anchor" href="#前端基础">#</a> 前端基础</h2>
<ul>
<li>如何通过 n 或者 nvm 管理 node 和 npm 版本</li>
<li>使用lerna + yarn （workspace） 管理你的应用</li>
<li>使用 cgr 等管理你的 npm/ yarn 的 源（registry) // 其实也可 npm config set直接撸</li>
<li>使用 scoop 快速安装 npm/yarn 等开发者工具</li>
</ul>
<h2 id="vue学习" tabindex="-1"><a class="header-anchor" href="#vue学习">#</a> Vue学习</h2>
<ul>
<li>新版脚手架安装</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> -g @vue/cli
<span class="token comment"># OR</span>
<span class="token function">yarn</span> global <span class="token function">add</span> @vue/cli
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul>
<li>旧版脚手架</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> global <span class="token function">add</span> vue/cli
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul>
<li>项目创建</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>vue create my-project
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul>
<li>UI创建</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>vue ui
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul>
<li>安装依赖</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">install</span>
<span class="token comment"># OR</span>
<span class="token function">npm</span> install<span class="token punctuation">(</span>npm i<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul>
<li>项目启动</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> run serve
<span class="token comment"># OR</span>
<span class="token function">npm</span> run serve
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul>
<li>浏览器访问</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>  App running at:
  - Local:   http://localhost:8080/
  - Network: http://192.168.50.84:8080/
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul>
<li>参考文档
<ul>
<li><a href="https://cli.vuejs.org" target="_blank" rel="noopener noreferrer">vue-cli documentation.<OutboundLink/></a></li>
<li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener noreferrer">babel<OutboundLink/></a></li>
<li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener noreferrer">eslint<OutboundLink/></a></li>
<li><a href="https://router.vuejs.org" target="_blank" rel="noopener noreferrer">vue-router<OutboundLink/></a></li>
<li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener noreferrer">vuex<OutboundLink/></a></li>
<li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener noreferrer">vue-devtools<OutboundLink/></a></li>
<li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener noreferrer">vue-loader<OutboundLink/></a></li>
<li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener noreferrer">awesome-vue<OutboundLink/></a></li>
</ul>
</li>
</ul>
<h2 id="react学习" tabindex="-1"><a class="header-anchor" href="#react学习">#</a> React学习</h2>
<ul>
<li><a href="https://xiaochen1024.com/" target="_blank" rel="noopener noreferrer">React<OutboundLink/></a></li>
<li><a href="">Redux</a></li>
</ul>
<h2 id="angular学习" tabindex="-1"><a class="header-anchor" href="#angular学习">#</a> Angular学习</h2>
<h2 id="vscode插件" tabindex="-1"><a class="header-anchor" href="#vscode插件">#</a> VSCode插件</h2>
<ul>
<li><a href="vscode">Volar</a></li>
<li>[Vetur]</li>
</ul>
</template>

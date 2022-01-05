"use strict";(self.webpackChunkmicro_design=self.webpackChunkmicro_design||[]).push([[9384],{9472:function(n,s,a){a.r(s),a.d(s,{data:function(){return e}});const e={key:"v-aaf26d4a",path:"/pages/videos/%E6%B7%B7%E5%90%88APP%E6%89%93%E5%8C%85.html",title:"技术文档",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"App打包环境配置",slug:"app打包环境配置",children:[]},{level:2,title:"IOS打包",slug:"ios打包",children:[{level:3,title:"IOS测试版打包",slug:"ios测试版打包",children:[]},{level:3,title:"IOS正式版打包",slug:"ios正式版打包",children:[]}]},{level:2,title:"安卓打包",slug:"安卓打包",children:[]},{level:2,title:"webpack静态模块打包配置",slug:"webpack静态模块打包配置",children:[{level:3,title:"核心概念",slug:"核心概念",children:[]},{level:3,title:"node运行命令",slug:"node运行命令",children:[]}]},{level:2,title:"tabbar适配 iPhoneX以上机型",slug:"tabbar适配-iphonex以上机型",children:[]},{level:2,title:"npm发布组件",slug:"npm发布组件",children:[]}],filePathRelative:"pages/videos/混合APP打包.md",git:{updatedTime:1636093309e3,contributors:[{name:"luyb",email:"luyb@xunzhaotech.com",commits:1}]}}},4954:function(n,s,a){a.r(s),a.d(s,{default:function(){return r}});var e=a(6252);const l=(0,e.uE)('<h1 id="技术文档" tabindex="-1"><a class="header-anchor" href="#技术文档">#</a> 技术文档</h1><h2 id="app打包环境配置" tabindex="-1"><a class="header-anchor" href="#app打包环境配置">#</a> App打包环境配置</h2><ul><li>环境配置：HBuilder X编译器中登录账号</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>账号：XXXXX\n密码：XXXXX\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>manifest.json配置文件中App图标先上传好，自动生成App图标</li></ul><p><img src="/doc/img15.png" alt="Image text"></p><ul><li>manifest.json配置文件中App启动页面配置，安卓启动图片设置上传好</li></ul><p><img src="/doc/img16.png" alt="Image text"></p><h2 id="ios打包" tabindex="-1"><a class="header-anchor" href="#ios打包">#</a> IOS打包</h2><h3 id="ios测试版打包" tabindex="-1"><a class="header-anchor" href="#ios测试版打包">#</a> IOS测试版打包</h3><ul><li>manifest.json配置文件中APPID修改为：__UNI__2531F69</li><li>应用版本名称跟版本号填写根据之前的以此叠加</li></ul><p><img src="/doc/img1.png" alt="Image text"></p><ul><li>选择原生-云打包，填写对应信息，选择打自定义基座，选择测试证书上传</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Bundle ID：com.yunyaoku.mm.test\n私钥密码：111\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="/doc/img2.png" alt="Image text"></p><ul><li>提交打包之后会返回.ipa文件的下载链接，把对应的文件上传到蒲公英https://www.pgyer.com网站上生成测试版本ios下载地址</li></ul><p><img src="/doc/img3.png" alt="Image text"></p><p><img src="/doc/img4.png" alt="Image text"></p><p><img src="/doc/img5.png" alt="Image text"></p><h3 id="ios正式版打包" tabindex="-1"><a class="header-anchor" href="#ios正式版打包">#</a> IOS正式版打包</h3><ul><li>manifest.json配置文件中APPID修改为：__UNI__E90FED9</li><li>应用版本名称跟版本号填写根据之前的以此叠加</li></ul><p><img src="/doc/img6.png" alt="Image text"></p><ul><li>选择原生-云打包，填写对应信息，选择打正式，选择正式证书上传</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Bundle ID：com.yunyaoku.mm\n私钥密码：111\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="/doc/img7.png" alt="Image text"></p><ul><li>提交正式打包之后会返回.ipa文件的下载链接，把对应的文件先下载下来，再交付到苹果电脑transpoter应用程序</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>账号：yykj123@yeah.net\n密码：YYkj123456\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="/doc/img8.png" alt="Image text"></p><ul><li>登录苹果官方审核网址：https://appstoreconnect.apple.com</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>账号：yykj123@yeah.net\n密码：YYkj123456\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="/doc/img9.png" alt="Image text"></p><ul><li>构建完成以后，点击App Store模块，点击+符号新增版本，版本号叠加，填写对应信息上传审核新的版本</li></ul><p><img src="/doc/img10.png" alt="Image text"></p><h2 id="安卓打包" tabindex="-1"><a class="header-anchor" href="#安卓打包">#</a> 安卓打包</h2><ul><li><p>manifest.json配置文件中APPID修改为：__UNI__E90FED9</p></li><li><p>应用版本名称跟版本号填写根据之前的以此叠加</p></li></ul><p><img src="/doc/img11.png" alt="Image text"></p><ul><li>选择原生-云打包</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>包名：com.yunyaoku.mm\n证书别名：com.yunyaoku\n密钥：yunyaoku##2020\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><img src="/doc/img12.png" alt="Image text"></p><ul><li>打包完成返回的下载链接，如果是进行测试可以上传到蒲公英，跟ios上传测试包一样；如果是正式包发版审核，目前上传到小米跟oppo平台</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>隐私协议地址:https://a.imabinib.cn/attachment/valid/privacy.html\n\n小米应用市场：https://dev.mi.com/console/appservice/\n账号：13128293891\n密码：hly123456\n\noppo应用市场：https://open.oppomobile.com/\n账号：denglanbin@ak1ak1.com\n密码：YYkj123456\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="webpack静态模块打包配置" tabindex="-1"><a class="header-anchor" href="#webpack静态模块打包配置">#</a> webpack静态模块打包配置</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>克隆\n\n$ git clone http://192.168.2.254:3000/dinbo/webpack-pack.git\n\n下载\n\n$ npm install webpack webpack-cli -g\n\n\n安装\n\n$ npm install \n\n启动开发环境\n\n$ npm start\n\n$ npm run dev\n\n构建生产环境\n\n$ npm run build\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h3 id="核心概念" tabindex="-1"><a class="header-anchor" href="#核心概念">#</a> 核心概念</h3><ul><li>entry 入口 <ul><li>webpack 以哪个文件为入口开始打包</li></ul></li><li>output 输出 <ul><li>打包后输出到哪里去</li></ul></li><li>loader 加载器 <ul><li>webpack 只能识别 js 和 json 文件，其他文件会直接报错</li><li>loader 能帮 webpack 加载它识别不了的模块</li></ul></li><li>plugins 插件 <ul><li>执行任务更加强大的工作</li></ul></li><li>mode 模式 <ul><li>development 开发环境 <ul><li>能将 ES6 模块化语法编译成浏览器能识别的模块化语法</li><li>HMR 热模块替换</li><li>css style-loader</li><li>js module.hot.accept</li></ul></li><li>production 生产环境 <ul><li>提升打包构建速度 <ul><li>oneOf 让文件只被一个loader处理</li><li>cacheDirectory: true 开启babel缓存，让第二次打包速度更快</li><li>thread-loader 多线程打包，让babel-loader任务做的更快（问题: 每个线程都有开销 600ms）</li></ul></li><li>优化构建后代码性能 <ul><li>tree shaking 去除无用/多余js代码 <ul><li>es6模块化和production（用了插件 - 压缩js插件）</li><li>package.json sideEffect: [&#39;*.css&#39;]</li></ul></li></ul></li><li>caching 让资源更好的缓存 <ul><li>hash / chunkhash / contenthash</li></ul></li></ul></li></ul></li></ul><h3 id="node运行命令" tabindex="-1"><a class="header-anchor" href="#node运行命令">#</a> node运行命令</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> * 安装 $ npm install --save-dev cross-env\n \n * package.json 文件中配置:\n &quot;scripts&quot;: {\n    &quot;start&quot;: &quot;npm run dev&quot;,\n    &quot;dev&quot;: &quot;webpack-dev-server --config ./config/webpack.dev.js&quot;,\n    &quot;build&quot;: &quot;webpack --config ./config/webpack.prod.js&quot;,\n    &quot;build:test&quot;: &quot;cross-env env_config=test webpack --config ./config/webpack.prod.js&quot;,\n    &quot;build:prod&quot;: &quot;cross-env env_config=prod webpack --config ./config/webpack.prod.js&quot;\n  }\n\n $ npm run build:test 值：process.env_config = test\n $ npm run build:prod 值：process.env_config = prod\n \n * 还可配置 NODE_ENV=production NODE_ENV=development 等。\n   \n ----------------------------------------------------------------------------------------\n \n $ npm 运行命令 可在配置文件中指定的开发时的api指定端口等。\n\n * 获取命令行参数文档 http://nodejs.cn/api/process.html#process_process_argv \n \n * let argv = process.env.npm_config_argv;\n \n * console.log(JSON.parse(argv).original)// 输入指令的集合 \n \n * 如 $ npm run dev 值：[&quot;run&quot;, &quot;dev&quot;] $\n * 如 $ npm run dev --prod 值：[&quot;run&quot;, &quot;dev&quot;, &quot;--prod&quot;]\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h2 id="tabbar适配-iphonex以上机型" tabindex="-1"><a class="header-anchor" href="#tabbar适配-iphonex以上机型">#</a> tabbar适配 iPhoneX以上机型</h2>',48),p={href:"https://aotu.io/notes/2017/11/27/iphonex/",target:"_blank",rel:"noopener noreferrer"},t=(0,e.Uk)("网页适配 iPhoneX文章地址"),i=(0,e.uE)('<p><img src="/doc/tabbar-1.jpg" alt="Image text"> <img src="/doc/tabbar-2.jpg" alt="Image text"></p><p>Safari浏览器及其它app浏览器中的适配 viewport-fit 及 CSS ：</p><ul><li><p>错误写法：viewport-fit：cover 时 env() 是不起作用的</p></li><li><p>正确写法：viewport-fit=cover</p></li><li><p>完整写法：</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1, maximum-scale=1,minimum-scale=1, user-scalable=no,viewport-fit=cover<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tabbar<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>首页<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>分类<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>我的<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>      \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>env(safe-area-inset-bottom)</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>对于不支持<span class="token function">env</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 的浏览器，浏览器将会忽略它。\n\n需要适配的tabbar添加CS或者及微信小程序的CSS：\n\t<span class="token property">padding-bottom</span><span class="token punctuation">:</span> <span class="token function">env</span><span class="token punctuation">(</span>safe-area-inset-bottom<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token selector">#tabbar</span><span class="token punctuation">{</span>\n    <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>\n    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>\n    <span class="token property">padding-bottom</span><span class="token punctuation">:</span> <span class="token function">env</span><span class="token punctuation">(</span>safe-area-inset-bottom<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div></li></ul><h2 id="npm发布组件" tabindex="-1"><a class="header-anchor" href="#npm发布组件">#</a> npm发布组件</h2><ul><li>npm注册账号运行以下命令行，输入账号&gt;输入密码&gt;输入email，注意输入密码时候是不显示占位符的，直接一次输入就行，删除容易导致输错密码</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm adduser --registry http://192.168.2.243:4873\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>安装nrm，运行以下命令行</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm install -g nrm\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>安装完后可运行以下命令行， 显示版本，注意是大写V</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>nrm -V \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>运行以下命令行查看所有源，可以看到列表中左侧为名称，右侧为地址。带*的为当前配置</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>nrm ls\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img src="/doc/npm-img2.png" alt="Image text"></p><ul><li>使用 nrm add 新源名称 http://xx.xx.xx.xx:4873添加源</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>nrm add aknpm http://192.168.2.243:4873\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>使用 nrm use [registry] 切换源，切换成aknpm。再使用 nrm ls 可以看到*改至aknpm前，说明切换成功</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>nrm use [registry]\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img src="/doc/npm-img1.png" alt="Image text"></p><ul><li>登录账号信息，运行以下命令行，输入账号密码邮箱等信息</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm login in\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>进入待发布的组件的根目录下，运行以下命令行,配置package.json文件，注意组件上传之前，根目录下的README文件描述要写好</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm init\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img src="/doc/npm-img3.png" alt="Image text"></p><ul><li>配置完成以后，运行以下命令行发布完成</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm publish\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',25),c={};var r=(0,a(3744).Z)(c,[["render",function(n,s){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[l,(0,e._)("p",null,[(0,e._)("a",p,[t,(0,e.Wm)(a)])]),i],64)}]])},3744:function(n,s){s.Z=(n,s)=>{for(const[a,e]of s)n[a]=e;return n}}}]);
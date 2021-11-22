<template><h1 id="禾沐康app功能及技术详解" tabindex="-1"><a class="header-anchor" href="#禾沐康app功能及技术详解">#</a> 禾沐康App功能及技术详解</h1>
<h2 id="一、app功能脑图" tabindex="-1"><a class="header-anchor" href="#一、app功能脑图">#</a> 一、App功能脑图</h2>
<p><img src="/doc/O2O商城脑图.png" alt="Image text"></p>
<h2 id="二、app功能流程" tabindex="-1"><a class="header-anchor" href="#二、app功能流程">#</a> 二、App功能流程</h2>
<p><img src="/doc/O2O商城流程.png" alt="Image text"></p>
<h2 id="三、项目组件化" tabindex="-1"><a class="header-anchor" href="#三、项目组件化">#</a> 三、项目组件化</h2>
<h3 id="_1、组件化设计目的" tabindex="-1"><a class="header-anchor" href="#_1、组件化设计目的">#</a> 1、组件化设计目的</h3>
<p>随着应用迭代周期快，新功能不断增加，业务模块多且庞大，app业务逻辑复杂，代码笨重，编译耗时，维护成本高。延伸组件化设计开发可以有效的提开发效率，降低开发成本。</p>
<h3 id="_2、组件化优势好处" tabindex="-1"><a class="header-anchor" href="#_2、组件化优势好处">#</a> 2、组件化优势好处</h3>
<p>组件化框架可以单独编译调试，有效地减少了编译的时间。以公共模块依赖库方式，给各个业务线用，减少重复开发和维护工作量。每个组件有自己独立的版本，可以独立编译、测试、打包和部署</p>
<h3 id="_3、组件化框架" tabindex="-1"><a class="header-anchor" href="#_3、组件化框架">#</a> 3、组件化框架</h3>
<p>组件之间是相对独立存在，互相没有关联，被主工程所依赖，组成一个具有完整业务功能的 App应用。如图:</p>
<p><img src="/doc/O2O系统架构图1.png" alt="Image text"></p>
<h3 id="_4、禾沐康架构设计图" tabindex="-1"><a class="header-anchor" href="#_4、禾沐康架构设计图">#</a> 4、禾沐康架构设计图</h3>
<p><img src="/doc/O2O系统架构图2.png" alt="Image text"></p>
</template>

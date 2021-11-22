<template><h1 id="禾沐康app直播流程" tabindex="-1"><a class="header-anchor" href="#禾沐康app直播流程">#</a> 禾沐康APP直播流程</h1>
<h2 id="登录流程" tabindex="-1"><a class="header-anchor" href="#登录流程">#</a> 登录流程</h2>
<p><img src="/doc/APP直播登录流程.png" alt="Image text"></p>
<h2 id="直播拉流流程" tabindex="-1"><a class="header-anchor" href="#直播拉流流程">#</a> 直播拉流流程</h2>
<p><img src="/doc/APP直播拉流流程.png" alt="Image text"></p>
<h2 id="直播推流流程" tabindex="-1"><a class="header-anchor" href="#直播推流流程">#</a> 直播推流流程</h2>
<p><img src="/doc/APP直播推流流程.png" alt="Image text"></p>
<h2 id="直播模块相关接口" tabindex="-1"><a class="header-anchor" href="#直播模块相关接口">#</a> <strong>直播模块相关接口</strong></h2>
<h3 id="android-工程tcglobalconfig-文件内替换" tabindex="-1"><a class="header-anchor" href="#android-工程tcglobalconfig-文件内替换">#</a> android 工程TCGlobalConfig 文件内替换</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>以下两个数据可以通过腾讯云后台获取，获取License，请参考官网指引 https://cloud.tencent.com/document/product/454/34750
LICENCE_URL="";//设置成您自己账号下直播License的url
LICENCE_KEY="";//设置成您自己账号下直播License的key;

以下路径为自己搭建的直播服务器路径
APP_SVR_URL="";//设置成我们自己的直播服务器路径;


</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="功能说明" tabindex="-1"><a class="header-anchor" href="#功能说明">#</a> 功能说明</h3>
<h4 id="功能点" tabindex="-1"><a class="header-anchor" href="#功能点">#</a> 功能点</h4>
<ol>
<li>获取登录信息</li>
<li>获取用户信息</li>
<li>注册直播账号</li>
<li>获取直播/预告房间列表</li>
<li>获取直播/预告房间信息</li>
<li>创建直播间/预告直播开播</li>
<li>结束创建直播间/预告直播间</li>
<li>观众进入直播间</li>
<li>观众退出直播间</li>
<li>获取观众列表和观众人数（腾讯接口直播群成员接口）</li>
</ol>
<h4 id="请求方式" tabindex="-1"><a class="header-anchor" href="#请求方式">#</a> 请求方式</h4>
<ul>
<li>协议：https</li>
<li>域名：https://payment.360yyk.cn/</li>
<li>方式：POST/PUT/GET</li>
<li>请求数据格式：json封装/map封装</li>
<li>应答数据格式：json封装</li>
<li>获取登录信息请求需要增加head头部参数：addHeader(&quot;Authorization&quot;,&quot;Basic YWstYXBwOjEyMzQ1Ng==&quot;)</li>
<li>其他接口统一用登录信息返回的token拼装head 参数：addHeader(&quot;Authorization&quot;,&quot;bearer &quot;+token)  token为登录返回token</li>
</ul>
<h3 id="接口" tabindex="-1"><a class="header-anchor" href="#接口">#</a> 接口</h3>
<h4 id="_1-获取登录信息" tabindex="-1"><a class="header-anchor" href="#_1-获取登录信息">#</a> 1.<strong>获取登录信息</strong></h4>
<p>向后台请求用于获取登录成功的票据token</p>
<p>* 接口名：<strong>auth/oauth/token</strong></p>
<p>* 方式：POST</p>
<p>* 请求示例：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>Map<span class="token operator">&lt;</span>String<span class="token punctuation">,</span> String<span class="token operator">></span> defaultParam <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token operator">&lt;</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
defaultParam<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"grant_type"</span><span class="token punctuation">,</span> <span class="token string">"password"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>		 
defaultParam<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"userType"</span><span class="token punctuation">,</span> <span class="token string">"app"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>			 
defaultParam<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"entryType"</span><span class="token punctuation">,</span> <span class="token string">"app"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>			 
defaultParam<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"lat"</span><span class="token punctuation">,</span> lat<span class="token punctuation">)</span><span class="token punctuation">;</span>					 
defaultParam<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"lng"</span><span class="token punctuation">,</span> lng<span class="token punctuation">)</span><span class="token punctuation">;</span>					 
defaultParam<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"username"</span><span class="token punctuation">,</span> userName<span class="token punctuation">)</span><span class="token punctuation">;</span>			 
defaultParam<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"password"</span><span class="token punctuation">,</span> passWord<span class="token punctuation">)</span><span class="token punctuation">;</span>			 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><table>
<thead>
<tr>
<th style="text-align:left">字段</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">选项</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">grant_type</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">登录方式</td>
</tr>
<tr>
<td style="text-align:left">userType</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">登录类型app</td>
</tr>
<tr>
<td style="text-align:left">entryType</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">登录类型app</td>
</tr>
<tr>
<td style="text-align:left">lat</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">默认必须传“0”</td>
</tr>
<tr>
<td style="text-align:left">lng</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">默认必须传“0”</td>
</tr>
<tr>
<td style="text-align:left">username</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">用户名</td>
</tr>
<tr>
<td style="text-align:left">password</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">密码</td>
</tr>
</tbody>
</table>
<p>* 应答示例：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"access_token"</span><span class="token operator">:</span><span class="token string">"fccd7d03-46c5-429f-af97-d0cb6dac8778"</span><span class="token punctuation">,</span>
    <span class="token property">"token_type"</span><span class="token operator">:</span><span class="token string">"bearer"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><table>
<thead>
<tr>
<th style="text-align:left">字段</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">选项</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">access_token</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">授权token</td>
</tr>
<tr>
<td style="text-align:left">token_type</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">token类型</td>
</tr>
</tbody>
</table>
<h4 id="_2-获取用户信息" tabindex="-1"><a class="header-anchor" href="#_2-获取用户信息">#</a> 2.获取用户信息</h4>
<p>向后台请求用于获取用户资料信息</p>
<p>* 接口名：<strong>system/user/user</strong></p>
<p>* 方式：GET</p>
<p>* 请求示例：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>Map<span class="token operator">&lt;</span>String<span class="token punctuation">,</span> String<span class="token operator">></span> defaultParam <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token operator">&lt;</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>			 
defaultParam<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"entryType"</span><span class="token punctuation">,</span> <span class="token string">"android"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><table>
<thead>
<tr>
<th style="text-align:left">字段</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">选项</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">entryType</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td>登录类型android</td>
</tr>
</tbody>
</table>
<p>* 应答示例：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code> <span class="token punctuation">{</span>
    <span class="token property">"currentUser"</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">"username"</span><span class="token operator">:</span><span class="token string">"13928790037"</span><span class="token punctuation">,</span> 
        <span class="token property">"userId"</span><span class="token operator">:</span><span class="token string">"4d5e6cc4769760f9203510fd7faf8270"</span><span class="token punctuation">,</span>
        <span class="token property">"nickname"</span><span class="token operator">:</span><span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">"userType"</span><span class="token operator">:</span><span class="token string">"2"</span><span class="token punctuation">,</span>
        <span class="token property">"avatar"</span><span class="token operator">:</span><span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">"mobile"</span><span class="token operator">:</span><span class="token string">"13928790037"</span><span class="token punctuation">,</span>
        <span class="token property">"sex"</span><span class="token operator">:</span><span class="token string">"2"</span><span class="token punctuation">,</span>
        <span class="token property">"tenantType"</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">"tenantBelong"</span><span class="token operator">:</span><span class="token string">"361rfv"</span><span class="token punctuation">,</span>
        <span class="token property">"roleKey"</span><span class="token operator">:</span><span class="token string">"business"</span><span class="token punctuation">,</span>
        <span class="token property">"roleName"</span><span class="token operator">:</span><span class="token string">"业务理"</span><span class="token punctuation">,</span>
        <span class="token property">"liveUserId"</span><span class="token operator">:</span><span class="token string">"ak4jv1w3_13928790037"</span><span class="token punctuation">,</span>
        <span class="token property">"livePassword"</span><span class="token operator">:</span><span class="token string">"4jv1w31234"</span><span class="token punctuation">,</span>
        <span class="token property">"closeTenants"</span><span class="token operator">:</span><span class="token punctuation">[</span>
                            <span class="token punctuation">{</span>
                            <span class="token property">"tenantCode"</span><span class="token operator">:</span><span class="token string">"4jv1w3"</span><span class="token punctuation">,</span>
                            <span class="token property">"tenantName"</span><span class="token operator">:</span><span class="token string">"阿康云药房"</span>
                            <span class="token punctuation">}</span>
                        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><table>
<thead>
<tr>
<th style="text-align:left">字段</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">选项</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">currentUser</td>
<td style="text-align:left">JsonObject</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">用户信息对象</td>
</tr>
<tr>
<td style="text-align:left">currentUser.username</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">用户名</td>
</tr>
<tr>
<td style="text-align:left">currentUser.userId</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">用户id唯一</td>
</tr>
<tr>
<td style="text-align:left">currentUser.nickname</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">用户昵称</td>
</tr>
<tr>
<td style="text-align:left">currentUser.userType</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">用户类型</td>
</tr>
<tr>
<td style="text-align:left">currentUser.avatar</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">用户头像</td>
</tr>
<tr>
<td style="text-align:left">currentUser.mobile</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">用户手机号</td>
</tr>
<tr>
<td style="text-align:left">currentUser.sex</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">用户性别</td>
</tr>
<tr>
<td style="text-align:left">currentUser.tenantType</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">商业类型</td>
</tr>
<tr>
<td style="text-align:left">currentUser.tenantBelong</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">商业Belong</td>
</tr>
<tr>
<td style="text-align:left">currentUser.roleKey</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">角色key</td>
</tr>
<tr>
<td style="text-align:left">currentUser.roleName</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">角色名称</td>
</tr>
<tr>
<td style="text-align:left">currentUser.liveUserId</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">直播账号</td>
</tr>
<tr>
<td style="text-align:left">currentUser.livePassword</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">直播密码</td>
</tr>
<tr>
<td style="text-align:left">currentUser.closeTenants</td>
<td style="text-align:left">JsonArray</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">商业对象列表</td>
</tr>
<tr>
<td style="text-align:left">currentUser.closeTenants.tenantCode</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">商业编码</td>
</tr>
<tr>
<td style="text-align:left">currentUser.closeTenants.tenantName</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">商业名字</td>
</tr>
</tbody>
</table>
<h4 id="_3-注册直播账号" tabindex="-1"><a class="header-anchor" href="#_3-注册直播账号">#</a> 3.注册直播账号</h4>
<p>向后台请求用于注册直播账号</p>
<p>* 接口名：<strong>system/user/registerLiveUser</strong></p>
<p>* 方式：POST</p>
<p>* 请求示例：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>Map<span class="token operator">&lt;</span>String<span class="token punctuation">,</span> String<span class="token operator">></span> defaultParam <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token operator">&lt;</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
defaultParam<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"entryType"</span><span class="token punctuation">,</span> <span class="token string">"android"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>		 
defaultParam<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"tenantCode"</span><span class="token punctuation">,</span> tenantCode<span class="token punctuation">)</span><span class="token punctuation">;</span>			 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><table>
<thead>
<tr>
<th style="text-align:left">字段</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">选项</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">entryType</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">登录方式android</td>
</tr>
<tr>
<td style="text-align:left">tenantCode</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">商业编码tenantCode</td>
</tr>
</tbody>
</table>
<p>* 应答示例：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"data"</span><span class="token operator">:</span>
     <span class="token punctuation">{</span>  
        <span class="token property">"liveUserId"</span><span class="token operator">:</span><span class="token string">"aksbuj_13928790037"</span><span class="token punctuation">,</span>
      	<span class="token property">"livePassword"</span><span class="token operator">:</span><span class="token string">"sbuj1234"</span> 
     <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><table>
<thead>
<tr>
<th style="text-align:left">字段</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">选项</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">liveUserId</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">直播账号</td>
</tr>
<tr>
<td style="text-align:left">livePassword</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">直播账号密码</td>
</tr>
</tbody>
</table>
<h4 id="_4-获取直播-预告房间列表" tabindex="-1"><a class="header-anchor" href="#_4-获取直播-预告房间列表">#</a> 4.获取直播/预告房间列表</h4>
<p>向后台请求用于获取直播/预告房间列表</p>
<p>* 接口名：<strong>promotion/promotion/live/list</strong></p>
<p>* 方式：GET</p>
<p>* 请求示例：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>Map<span class="token operator">&lt;</span>String<span class="token punctuation">,</span> String<span class="token operator">></span> defaultParam <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token operator">&lt;</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
defaultParam<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"entryType"</span><span class="token punctuation">,</span> <span class="token string">"android"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>		 
defaultParam<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"tenantCode"</span><span class="token punctuation">,</span> <span class="token string">"4jv1w3"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	
defaultParam<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"hostId"</span><span class="token punctuation">,</span> hostId<span class="token punctuation">)</span><span class="token punctuation">;</span>	
defaultParam<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"type"</span><span class="token punctuation">,</span> type<span class="token punctuation">)</span><span class="token punctuation">;</span>	
defaultParam<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"status"</span><span class="token punctuation">,</span> status<span class="token punctuation">)</span><span class="token punctuation">;</span>	
defaultParam<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"province"</span><span class="token punctuation">,</span> province<span class="token punctuation">)</span><span class="token punctuation">;</span>	
defaultParam<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"city"</span><span class="token punctuation">,</span> city<span class="token punctuation">)</span><span class="token punctuation">;</span>	
defaultParam<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"pageNum"</span><span class="token punctuation">,</span> pageNum<span class="token punctuation">)</span><span class="token punctuation">;</span>
defaultParam<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"pageSize"</span><span class="token punctuation">,</span> pageSize<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><table>
<thead>
<tr>
<th style="text-align:left">字段</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">选项</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">entryType</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">登录方式android</td>
</tr>
<tr>
<td style="text-align:left">tenantCode</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">商业编码tenantCode</td>
</tr>
<tr>
<td style="text-align:left">hostId</td>
<td style="text-align:left">String</td>
<td style="text-align:left">否</td>
<td style="text-align:left">预创建的主播Id</td>
</tr>
<tr>
<td style="text-align:left">type</td>
<td style="text-align:left">String</td>
<td style="text-align:left">否</td>
<td style="text-align:left">直播间类型</td>
</tr>
<tr>
<td style="text-align:left">status</td>
<td style="text-align:left">int</td>
<td style="text-align:left">否</td>
<td style="text-align:left">直播类型0预告1直播中2直播结束</td>
</tr>
<tr>
<td style="text-align:left">province</td>
<td style="text-align:left">String</td>
<td style="text-align:left">否</td>
<td style="text-align:left">省份</td>
</tr>
<tr>
<td style="text-align:left">city</td>
<td style="text-align:left">String</td>
<td style="text-align:left">否</td>
<td style="text-align:left">市区</td>
</tr>
<tr>
<td style="text-align:left">pageNum</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">页数</td>
</tr>
<tr>
<td style="text-align:left">pageSize</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">每页条数</td>
</tr>
</tbody>
</table>
<p>* 应答示例：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"data"</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">"records"</span><span class="token operator">:</span><span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">"liveId"</span><span class="token operator">:</span><span class="token number">65</span><span class="token punctuation">,</span>
                <span class="token property">"title"</span><span class="token operator">:</span><span class="token string">"机器人"</span><span class="token punctuation">,</span>
                <span class="token property">"type"</span><span class="token operator">:</span><span class="token string">"糖尿病"</span><span class="token punctuation">,</span>
                <span class="token property">"coverUrl"</span><span class="token operator">:</span><span class="token null keyword">null</span><span class="token punctuation">,</span>
                <span class="token property">"views"</span><span class="token operator">:</span><span class="token string">"0"</span><span class="token punctuation">,</span>
                <span class="token property">"viewsTotal"</span><span class="token operator">:</span><span class="token string">"0"</span><span class="token punctuation">,</span>
                <span class="token property">"status"</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token property">"host"</span><span class="token operator">:</span><span class="token string">"ak4jv1w3_13928790037"</span><span class="token punctuation">,</span>
                <span class="token property">"roomId"</span><span class="token operator">:</span><span class="token string">"ak4jv1w3_13928790037"</span><span class="token punctuation">,</span>
                <span class="token property">"startTime"</span><span class="token operator">:</span><span class="token string">"2021-04-08 18:02:49"</span><span class="token punctuation">,</span>
                <span class="token property">"lng"</span><span class="token operator">:</span><span class="token null keyword">null</span><span class="token punctuation">,</span>
                <span class="token property">"lat"</span><span class="token operator">:</span><span class="token null keyword">null</span><span class="token punctuation">,</span>
                <span class="token property">"province"</span><span class="token operator">:</span><span class="token null keyword">null</span><span class="token punctuation">,</span>
                <span class="token property">"city"</span><span class="token operator">:</span><span class="token null keyword">null</span><span class="token punctuation">,</span>
                <span class="token property">"area"</span><span class="token operator">:</span><span class="token null keyword">null</span><span class="token punctuation">,</span>
                <span class="token property">"hostName"</span><span class="token operator">:</span><span class="token null keyword">null</span><span class="token punctuation">,</span>
                <span class="token property">"hostHead"</span><span class="token operator">:</span><span class="token null keyword">null</span><span class="token punctuation">,</span>
                <span class="token property">"planStatTime"</span><span class="token operator">:</span><span class="token null keyword">null</span><span class="token punctuation">,</span>
                <span class="token property">"predictionCoverUrl"</span><span class="token operator">:</span><span class="token null keyword">null</span><span class="token punctuation">,</span>
                <span class="token property">"hostId"</span><span class="token operator">:</span><span class="token null keyword">null</span><span class="token punctuation">,</span>
                <span class="token property">"pullUrlByFlv"</span><span class="token operator">:</span><span class="token string">"http://o2o-pull.ak1ak1.net/live/60702648_ak4jv1w3_13928790037.flv"</span><span class="token punctuation">,</span>
                <span class="token property">"pullUrlByM3u8"</span><span class="token operator">:</span><span class="token string">"http://o2o-pull.ak1ak1.net/live/60702648_ak4jv1w3_13928790037.m3u8"</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">"total"</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">"size"</span><span class="token operator">:</span><span class="token number">10</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><table>
<thead>
<tr>
<th style="text-align:left">字段</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">选项</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">data</td>
<td style="text-align:left">JsonObject</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">JsonObject</td>
</tr>
<tr>
<td style="text-align:left">records</td>
<td style="text-align:left">JsonArray</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">JsonArray直播数据列表</td>
</tr>
<tr>
<td style="text-align:left">liveId</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">直播间ID</td>
</tr>
<tr>
<td style="text-align:left">title</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">直播间标题</td>
</tr>
<tr>
<td style="text-align:left">type</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">直播间类型</td>
</tr>
<tr>
<td style="text-align:left">coverUrl</td>
<td style="text-align:left">String</td>
<td style="text-align:left">否</td>
<td style="text-align:left">直播封面</td>
</tr>
<tr>
<td style="text-align:left">views</td>
<td style="text-align:left">String</td>
<td style="text-align:left">否</td>
<td style="text-align:left">当前观众数</td>
</tr>
<tr>
<td style="text-align:left">viewsTotal</td>
<td style="text-align:left">String</td>
<td style="text-align:left">否</td>
<td style="text-align:left">累计观众数</td>
</tr>
<tr>
<td style="text-align:left">status</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">0预告1直播中2结束</td>
</tr>
<tr>
<td style="text-align:left">host</td>
<td style="text-align:left">String</td>
<td style="text-align:left">否</td>
<td style="text-align:left">直播账号</td>
</tr>
<tr>
<td style="text-align:left">roomId</td>
<td style="text-align:left">String</td>
<td style="text-align:left">否</td>
<td style="text-align:left">房间ID也是直播群ID</td>
</tr>
<tr>
<td style="text-align:left">startTime</td>
<td style="text-align:left">String</td>
<td style="text-align:left">否</td>
<td style="text-align:left">开始直播时间</td>
</tr>
<tr>
<td style="text-align:left">lng</td>
<td style="text-align:left">String</td>
<td style="text-align:left">否</td>
<td style="text-align:left">经度</td>
</tr>
<tr>
<td style="text-align:left">lat</td>
<td style="text-align:left">String</td>
<td style="text-align:left">否</td>
<td style="text-align:left">纬度</td>
</tr>
<tr>
<td style="text-align:left">province</td>
<td style="text-align:left">String</td>
<td style="text-align:left">否</td>
<td style="text-align:left">省</td>
</tr>
<tr>
<td style="text-align:left">city</td>
<td style="text-align:left">String</td>
<td style="text-align:left">否</td>
<td style="text-align:left">市</td>
</tr>
<tr>
<td style="text-align:left">area</td>
<td style="text-align:left">String</td>
<td style="text-align:left">否</td>
<td style="text-align:left">区</td>
</tr>
<tr>
<td style="text-align:left">hostName</td>
<td style="text-align:left">String</td>
<td style="text-align:left">否</td>
<td style="text-align:left">主播名字</td>
</tr>
<tr>
<td style="text-align:left">hostHead</td>
<td style="text-align:left">String</td>
<td style="text-align:left">否</td>
<td style="text-align:left">主播头像</td>
</tr>
<tr>
<td style="text-align:left">planStatTime</td>
<td style="text-align:left">String</td>
<td style="text-align:left">否</td>
<td style="text-align:left">预告时间</td>
</tr>
<tr>
<td style="text-align:left">predictionCoverUrl</td>
<td style="text-align:left">String</td>
<td style="text-align:left">否</td>
<td style="text-align:left">预告图片</td>
</tr>
<tr>
<td style="text-align:left">hostId</td>
<td style="text-align:left">String</td>
<td style="text-align:left">否</td>
<td style="text-align:left">预告创建直播用户ID</td>
</tr>
<tr>
<td style="text-align:left">pullUrlByFlv</td>
<td style="text-align:left">String</td>
<td style="text-align:left">否</td>
<td style="text-align:left">直播播放FLV-URL</td>
</tr>
<tr>
<td style="text-align:left">pullUrlByM3u8</td>
<td style="text-align:left">String</td>
<td style="text-align:left">否</td>
<td style="text-align:left">直播播放M3u8-URL</td>
</tr>
</tbody>
</table>
<h4 id="_5-获取直播-预告房间信息" tabindex="-1"><a class="header-anchor" href="#_5-获取直播-预告房间信息">#</a> 5.获取直播/预告房间信息</h4>
<p>向后台请求用于获取直播/预告房间信息</p>
<p>* 接口名：<strong>promotion/promotion/live/id</strong></p>
<p>* 方式：GET</p>
<p>* 请求示例：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>Map<span class="token operator">&lt;</span>String<span class="token punctuation">,</span> String<span class="token operator">></span> defaultParam <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token operator">&lt;</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>			 
defaultParam<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"entryType"</span><span class="token punctuation">,</span> <span class="token string">"android"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>			 
defaultParam<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"tenantCode"</span><span class="token punctuation">,</span> <span class="token string">"ntem"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
defaultParam<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"liveId"</span><span class="token punctuation">,</span> liveId<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><table>
<thead>
<tr>
<th style="text-align:left">字段</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">选项</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">entryType</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">登录方式android</td>
</tr>
<tr>
<td style="text-align:left">tenantCode</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">商业编码tenantCode</td>
</tr>
<tr>
<td style="text-align:left">liveId</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">直播间ID</td>
</tr>
</tbody>
</table>
<p>* 应答示例：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"data"</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">"liveId"</span><span class="token operator">:</span><span class="token number">65</span><span class="token punctuation">,</span>
        <span class="token property">"title"</span><span class="token operator">:</span><span class="token string">"机器人"</span><span class="token punctuation">,</span>
        <span class="token property">"type"</span><span class="token operator">:</span><span class="token string">"糖尿病"</span><span class="token punctuation">,</span>
        <span class="token property">"coverUrl"</span><span class="token operator">:</span><span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">"views"</span><span class="token operator">:</span><span class="token string">"0"</span><span class="token punctuation">,</span>
        <span class="token property">"viewsTotal"</span><span class="token operator">:</span><span class="token string">"0"</span><span class="token punctuation">,</span>
        <span class="token property">"status"</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">"host"</span><span class="token operator">:</span><span class="token string">"ak4jv1w3_13928790037"</span><span class="token punctuation">,</span>
        <span class="token property">"roomId"</span><span class="token operator">:</span><span class="token string">"ak4jv1w3_13928790037"</span><span class="token punctuation">,</span>
        <span class="token property">"hostName"</span><span class="token operator">:</span><span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">"hostHead"</span><span class="token operator">:</span><span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">"planStatTime"</span><span class="token operator">:</span><span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">"predictionCoverUrl"</span><span class="token operator">:</span><span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">"pullUrlByFlv"</span><span class="token operator">:</span><span class="token string">"http://o2o-pull.ak1ak1.net/live/60702648_ak4jv1w3_13928790037.flv"</span><span class="token punctuation">,</span>
        <span class="token property">"pullUrlByM3u8"</span><span class="token operator">:</span><span class="token string">"http://o2o-pull.ak1ak1.net/live/60702648_ak4jv1w3_13928790037.m3u8"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><table>
<thead>
<tr>
<th style="text-align:left">字段</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">选项</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">data</td>
<td style="text-align:left">JsonObject</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">JsonObject</td>
</tr>
<tr>
<td style="text-align:left">liveId</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">直播间ID</td>
</tr>
<tr>
<td style="text-align:left">title</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">直播间标题</td>
</tr>
<tr>
<td style="text-align:left">type</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">直播间类型</td>
</tr>
<tr>
<td style="text-align:left">coverUrl</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">直播封面</td>
</tr>
<tr>
<td style="text-align:left">views</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">当前观众数</td>
</tr>
<tr>
<td style="text-align:left">viewsTotal</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">累计观众数</td>
</tr>
<tr>
<td style="text-align:left">status</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">直播状态0预告1直播2结束</td>
</tr>
<tr>
<td style="text-align:left">host</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">主播账号</td>
</tr>
<tr>
<td style="text-align:left">roomId</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">房间ID 也是直播群ID</td>
</tr>
<tr>
<td style="text-align:left">hostName</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">主播名字</td>
</tr>
<tr>
<td style="text-align:left">hostHead</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">主播头像</td>
</tr>
<tr>
<td style="text-align:left">planStatTime</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">预告时间</td>
</tr>
<tr>
<td style="text-align:left">predictionCoverUrl</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">预告图片</td>
</tr>
<tr>
<td style="text-align:left">pullUrlByFlv</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">直播播放FLV-URL</td>
</tr>
<tr>
<td style="text-align:left">pullUrlByM3u8</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">直播播放M3u8-URL</td>
</tr>
</tbody>
</table>
<h4 id="_6-创建直播间-预告直播开播" tabindex="-1"><a class="header-anchor" href="#_6-创建直播间-预告直播开播">#</a> 6.创建直播间/预告直播开播</h4>
<p>向后台请求用于创建直播间/预告直播开播</p>
<p>* 接口名：<strong>promotion/promotion/live/start</strong></p>
<p>* 方式：POST</p>
<p>* 请求示例：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"live"</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">"entryType"</span><span class="token operator">:</span><span class="token string">"android"</span><span class="token punctuation">,</span>
        <span class="token property">"tenantCode"</span><span class="token operator">:</span><span class="token string">"4jv1w3"</span><span class="token punctuation">,</span>
        <span class="token property">"liveId"</span><span class="token operator">:</span><span class="token number">82</span><span class="token punctuation">,</span>
        <span class="token property">"tenantType"</span><span class="token operator">:</span><span class="token string">"2"</span><span class="token punctuation">,</span>
        <span class="token property">"title"</span><span class="token operator">:</span><span class="token string">"测试一看"</span><span class="token punctuation">,</span>
        <span class="token property">"type"</span><span class="token operator">:</span><span class="token string">"糖尿病"</span><span class="token punctuation">,</span>
        <span class="token property">"host"</span><span class="token operator">:</span><span class="token string">"ak4jv1w3_13928790037"</span><span class="token punctuation">,</span>
        <span class="token property">"roomId"</span><span class="token operator">:</span><span class="token string">"ak4jv1w3_13928790037"</span><span class="token punctuation">,</span>
        <span class="token property">"coverUrl"</span><span class="token operator">:</span><span class="token string">"http://collegemedia.ayunyao.com/019e383679db478d8eb96a93ab0f5b83.png"</span><span class="token punctuation">,</span>
        <span class="token property">"lat"</span><span class="token operator">:</span><span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">"lng"</span><span class="token operator">:</span><span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">"province"</span><span class="token operator">:</span><span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">"city"</span><span class="token operator">:</span><span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">"area"</span><span class="token operator">:</span><span class="token null keyword">null</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><table>
<thead>
<tr>
<th style="text-align:left">字段</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">选项</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">live</td>
<td style="text-align:left">JsonObject</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">live对象</td>
</tr>
<tr>
<td style="text-align:left">live.entryType</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">登录类型 android</td>
</tr>
<tr>
<td style="text-align:left">live.tenantCode</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">商业编码</td>
</tr>
<tr>
<td style="text-align:left">live.tenantType</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">商业type</td>
</tr>
<tr>
<td style="text-align:left">live.title</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">直播间标题</td>
</tr>
<tr>
<td style="text-align:left">live.type</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">直播间类型</td>
</tr>
<tr>
<td style="text-align:left">live.host</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">主播ID（建议用直播登录账号）</td>
</tr>
<tr>
<td style="text-align:left">live.roomId</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">房间ID（建议用直播登录账号）</td>
</tr>
<tr>
<td style="text-align:left">live.coverUrl</td>
<td style="text-align:left">String</td>
<td style="text-align:left">否</td>
<td style="text-align:left">直播封面</td>
</tr>
<tr>
<td style="text-align:left">live.lat</td>
<td style="text-align:left">String</td>
<td style="text-align:left">否</td>
<td style="text-align:left">经度</td>
</tr>
<tr>
<td style="text-align:left">live.lng</td>
<td style="text-align:left">String</td>
<td style="text-align:left">否</td>
<td style="text-align:left">纬度</td>
</tr>
<tr>
<td style="text-align:left">live.province</td>
<td style="text-align:left">String</td>
<td style="text-align:left">否</td>
<td style="text-align:left">省</td>
</tr>
<tr>
<td style="text-align:left">live.city</td>
<td style="text-align:left">String</td>
<td style="text-align:left">否</td>
<td style="text-align:left">市</td>
</tr>
<tr>
<td style="text-align:left">live.area</td>
<td style="text-align:left">String</td>
<td style="text-align:left">否</td>
<td style="text-align:left">区</td>
</tr>
<tr>
<td style="text-align:left">live.liveId</td>
<td style="text-align:left">String</td>
<td style="text-align:left">否</td>
<td style="text-align:left">预告直播间开播必须填写直播间ID</td>
</tr>
</tbody>
</table>
<p>* 应答示例：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"data"</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">"liveId"</span><span class="token operator">:</span><span class="token number">82</span><span class="token punctuation">,</span>
        <span class="token property">"status"</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">"pushUrl"</span><span class="token operator">:</span><span class="token string">"rtmp://o2o-push.ak1ak1.net/live/604_ak4jv1w3_13928790037?txSec45da22&amp;txTime=60704"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><table>
<thead>
<tr>
<th style="text-align:left">字段</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">选项</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">data</td>
<td style="text-align:left">JsonObject</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">JsonObject</td>
</tr>
<tr>
<td style="text-align:left">data.liveId</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">直播间id</td>
</tr>
<tr>
<td style="text-align:left">data.status</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">直播间状态</td>
</tr>
<tr>
<td style="text-align:left">data.pushUrl</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">直播间推流路径</td>
</tr>
</tbody>
</table>
<h4 id="_7-结束创建直播间-预告直播间" tabindex="-1"><a class="header-anchor" href="#_7-结束创建直播间-预告直播间">#</a> 7.结束创建直播间/预告直播间</h4>
<p>向后台请求用于结束创建直播间/预告直播间</p>
<p>* 接口名：<strong>promotion/promotion/live/end</strong></p>
<p>* 方式：PUT</p>
<p>* 请求示例：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"live"</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">"entryType"</span><span class="token operator">:</span><span class="token string">"android"</span><span class="token punctuation">,</span>
        <span class="token property">"tenantCode"</span><span class="token operator">:</span><span class="token string">"4jv1w3"</span><span class="token punctuation">,</span>
        <span class="token property">"liveId"</span><span class="token operator">:</span><span class="token number">82</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>		 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><table>
<thead>
<tr>
<th style="text-align:left">字段</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">选项</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">entryType</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">登录方式android</td>
</tr>
<tr>
<td style="text-align:left">tenantCode</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">商业编码tenantCode</td>
</tr>
<tr>
<td style="text-align:left">liveId</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">直播间ID</td>
</tr>
</tbody>
</table>
<p>* 应答示例：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"data"</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">"views"</span><span class="token operator">:</span><span class="token string">"0"</span><span class="token punctuation">,</span>
        <span class="token property">"viewsTotal"</span><span class="token operator">:</span><span class="token string">"0"</span><span class="token punctuation">,</span>
        <span class="token property">"totalProducts"</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">"totalOrders"</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">"totalSaleAmount"</span><span class="token operator">:</span><span class="token number">0</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><table>
<thead>
<tr>
<th style="text-align:left">字段</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">选项</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">data</td>
<td style="text-align:left">JsonObject</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">JsonObject</td>
</tr>
<tr>
<td style="text-align:left">views</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">当前观看人数</td>
</tr>
<tr>
<td style="text-align:left">viewsTotal</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">累计观看总人数</td>
</tr>
<tr>
<td style="text-align:left">totalProducts</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">总商品数</td>
</tr>
<tr>
<td style="text-align:left">totalOrders</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">累计销售订单数</td>
</tr>
<tr>
<td style="text-align:left">totalSaleAmount</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">累计销售金额数</td>
</tr>
</tbody>
</table>
<h4 id="_8-观众进入直播间" tabindex="-1"><a class="header-anchor" href="#_8-观众进入直播间">#</a> 8.观众进入直播间</h4>
<p>向后台请求用于观众进入直播间</p>
<p>* 接口名：<strong>promotion/promotion/live/addView</strong></p>
<p>* 方式：PUT</p>
<p>* 请求示例：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"live"</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">"entryType"</span><span class="token operator">:</span><span class="token string">"android"</span><span class="token punctuation">,</span>
        <span class="token property">"tenantCode"</span><span class="token operator">:</span><span class="token string">"4jv1w3"</span><span class="token punctuation">,</span>
        <span class="token property">"liveId"</span><span class="token operator">:</span><span class="token number">82</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>		 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><table>
<thead>
<tr>
<th style="text-align:left">字段</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">选项</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">entryType</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">登录方式android</td>
</tr>
<tr>
<td style="text-align:left">tenantCode</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">商业编码tenantCode</td>
</tr>
<tr>
<td style="text-align:left">liveId</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">直播间ID</td>
</tr>
</tbody>
</table>
<p>* 应答示例：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
   <span class="token property">"messge"</span><span class="token operator">:</span><span class="token string">"成功"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><table>
<thead>
<tr>
<th style="text-align:left">字段</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">选项</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">messge</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">返回结果</td>
</tr>
</tbody>
</table>
<h4 id="_9-观众退出直播间" tabindex="-1"><a class="header-anchor" href="#_9-观众退出直播间">#</a> 9.观众退出直播间</h4>
<p>向后台请求用于观众退出直播间</p>
<p>* 接口名：<strong>promotion/promotion/live/reduceView</strong></p>
<p>* 方式：PUT</p>
<p>* 请求示例：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"live"</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">"entryType"</span><span class="token operator">:</span><span class="token string">"android"</span><span class="token punctuation">,</span>
        <span class="token property">"tenantCode"</span><span class="token operator">:</span><span class="token string">"4jv1w3"</span><span class="token punctuation">,</span>
        <span class="token property">"liveId"</span><span class="token operator">:</span><span class="token number">82</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>		 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><table>
<thead>
<tr>
<th style="text-align:left">字段</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">选项</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">entryType</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">登录方式android</td>
</tr>
<tr>
<td style="text-align:left">tenantCode</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">商业编码tenantCode</td>
</tr>
<tr>
<td style="text-align:left">liveId</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">直播间ID</td>
</tr>
</tbody>
</table>
<p>* 应答示例：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
   <span class="token property">"messge"</span><span class="token operator">:</span><span class="token string">"成功"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><table>
<thead>
<tr>
<th style="text-align:left">字段</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">选项</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">messge</td>
<td style="text-align:left">String</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">返回结果</td>
</tr>
</tbody>
</table>
</template>

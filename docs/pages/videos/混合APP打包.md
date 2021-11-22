# 技术文档
##  App打包环境配置
 - 环境配置：HBuilder X编译器中登录账号

```
账号：XXXXX
密码：XXXXX
```

 - manifest.json配置文件中App图标先上传好，自动生成App图标

![Image text](/doc/img15.png)

 - manifest.json配置文件中App启动页面配置，安卓启动图片设置上传好

![Image text](/doc/img16.png)

##  IOS打包


###  IOS测试版打包

 - manifest.json配置文件中APPID修改为：__UNI__2531F69
 - 应用版本名称跟版本号填写根据之前的以此叠加

![Image text](/doc/img1.png)

 - 选择原生-云打包，填写对应信息，选择打自定义基座，选择测试证书上传

```
Bundle ID：com.yunyaoku.mm.test
私钥密码：111
```

![Image text](/doc/img2.png)

 - 提交打包之后会返回.ipa文件的下载链接，把对应的文件上传到蒲公英https://www.pgyer.com网站上生成测试版本ios下载地址

![Image text](/doc/img3.png)

![Image text](/doc/img4.png)

![Image text](/doc/img5.png)

###  IOS正式版打包

 - manifest.json配置文件中APPID修改为：__UNI__E90FED9
 - 应用版本名称跟版本号填写根据之前的以此叠加

![Image text](/doc/img6.png)

 - 选择原生-云打包，填写对应信息，选择打正式，选择正式证书上传

```
Bundle ID：com.yunyaoku.mm
私钥密码：111
```

![Image text](/doc/img7.png)

 - 提交正式打包之后会返回.ipa文件的下载链接，把对应的文件先下载下来，再交付到苹果电脑transpoter应用程序

```
账号：yykj123@yeah.net
密码：YYkj123456
```

![Image text](/doc/img8.png)

 - 登录苹果官方审核网址：https://appstoreconnect.apple.com

```
账号：yykj123@yeah.net
密码：YYkj123456
```

![Image text](/doc/img9.png)

 - 构建完成以后，点击App Store模块，点击+符号新增版本，版本号叠加，填写对应信息上传审核新的版本

![Image text](/doc/img10.png)

## 安卓打包

 - manifest.json配置文件中APPID修改为：__UNI__E90FED9

 - 应用版本名称跟版本号填写根据之前的以此叠加

![Image text](/doc/img11.png)

 - 选择原生-云打包

```
包名：com.yunyaoku.mm
证书别名：com.yunyaoku
密钥：yunyaoku##2020
```

![Image text](/doc/img12.png)

 - 打包完成返回的下载链接，如果是进行测试可以上传到蒲公英，跟ios上传测试包一样；如果是正式包发版审核，目前上传到小米跟oppo平台

```
隐私协议地址:https://a.imabinib.cn/attachment/valid/privacy.html

小米应用市场：https://dev.mi.com/console/appservice/
账号：13128293891
密码：hly123456

oppo应用市场：https://open.oppomobile.com/
账号：denglanbin@ak1ak1.com
密码：YYkj123456
```



## webpack静态模块打包配置

```
克隆

$ git clone http://192.168.2.254:3000/dinbo/webpack-pack.git

下载

$ npm install webpack webpack-cli -g


安装

$ npm install 

启动开发环境

$ npm start

$ npm run dev

构建生产环境

$ npm run build
```



### 核心概念

- entry 入口
  -  webpack 以哪个文件为入口开始打包
- output 输出
  - 打包后输出到哪里去
- loader 加载器
  - webpack 只能识别 js 和 json 文件，其他文件会直接报错
  - loader 能帮 webpack 加载它识别不了的模块
- plugins 插件
  - 执行任务更加强大的工作
- mode 模式
  - development 开发环境
    - 能将 ES6 模块化语法编译成浏览器能识别的模块化语法
    - HMR 热模块替换
    - css style-loader
    - js module.hot.accept
  - production 生产环境
    - 提升打包构建速度
      - oneOf 让文件只被一个loader处理
      - cacheDirectory: true 开启babel缓存，让第二次打包速度更快
      - thread-loader 多线程打包，让babel-loader任务做的更快（问题: 每个线程都有开销 600ms）
    - 优化构建后代码性能
      - tree shaking 去除无用/多余js代码
        - es6模块化和production（用了插件 - 压缩js插件）
        - package.json  sideEffect: ['*.css']
    - caching 让资源更好的缓存
      - hash / chunkhash / contenthash

### node运行命令

```
 * 安装 $ npm install --save-dev cross-env
 
 * package.json 文件中配置:
 "scripts": {
    "start": "npm run dev",
    "dev": "webpack-dev-server --config ./config/webpack.dev.js",
    "build": "webpack --config ./config/webpack.prod.js",
    "build:test": "cross-env env_config=test webpack --config ./config/webpack.prod.js",
    "build:prod": "cross-env env_config=prod webpack --config ./config/webpack.prod.js"
  }

 $ npm run build:test 值：process.env_config = test
 $ npm run build:prod 值：process.env_config = prod
 
 * 还可配置 NODE_ENV=production NODE_ENV=development 等。
   
 ----------------------------------------------------------------------------------------
 
 $ npm 运行命令 可在配置文件中指定的开发时的api指定端口等。

 * 获取命令行参数文档 http://nodejs.cn/api/process.html#process_process_argv 
 
 * let argv = process.env.npm_config_argv;
 
 * console.log(JSON.parse(argv).original)// 输入指令的集合 
 
 * 如 $ npm run dev 值：["run", "dev"] $
 * 如 $ npm run dev --prod 值：["run", "dev", "--prod"]
```

## tabbar适配 iPhoneX以上机型

[网页适配 iPhoneX文章地址](https://aotu.io/notes/2017/11/27/iphonex/)

![Image text](/doc/tabbar-1.jpg)            ![Image text](/doc/tabbar-2.jpg)

Safari浏览器及其它app浏览器中的适配 viewport-fit 及 CSS ：

* 错误写法：viewport-fit：cover  时 env() 是不起作用的

* 正确写法：viewport-fit=cover

* 完整写法：

  ```html
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1,minimum-scale=1, user-scalable=no,viewport-fit=cover">
  ```

  ```html
  <div id="tabbar">
      <div>首页</div>
      <div>分类</div>
      <div>我的</div>
  </div>      
  ```

  env(safe-area-inset-bottom)

  ````css
  对于不支持env() 的浏览器，浏览器将会忽略它。
  
  需要适配的tabbar添加CS或者及微信小程序的CSS：
  	padding-bottom: env(safe-area-inset-bottom);
  
  #tabbar{
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100vw;
      height: 50px;
      padding-bottom: env(safe-area-inset-bottom);
  }
  ````

 ## npm发布组件
  - npm注册账号运行以下命令行，输入账号>输入密码>输入email，注意输入密码时候是不显示占位符的，直接一次输入就行，删除容易导致输错密码
  ```
  npm adduser --registry http://192.168.2.243:4873
  ```
  - 安装nrm，运行以下命令行
  ```
  npm install -g nrm
  ```
  - 安装完后可运行以下命令行， 显示版本，注意是大写V
  ```
  nrm -V 
  ```

  - 运行以下命令行查看所有源，可以看到列表中左侧为名称，右侧为地址。带*的为当前配置
  ```
  nrm ls
  ```
  ![Image text](/doc/npm-img2.png)

   - 使用  nrm add 新源名称 http://xx.xx.xx.xx:4873添加源
  ```
  nrm add aknpm http://192.168.2.243:4873
  ```
  - 使用 nrm use [registry] 切换源，切换成aknpm。再使用 nrm ls 可以看到*改至aknpm前，说明切换成功
  ```
  nrm use [registry]
  ```
  ![Image text](/doc/npm-img1.png)

  - 登录账号信息，运行以下命令行，输入账号密码邮箱等信息
  ```
  npm login in
  ```

  - 进入待发布的组件的根目录下，运行以下命令行,配置package.json文件，注意组件上传之前，根目录下的README文件描述要写好
  ```
  npm init
  ```
  ![Image text](/doc/npm-img3.png)
  - 配置完成以后，运行以下命令行发布完成
  ```
  npm publish
  ```

/*
 * @Author: xunzhaotech
 * @Email: luyb@xunzhaotech.com
 * @QQ: 1525572900
 * @LastEditors: xunzhaotech
 */
const webpack = require("webpack");
const { defineConfig } = require("@vue/cli-service");
const path = require("path");
const dayjs = require("dayjs");
const pkg = require("./package.json");
// const { config } = require("process");
const resolve = (dir) => path.join(__dirname, dir);
// chainWebpack: (config:Config) => {
console.log(path.resolve());
const __APP_INFO__ = {
  pkg,
  lastBuildTime: dayjs().format("YYYY-MM-DD HH:mm:ss"),
};
// 请求代理地址
const proxy = {
  "/dev": {
    target: "http://127.0.0.1:8001",
    changeOrigin: true,
    rewrite: (path) => path.replace(/^\/dev/, ""),
  },

  "/pro": {
    target: "https://show.cool-admin.com",
    changeOrigin: true,
    rewrite: (path) => path.replace(/^\/pro/, "/api"),
  },
  [process.env.VUE_APP_BASE_API]: {
    target: "http://192.168.50.88:8301/",
    changeOrigin: true,
    ws: false,
    pathRewrite: {
      ["^" + process.env.VUE_APP_BASE_API]: "",
    },
  },
  [process.env.VUE_APP_BASE_SOCKET_PATH]: {
    target: "http://192.168.50.88:8301/",
    changeOrigin: true,
    ws: false,
    pathRewrite: {
      ["^" + process.env.VUE_APP_BASE_SOCKET_PATH]: "",
    },
  },
};
const config = defineConfig({
  transpileDependencies: true,
  lintOnSave: true, //关闭eslint检查
  chainWebpack: (config) => {
    // config.devtool = "source-map";
    config.plugin("html").tap((args) => {
      args[0].title = "Micro Admin";
      return args;
    });
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@img", resolve("src/assets/img"))
      .set("@styl", resolve("src/assets/styl"))
      .set("@js", resolve("src/assets/js"))
      .set("@ts", resolve("src/assets/ts"))
      .set("@fonts", resolve("src/assets/fonts"))
      .set("@css", resolve("src/assets/css"))
      .set("@libs", resolve("src/libs"))
      .set("@components", resolve("src/components"))
      .set("@views", resolve("src/views"))
      .set("@plugins", resolve("src/plugins"))
      .end();
    // svg rule loader
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule.exclude.add(resolve("src/user")).end();
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/assets/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
      });
  },
  configureWebpack: (config) => {
    // 开启顶级await
    config.experiments = {
      topLevelAwait: true,
    };
    config.resolve.fallback = { path: require.resolve("path-browserify") };

    config.plugins.push(
      // 定义全局变量
      new webpack.DefinePlugin({
        __APP_INFO__: JSON.stringify(__APP_INFO__),
      })
    );
  },
  css: {
    extract: true,
    sourceMap: false,
    // lessOptions?
    // webpackImporter
    // additionalData
    // implementation
    loaderOptions: {
      sass: {
        // data: ''//`@import "@/assets/scss/mixin.scss";`
      },
      less: {
        lessOptions: {
          javascriptEnabled: true, //允许链式调用的换行
        },
      },
    },
  },
  devServer: {
    port: 8000,
    // If you want to turn on the proxy, please remove the mockjs /src/main.jsL11
    proxy: proxy,
  },
});
module.exports = config;

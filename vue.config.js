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
module.exports = defineConfig({
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
});

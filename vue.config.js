/*
 * @Author: xunzhaotech
 * @Email: luyb@xunzhaotech.com
 * @QQ: 1525572900
 * @LastEditors: xunzhaotech
 */
const { defineConfig } = require("@vue/cli-service");
const path = require("path");
// const { config } = require("process");
// const resolve = (dir: string) => path.join(__dirname, dir);
console.log(path.resolve());
module.exports = defineConfig({
  transpileDependencies: true,
  // chainWebpack: (config:Config) => {
  //   config.resolve.alias
  //   .set('@', resolve('src'))
  //   .set('@img',resolve('src/assets/img'))
  //   .set('@styl',resolve('src/assets/styl'))
  //   .set('@js',resolve('src/assets/js'))
  //   .set('@ts',resolve('src/assets/ts'))
  //   .set('@fonts', resolve('src/assets/fonts'))
  //   .set('@css', resolve('src/assets/css'))
  //   .set('@libs',resolve('src/libs'))
  //   .set('@cp',resolve('src/components'))
  //   .set('@views',resolve('src/views'))
  //   .set('@plugins',resolve('src/plugins'))
  //   .end()
  // },
});

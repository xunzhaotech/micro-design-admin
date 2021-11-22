/*
 * @Author: xunzhaotech
 * @Email: luyb@xunzhaotech.com
 * @QQ: 1525572900
 * @LastEditors: xunzhaotech
 */
import path from 'path'
import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import type { WebpackBundlerOptions } from '@vuepress/bundler-webpack'
// import { defineUserConfig } from '@vuepress/cli'
// import type { DefaultThemeOptions } from '@vuepress/theme-default'
const {
  locales,
  headConfig,
  themeConfig,
  markdown,
  plugins 
} = require('./config/')
export default defineUserConfig<DefaultThemeOptions>({
  /**
   * 站点配置(跟主题无关)
   */
  base: '/micro-design/',
  lang: 'zh-CN',
  title: '答神',
  description: 'Just playing around',
  head: headConfig,
  locales,
  /**
   * 主题配置
   */
  theme:'@vuepress/default',
  themeConfig,
  /**
   * 打包工具配置
   * 在使用 vuepress 包的时候，你可以忽略这个字段，因为 Webpack 是默认打包工具
   */
  bundler: '@vuepress/bundler-webpack',        // 打包工具的名称或简称
  bundlerConfig: {                             // 打包工具配置项

  },
  /**
   * 目录配置
   */
  dest: path.resolve(__dirname, './dist'),      // 指定 vuepress build 命令的输出目录
  temp: path.resolve(__dirname, './.temp'),     // 指定临时文件目录
  cache: path.resolve(__dirname, './.cache'),   // 指定缓存目录
  public: path.resolve(__dirname, './public'),  // 指定 Public 文件目录
  /**
   * Markdown 配置
   */
   markdown,
  /**
   * 开发配置项
   */
   debug: false,
   host: '0.0.0.0',
   port: 8080,
   open: false,
   pagePatterns: ['**/*.md', '!.vuepress', '!node_modules'],
  //  templateDev: '@vuepress/client/templates/index.dev.html',
  //  templateSSR: '@vuepress/client/templates/index.ssr.html',
   shouldPreload: true,
   shouldPrefetch: false,
  /**
   * 插件配置
   */
   plugins
})
/*
 * @Author: xunzhaotech
 * @Email: luyb@xunzhaotech.com
 * @QQ: 1525572900
 * @LastEditors: xunzhaotech
 */
// locales config
const locales = require('./localesConfig/')

// head config
const headConfig = require('./headConfig/')

// @vuepress/theme-default config
const themeConfig = require('./themeConfig/')

// Markdown config
const markdown = require('./markdownConfig/')

// plugins config
const plugins = require('./pluginsConfig/')

const config = {
    locales,
    headConfig,
    themeConfig,
    markdown,
    plugins
}

module.exports = config
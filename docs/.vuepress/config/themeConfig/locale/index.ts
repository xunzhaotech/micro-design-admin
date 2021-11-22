/*
 * @Author: xunzhaotech
 * @Email: luyb@xunzhaotech.com
 * @QQ: 1525572900
 * @LastEditors: xunzhaotech
 */
const en = require('./en/')
// 引入中文菜单
const zh = require('./zh/')
// 设置多语言菜单
// const localesConfig = {
//   '/': zh,
//   '/en/': en
// }
const localesConfig = {
    '/': zh,
    '/en/': en
  }
// 导出
module.exports = localesConfig
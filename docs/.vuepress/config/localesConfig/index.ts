/*
 * @Author: xunzhaotech
 * @Email: luyb@xunzhaotech.com
 * @QQ: 1525572900
 * @LastEditors: xunzhaotech
 */
const zhConfig = require('./zh/');
const enConfig = require('./en/');
module.exports = {
      '/': zhConfig,
      '/en/': enConfig,
    }
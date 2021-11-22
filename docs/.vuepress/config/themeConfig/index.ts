/*
 * @Author: xunzhaotech
 * @Email: luyb@xunzhaotech.com
 * @QQ: 1525572900
 * @LastEditors: xunzhaotech
 * @Description: Theme config
 */

const locale = require('./locale/')              // 多语言支持的各个语言 locales
const navbar = require('./navbar/')              // 导航栏配置
const sidebar = require('./sidebar/')            // 侧边栏配置
const themePlugins = require('./themePlugins/')  // 设置默认主题使用的插件
module.exports = {
    home: '/',                                     // 导航栏中 Logo 的链接
    navbar,                                        // 导航栏配置,禁用时themeConfig.navbar设置为false
    logo: '/favicon.ico',                          // Public 文件路径
    logoDark: '/favicon.ico',                      // 在夜间模式中使用的 Logo 图片的 URL
    darkMode: true,                                 // 是否启用切换夜间模式的功能
    /**
     * Git 仓库和编辑链接
     */
    repo: 'https://github.com/xunzhaotech',         // 项目仓库的 URL
    repoLabel:'仓库',                               // 项目仓库的标签
    selectLanguageText:'语言',                      // 选择语言菜单 的文字
    selectLanguageAriaLabel: '快智岛',              // 选择语言菜单 的 aria-label 属性
    selectLanguageName: '中文',                     // Locale 的语言名称
    sidebar,                                        // 侧边栏配置
    sidebarDepth: 2,                                // 设置根据页面标题自动生成的侧边栏的最大深度
    editLink: true,                                 // 是否启用 编辑此页 链接
    editLinkText:'编辑',                            // 编辑此页 链接的文
    editLinkPattern: ':repo/-/edit/:branch/:path',  // 编辑此页 链接的 Pattern
    docsRepo: 'https://github.com/xunzhaotech',     // 文档源文件的仓库 URL
    docsBranch: 'master',                           // 文档源文件的仓库分支
    docsDir: 'docs',                                // 文档源文件存放在仓库中的目录名
    lastUpdated: true,                              // 是否启用 最近更新时间戳
    lastUpdatedText: '最近更新',                     // 最近更新时间戳 标签的文字
    contributors: true,                             // 是否启用 贡献者列表 
    contributorsText: '贡献者:',                     // 贡献者列表 标签的文字
    tip: 'TIP',                                     // Tip 自定义容器 的默认标题
    warning: 'WARNING',                             // Warning 自定义容器 的默认标题 
    danger: 'DANGER',                               // Danger 自定义容器 的默认标题 
    notFound: ['Not Found','404','页面飞走了'],      // 当用户进入 404 页面时，会从数组中随机选取一条信息进行展示 
    backToHome: '返回首页',                          // 404 页面中 返回首页 链接的文字
    openInNewWindow: 'open in new window',          //  OutboundLink 链接内的 sr-only 文字
    toggleDarkMode: 'toggle dark mode',             // 切换夜间模式按钮的标题文字
    toggleSidebar: 'toggle sidebar',
    locales:locale,                                 // 多语言支持的各个语言 locales
    themePlugins,                                   // 设置默认主题使用的插件  
}
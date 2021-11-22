/*
 * @Author: xunzhaotech
 * @Email: luyb@xunzhaotech.com
 * @QQ: 1525572900
 * @LastEditors: xunzhaotech
 */
const markdown = {
    // 是否在每个代码块的左侧显示行号
    lineNumbers: false,
    // 影响 标题、目录、以及侧边栏链接的 id 和 链接
    slugify: false,
    // markdown-it-anchor (opens new window)的选项
    anchor: { permalink: true, permalinkBefore: true, permalinkSymbol: '#' },
    // vuepress-plugin-clean-urls
    pageSuffix:'.html',
    // 这个键值对将会作为特性被增加到是外部链接的 <a> 标签上
    externalLinks: { target: '_blank', rel: 'noopener noreferrer' },
    // markdown-it-table-of-contents
    toc: { includeLevel: [2, 3] },
    // 你可以使用 markdown.plugins 来安装 markdown-it 插件
    plugins:[],
    extendMarkdown: md => {
        // md.set({ breaks: true })
        // md.use(require('markdown-it-xxx'))
    },
    // this.$page.headers VuePress 会提取 h2 和 h3 标题
    extractHeaders: [ 'h2', 'h3', 'h4' ]
}
module.exports = markdown
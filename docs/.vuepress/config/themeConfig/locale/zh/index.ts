/*
 * @Author: xunzhaotech
 * @Email: luyb@xunzhaotech.com
 * @QQ: 1525572900
 * @LastEditors: xunzhaotech
 */
module.exports = {
    // 首页的路径
    home: '/',
    // 导航栏配置
    navbar: [
      { text: '首页', link: '/',target:'_self', rel:'' },
      { 
        text: '教程', 
        children:[
          {
            text: '原型',
            children: ['/pages/course/prototype.md'],
          },
          {
            text: '设计',
            children: ['/pages/course/ui.md'],
          },
          {
            text: '前端',
            children: ['/pages/course/frontend.md'],
          },
          {
            text: '后端',
            children: ['/pages/course/backend.md'],
          },
          {
            text: '测试',
            children: ['/pages/course/test.md'],
          },
          {
            text: '运维',
            children: ['/pages/course/deploy.md'],
          },
          {
            text: '营销',
            children: ['/pages/course/operate.md'],
          }
        ]
      },
      // { 
      //   text: '生态', 
      //   items:[
      //     { 
      //       text: '框架', 
      //       ariaLabel: 'Language Menu',
      //       items: [
      //         { text: '脚手架', link: 'zh/pages/cli/' },
      //         { text: '组件', link: '/pages/components/' }
      //       ] 
      //     },
      //     { 
      //       text: '项目', 
      //       // items: [
      //       //   { text: 'Vue', link: '/pages/project/vue/' },
      //       //   { text: 'React', link: '/pages/project/react/' },
      //       //   { text: 'Angular', link: '/pages/project/angular/' },
      //       //   { text: 'Wechat', link: '/pages/project/wechat/' },
      //       //   { text: 'Micrcservice', link: '/pages/project/micrcservice/' }
      //       // ] 
      //     }
      //   ]
      // },
    //   { text: '外包', link: '/pages/outsource/' },
    //   {
    //     text: '规范',link: '/pages/standard/'},
    //   {
    //     text: '团队',
    //     link: '/pages/about/',
    //   },
    //   {
    //     text: '工具',
    //     link: '/pages/tools/',
    //     // items: [
    //     //   {
    //     //     text: '前端开发工具',
    //     //     items: [
    //     //       {
    //     //         text: 'VS Code',
    //     //         link: 'https://code.visualstudio.com/',
    //     //       },
    //     //     ],
    //     //   },
    //     //   {
    //     //     text: '后端开发工具',
    //     //     items: [
    //     //       {
    //     //         text: 'IDEA',
    //     //         link: 'https://www.jetbrains.com/idea/',
    //     //       },
    //     //     ],
    //     //   },
    //     // ]
    //   },
    //   {
    //     text: '视频',
    //     link: '/pages/videos/',
    //   },
    //   {
    //     text: '商店',
    //     link: '/pages/store/',
    //   }
    ],
    // logo配置
    logo: '',
    // 在夜间模式中使用的 Logo 图片的 URL
    logoDark: '',
    // 项目仓库的 URL
    repo: '',
    // 项目仓库的标签
    repoLabel: '仓库',
    // 选择语言菜单 的文字
    selectLanguageText: '简体中文',
    // 选择语言菜单 的 aria-label 属性
    selectLanguageAriaLabel: '简体中文',
    // Locale 的语言名称
    selectLanguageName: '简体中文',
    // 侧边栏配置
    sidebar: 'auto',
    // 设置根据页面标题自动生成的侧边栏的最大深度
    sidebarDepth: 2,
    // 是否启用 编辑此页 链接
    editLink: true,
    // 编辑此页 链接的文字
    editLinkText: '在 GitHub 上编辑此页',
    // 编辑此页 链接的 Pattern
    docsRepo: 'https://gitlab.com/owner/name',
    docsBranch: 'master',
    docsDir: 'docs',
    // 编辑此页 链接的 Pattern
    editLinkPattern: ':repo/-/edit/:branch/:path',
    // 是否启用 最近更新时间戳
    lastUpdated: true,
    // 最近更新时间戳 标签的文字
    lastUpdatedText: '最近更新:',
    // 是否启用 贡献者列表
    contributors:true,
    // 贡献者列表 标签的文字
    contributorsText: 'dasheng',
    // Tip 自定义容器 的默认标题
    tip: 'TIP',
    // Warning 自定义容器 的默认标题
    warning: 'WARNING',
    // Danger 自定义容器 的默认标题
    danger: 'DANGER',
    // 404 页面的提示信息
    notFound: ['Not Found'],
    // 404 页面中 返回首页 链接的文字
    backToHome: 'Back to home',
    // 它主要是为了站点的可访问性 (a11y)
    openInNewWindow: 'open in new window',
    // 切换夜间模式按钮的标题文字
    toggleDarkMode: 'toggle dark mode',
    // 切换侧边栏按钮的标题文字
    toggleSidebar: 'toggle sidebar',
    // 设置默认主题使用的插件
    themePlugins: {
      // 是否启用 @vuepress/plugin-active-header-links
      activeHeaderLinks:true,
      // 是否启用由 @vuepress/plugin-container 支持的自定义容器
      // container: '',
      git: true,
      // 是否启用 @vuepress/plugin-medium-zoom
      mediumZoom: true,
      // 是否启用 @vuepress/plugin-nprogress
      nprogress: true
    }
  }

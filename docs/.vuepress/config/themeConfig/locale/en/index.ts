/*
 * @Author: xunzhaotech
 * @Email: luyb@xunzhaotech.com
 * @QQ: 1525572900
 * @LastEditors: xunzhaotech
 */
module.exports = {
    home: '/',
    navbar: [
      { text: 'Home', link: '/en/',target:'_self', rel:'' },
      { 
        text: 'Course', 
        children:[
          {
            text: 'prototype',
            children: ['/en/pages/course/prototype.md'],
          },
          {
            text: 'ui',
            children: ['/en/pages/course/ui.md'],
          },
          {
            text: 'frontend',
            children: ['/en/pages/course/frontend.md'],
          },
          {
            text: 'backend',
            children: ['/en/pages/course/backend.md'],
          },
          {
            text: 'test',
            children: ['/en/pages/course/test.md'],
          },
          {
            text: 'deploy',
            children: ['/en/pages/course/deploy.md'],
          },
          {
            text: 'operate',
            children: ['/en/pages/course/operate.md'],
          }
        ]
      },
    ],
    logo: '/images/hero.png',
    logoDark:'/images/hero.png',
    darkMode: true,
    repo: 'https://gitlab.com/foo/bar',
    repoLabel: 'GitHub',
    selectLanguageText: 'English',
    selectLanguageAriaLabel: 'English',
    selectLanguageName: 'English',
    sidebar: 'auto',
    sidebarDepth: 2,
    editLink: true,
    editLinkText: 'Edit this page on GitHub',
    editLinkPattern: '',
    docsRepo: 'https://gitee.com/mfeui/micro-design.git',
    docsBranch: 'hotfix',
    docsDir: 'https://gitee.com/mfeui/micro-design/tree/master/docs',
    lastUpdated: true,
    lastUpdatedText: true,
    selectText: 'Languages',
    contributors: true,
    contributorsText: 'Contributors',
    tip: 'TIP',
    warning: 'WARNING',
    danger: 'DANGER',
    notFound: ['Not Found'],
    backToHome: 'Back to home',
    openInNewWindow: 'open in new window',
    toggleDarkMode: 'toggle dark mode',
    toggleSidebar: 'toggle sidebar',
    themePlugins: {
      activeHeaderLinks:true,
      backToTop: true,
      // container: true,
      git: true,
      mediumZoom: true,
      nprogress: true,
    }
}

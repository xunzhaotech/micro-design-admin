/*
 * @Author: xunzhaotech
 * @Email: luyb@xunzhaotech.com
 * @QQ: 1525572900
 * @LastEditors: xunzhaotech
 */
module.exports = [
    {
      text: '首页',
      link: '/',
      activeMatch: '/',
    },
    {
      text: '教程',
      link: '/'
    },
    {
      text: '生态',
      link: '/'
    },
    // {
    //   text: '工具',
    //   children: [
    //     {
    //       text: '前端开发工具',
    //       children: [
    //         {
    //           text: 'VS Code',
    //           link: 'https://code.visualstudio.com/',
    //           // 该元素将一直处于激活状态
    //           activeMatch: '/',
    //         },
    //       ],
    //     },
    //     {
    //       text: '后端开发工具',
    //       children: [
    //         {
    //           text: 'IDEA',
    //           link: 'https://www.jetbrains.com/idea/',
    //           // 该元素将一直处于激活状态
    //           activeMatch: '/',
    //         },
    //       ],
    //     },
    //   ]
    // },
    // {
    //   text: '规范',
    //   children: ['/pages/standard/前端规范编码.md', '/pages/standard/后端规范编码.md']
    // },
    // {
    //   text: '团队',
    //   link: '/pages/about/',
    // },
    // {
    //   text: 'Languages',
    //   ariaLabel: 'Language Menu',
    //   items: [
    //     { text: 'Chinese', link: '/language/chinese/' },
    //     { text: 'Japanese', link: '/language/japanese/' }
    //   ]
    // }
      // NavbarGroup
      // {
      //   text: '前端',
      //   children: ['/pages/frontend/foo.md', '/pages/frontend/bar.md'],
      // },
      // 字符串 - 页面文件路径
      // '/bar/README.md',
      // 嵌套 Group - 最大深度为 2
      // {
      //   text: 'Group',
      //   children: [
      //     {
      //       text: 'SubGroup',
      //       children: ['/group/sub/foo.md', '/group/sub/bar.md'],
      //     },
      //   ],
      // },
      // 控制元素何时被激活
      // {
      //   text: '前端',
      //   children: [
      //     {
      //       text: 'Always active',
      //       link: '/',
      //       // 该元素将一直处于激活状态
      //       activeMatch: '/',
      //     },
      //     {
      //       text: 'Active on /foo/',
      //       link: '/not-foo/',
      //       // 该元素在当前路由路径是 /foo/ 开头时激活
      //       // 支持正则表达式
      //       activeMatch: '^/foo/',
      //     },
      //   ],
      // },
]

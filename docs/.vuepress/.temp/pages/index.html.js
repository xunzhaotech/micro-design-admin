export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "home": true,
    "heroAlt": "快智岛",
    "heroText": "快智岛",
    "tagline": "快智岛",
    "actions": [
      {
        "text": "在线预览",
        "link": "/guide/",
        "type": "primary"
      },
      {
        "text": "项目简介",
        "link": "/guide/",
        "type": "secondary"
      }
    ],
    "features": [
      {
        "title": "简洁至上",
        "details": "以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。"
      },
      {
        "title": "Vue 驱动",
        "details": "享受 Vue 的开发体验，可以在 Markdown 中使用 Vue 组件，又可以使用 Vue 来开发自定义主题。"
      },
      {
        "title": "企业级架构",
        "details": "开发和服务于企级后台产品"
      }
    ],
    "footer": "<p>IT Licensed | Copyright © 2018-present Evan You</p>",
    "footerHtml": true
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "安装",
      "slug": "安装",
      "children": []
    },
    {
      "level": 2,
      "title": "项目创建",
      "slug": "项目创建",
      "children": []
    },
    {
      "level": 2,
      "title": "版本",
      "slug": "版本",
      "children": []
    }
  ],
  "filePathRelative": "README.md",
  "git": {
    "updatedTime": 1637570873000,
    "contributors": [
      {
        "name": "luyb",
        "email": "luyb@xunzhaotech.com",
        "commits": 2
      }
    ]
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}

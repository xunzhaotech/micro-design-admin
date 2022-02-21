export const data = {
  "key": "v-2d0a870d",
  "path": "/en/",
  "title": "",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "heroImage": "/favicon.ico",
    "heroText": "kuaizhidao",
    "heroAlt": "kuaizhidao",
    "tagline": "A professional knowledge platform for winners!",
    "pageClass": "custom-page-home",
    "actions": [
      {
        "text": "在线预览",
        "link": "/en/guide/",
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
        "title": "Simple",
        "details": "Standardize project structure to make development to deployment easier"
      },
      {
        "title": "Efficient",
        "details": "Simplify configuration and focus on business development"
      },
      {
        "title": "Rich",
        "details": "Rich and perfect ecology, simpler development"
      }
    ],
    "footer": "Copyright © 2016-2021 Yue ICP Bei No. 17008007 Guangzhou Xun Information Technology Co., Ltd. all rights reserved",
    "footerHtml": true
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "en/README.md",
  "git": {
    "updatedTime": 1637570873000,
    "contributors": [
      {
        "name": "luyb",
        "email": "luyb@xunzhaotech.com",
        "commits": 1
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

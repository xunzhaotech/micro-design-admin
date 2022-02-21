export const siteData = {
  "base": "/micro-design-admin/",
  "lang": "zh-CN",
  "title": "答神",
  "description": "Just playing around",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ]
  ],
  "locales": {
    "/": {
      "lang": "zh-CN",
      "title": "答神",
      "description": "一个为全面解答而创造的知识平台!",
      "head": [
        [
          "link",
          {
            "rel": "icon",
            "href": "/favicon.ico"
          }
        ]
      ]
    },
    "/en/": {
      "lang": "en-US",
      "title": "KUAIZHIDAO",
      "description": "Vue-powered Static Site Generator",
      "head": [
        [
          "link",
          {
            "rel": "icon",
            "href": "/favicon.ico"
          }
        ]
      ]
    }
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}

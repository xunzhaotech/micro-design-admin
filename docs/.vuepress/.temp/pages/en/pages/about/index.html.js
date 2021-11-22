export const data = {
  "key": "v-80d1d30c",
  "path": "/en/pages/about/",
  "title": "脚手架",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "en/pages/about/README.md",
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

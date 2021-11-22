export const data = {
  "key": "v-5422904e",
  "path": "/en/pages/templates/",
  "title": "学习目录",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "en/pages/templates/README.md",
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

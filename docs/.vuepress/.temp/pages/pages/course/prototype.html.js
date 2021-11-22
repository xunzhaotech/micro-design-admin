export const data = {
  "key": "v-f00d6a72",
  "path": "/pages/course/prototype.html",
  "title": "原型",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "pages/course/prototype.md",
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

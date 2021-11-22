export const data = {
  "key": "v-e6412400",
  "path": "/en/guide/",
  "title": "快速入门",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "适合人群",
      "slug": "适合人群",
      "children": []
    },
    {
      "level": 2,
      "title": "环境要求",
      "slug": "环境要求",
      "children": []
    }
  ],
  "filePathRelative": "en/guide/README.md",
  "git": {
    "updatedTime": null,
    "contributors": []
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

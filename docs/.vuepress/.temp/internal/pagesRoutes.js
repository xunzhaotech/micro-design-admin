import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","",["/index.html","/README.md"]],
  ["v-2d0a870d","/en/","",["/en/index.html","/en/README.md"]],
  ["v-fffb8e28","/guide/","快速入门",["/guide/index.html","/guide/README.md"]],
  ["v-e6412400","/en/guide/","快速入门",["/en/guide/index.html","/en/guide/README.md"]],
  ["v-7f8dff34","/pages/about/","",["/pages/about/index.html","/pages/about/README.md"]],
  ["v-4f968e33","/pages/cli/","",["/pages/cli/index.html","/pages/cli/README.md"]],
  ["v-19f2e413","/pages/components/BASE.html","基础组件使用说明文档",["/pages/components/BASE","/pages/components/BASE.md"]],
  ["v-1d73c304","/pages/components/BUSINESS.html","业务组件使用说明文档",["/pages/components/BUSINESS","/pages/components/BUSINESS.md"]],
  ["v-18603796","/pages/components/","",["/pages/components/index.html","/pages/components/README.md"]],
  ["v-10e08eec","/pages/outsource/","",["/pages/outsource/index.html","/pages/outsource/README.md"]],
  ["v-3f8fb495","/pages/course/backend.html","后端",["/pages/course/backend","/pages/course/backend.md"]],
  ["v-27985efc","/pages/course/deploy.html","运维",["/pages/course/deploy","/pages/course/deploy.md"]],
  ["v-913323ea","/pages/course/design.html","设计",["/pages/course/design","/pages/course/design.md"]],
  ["v-39d8ea37","/pages/course/frontend.html","Vue3入门实践指南",["/pages/course/frontend","/pages/course/frontend.md"]],
  ["v-19f9f0b6","/pages/course/operate.html","运营",["/pages/course/operate","/pages/course/operate.md"]],
  ["v-430c7b30","/pages/course/project.html","部署",["/pages/course/project","/pages/course/project.md"]],
  ["v-f00d6a72","/pages/course/prototype.html","原型",["/pages/course/prototype","/pages/course/prototype.md"]],
  ["v-b7fa4892","/pages/course/test.html","测试",["/pages/course/test","/pages/course/test.md"]],
  ["v-21f84ef5","/pages/course/ui.html","UI",["/pages/course/ui","/pages/course/ui.md"]],
  ["v-6dfc8758","/pages/standard/ANDROID.html","Android 规范",["/pages/standard/ANDROID","/pages/standard/ANDROID.md"]],
  ["v-bb6d310c","/pages/standard/IOS.html","iOS规范",["/pages/standard/IOS","/pages/standard/IOS.md"]],
  ["v-1aafb724","/pages/standard/","规范",["/pages/standard/index.html","/pages/standard/README.md"]],
  ["v-402454dc","/pages/store/","",["/pages/store/index.html","/pages/store/README.md"]],
  ["v-ac2156f2","/pages/study/guide.html","操作指引",["/pages/study/guide","/pages/study/guide.md"]],
  ["v-401f44ac","/pages/study/","技术分享",["/pages/study/index.html","/pages/study/Readme.md"]],
  ["v-06b4b78c","/pages/templates/","学习目录",["/pages/templates/index.html","/pages/templates/README.md"]],
  ["v-3d47b850","/pages/tools/","",["/pages/tools/index.html","/pages/tools/README.md"]],
  ["v-47ef133d","/pages/videos/APP%E7%9B%B4%E6%92%AD%E6%B5%81%E7%A8%8B.html","禾沐康APP直播流程",["/pages/videos/APP直播流程.html","/pages/videos/APP%E7%9B%B4%E6%92%AD%E6%B5%81%E7%A8%8B","/pages/videos/APP直播流程.md","/pages/videos/APP%E7%9B%B4%E6%92%AD%E6%B5%81%E7%A8%8B.md"]],
  ["v-adccfb9a","/pages/videos/","",["/pages/videos/index.html","/pages/videos/README.md"]],
  ["v-bada069c","/pages/videos/%E6%8A%80%E6%9C%AF%E6%A0%88%E8%AF%B4%E6%98%8E.html","技术栈",["/pages/videos/技术栈说明.html","/pages/videos/%E6%8A%80%E6%9C%AF%E6%A0%88%E8%AF%B4%E6%98%8E","/pages/videos/技术栈说明.md","/pages/videos/%E6%8A%80%E6%9C%AF%E6%A0%88%E8%AF%B4%E6%98%8E.md"]],
  ["v-aaf26d4a","/pages/videos/%E6%B7%B7%E5%90%88APP%E6%89%93%E5%8C%85.html","技术文档",["/pages/videos/混合APP打包.html","/pages/videos/%E6%B7%B7%E5%90%88APP%E6%89%93%E5%8C%85","/pages/videos/混合APP打包.md","/pages/videos/%E6%B7%B7%E5%90%88APP%E6%89%93%E5%8C%85.md"]],
  ["v-6a7eaa78","/pages/videos/%E7%A6%BE%E6%B2%90%E5%BA%B7APP%E5%8A%9F%E8%83%BD%E5%8F%8A%E6%8A%80%E6%9C%AF%E8%AF%A6%E8%A7%A3.html","禾沐康App功能及技术详解",["/pages/videos/禾沐康APP功能及技术详解.html","/pages/videos/%E7%A6%BE%E6%B2%90%E5%BA%B7APP%E5%8A%9F%E8%83%BD%E5%8F%8A%E6%8A%80%E6%9C%AF%E8%AF%A6%E8%A7%A3","/pages/videos/禾沐康APP功能及技术详解.md","/pages/videos/%E7%A6%BE%E6%B2%90%E5%BA%B7APP%E5%8A%9F%E8%83%BD%E5%8F%8A%E6%8A%80%E6%9C%AF%E8%AF%A6%E8%A7%A3.md"]],
  ["v-80d1d30c","/en/pages/about/","脚手架",["/en/pages/about/index.html","/en/pages/about/README.md"]],
  ["v-dc29cd72","/en/pages/cli/","脚手架",["/en/pages/cli/index.html","/en/pages/cli/README.md"]],
  ["v-85d271b2","/en/pages/components/BASE.html","基础组件使用说明文档",["/en/pages/components/BASE","/en/pages/components/BASE.md"]],
  ["v-11f007d0","/en/pages/components/BUSINESS.html","业务组件使用说明文档",["/en/pages/components/BUSINESS","/en/pages/components/BUSINESS.md"]],
  ["v-e81f0abe","/en/pages/components/","模板组件使用说明文档",["/en/pages/components/index.html","/en/pages/components/README.md"]],
  ["v-5d991f01","/en/pages/course/backend.html","后端",["/en/pages/course/backend","/en/pages/course/backend.md"]],
  ["v-99452ed4","/en/pages/course/deploy.html","运维",["/en/pages/course/deploy","/en/pages/course/deploy.md"]],
  ["v-7e90061f","/en/pages/course/design.html","设计",["/en/pages/course/design","/en/pages/course/design.md"]],
  ["v-4606656a","/en/pages/course/frontend.html","前端",["/en/pages/course/frontend","/en/pages/course/frontend.md"]],
  ["v-110c7211","/en/pages/course/operate.html","运营",["/en/pages/course/operate","/en/pages/course/operate.md"]],
  ["v-6115e59c","/en/pages/course/project.html","部署",["/en/pages/course/project","/en/pages/course/project.md"]],
  ["v-4951ca33","/en/pages/course/prototype.html","原型",["/en/pages/course/prototype","/en/pages/course/prototype.md"]],
  ["v-98cb3b88","/en/pages/course/","课程",["/en/pages/course/index.html","/en/pages/course/README.md"]],
  ["v-61c92e6a","/en/pages/course/test.html","测试",["/en/pages/course/test","/en/pages/course/test.md"]],
  ["v-5a391109","/en/pages/course/ui.html","UI",["/en/pages/course/ui","/en/pages/course/ui.md"]],
  ["v-4f0ca49e","/en/pages/outsource/","k;lk;lk",["/en/pages/outsource/index.html","/en/pages/outsource/README.md"]],
  ["v-2f5506c4","/en/pages/standard/ANDROID.html","Android 规范",["/en/pages/standard/ANDROID","/en/pages/standard/ANDROID.md"]],
  ["v-4b7b0634","/en/pages/standard/IOS.html","iOS规范",["/en/pages/standard/IOS","/en/pages/standard/IOS.md"]],
  ["v-589365da","/en/pages/standard/","规范",["/en/pages/standard/index.html","/en/pages/standard/README.md"]],
  ["v-416828b4","/en/pages/store/","",["/en/pages/store/index.html","/en/pages/store/README.md"]],
  ["v-55f03cca","/en/pages/study/guide.html","操作指引",["/en/pages/study/guide","/en/pages/study/guide.md"]],
  ["v-41631884","/en/pages/study/","技术分享",["/en/pages/study/index.html","/en/pages/study/Readme.md"]],
  ["v-5422904e","/en/pages/templates/","学习目录",["/en/pages/templates/index.html","/en/pages/templates/README.md"]],
  ["v-3e8b8c28","/en/pages/tools/","",["/en/pages/tools/index.html","/en/pages/tools/README.md"]],
  ["v-6cd3cda9","/en/pages/videos/APP%E7%9B%B4%E6%92%AD%E6%B5%81%E7%A8%8B.html","禾沐康APP直播流程",["/en/pages/videos/APP直播流程.html","/en/pages/videos/APP%E7%9B%B4%E6%92%AD%E6%B5%81%E7%A8%8B","/en/pages/videos/APP直播流程.md","/en/pages/videos/APP%E7%9B%B4%E6%92%AD%E6%B5%81%E7%A8%8B.md"]],
  ["v-d503a2c2","/en/pages/videos/","",["/en/pages/videos/index.html","/en/pages/videos/README.md"]],
  ["v-24a5361e","/en/pages/videos/%E6%8A%80%E6%9C%AF%E6%A0%88%E8%AF%B4%E6%98%8E.html","技术栈",["/en/pages/videos/技术栈说明.html","/en/pages/videos/%E6%8A%80%E6%9C%AF%E6%A0%88%E8%AF%B4%E6%98%8E","/en/pages/videos/技术栈说明.md","/en/pages/videos/%E6%8A%80%E6%9C%AF%E6%A0%88%E8%AF%B4%E6%98%8E.md"]],
  ["v-6128f872","/en/pages/videos/%E6%B7%B7%E5%90%88APP%E6%89%93%E5%8C%85.html","技术文档",["/en/pages/videos/混合APP打包.html","/en/pages/videos/%E6%B7%B7%E5%90%88APP%E6%89%93%E5%8C%85","/en/pages/videos/混合APP打包.md","/en/pages/videos/%E6%B7%B7%E5%90%88APP%E6%89%93%E5%8C%85.md"]],
  ["v-31e7dbe4","/en/pages/videos/%E7%A6%BE%E6%B2%90%E5%BA%B7APP%E5%8A%9F%E8%83%BD%E5%8F%8A%E6%8A%80%E6%9C%AF%E8%AF%A6%E8%A7%A3.html","禾沐康App功能及技术详解",["/en/pages/videos/禾沐康APP功能及技术详解.html","/en/pages/videos/%E7%A6%BE%E6%B2%90%E5%BA%B7APP%E5%8A%9F%E8%83%BD%E5%8F%8A%E6%8A%80%E6%9C%AF%E8%AF%A6%E8%A7%A3","/en/pages/videos/禾沐康APP功能及技术详解.md","/en/pages/videos/%E7%A6%BE%E6%B2%90%E5%BA%B7APP%E5%8A%9F%E8%83%BD%E5%8F%8A%E6%8A%80%E6%9C%AF%E8%AF%A6%E8%A7%A3.md"]],
  ["v-0f7a7432","/pages/project/angular/","",["/pages/project/angular/index.html","/pages/project/angular/README.md"]],
  ["v-4dddc7b8","/pages/project/micrcservice/","",["/pages/project/micrcservice/index.html","/pages/project/micrcservice/README.md"]],
  ["v-b1f7872c","/pages/project/react/","",["/pages/project/react/index.html","/pages/project/react/README.md"]],
  ["v-4d6c087a","/pages/project/vue/","",["/pages/project/vue/index.html","/pages/project/vue/README.md"]],
  ["v-4220af2f","/pages/project/wechat/","",["/pages/project/wechat/index.html","/pages/project/wechat/README.md"]],
  ["v-235b52fb","/en/pages/project/angular/","",["/en/pages/project/angular/index.html","/en/pages/project/angular/README.md"]],
  ["v-0f364724","/en/pages/project/micrcservice/","",["/en/pages/project/micrcservice/index.html","/en/pages/project/micrcservice/README.md"]],
  ["v-41760304","/en/pages/project/react/","",["/en/pages/project/react/index.html","/en/pages/project/react/README.md"]],
  ["v-453c32d7","/en/pages/project/vue/","",["/en/pages/project/vue/index.html","/en/pages/project/vue/README.md"]],
  ["v-11f82f9b","/en/pages/project/wechat/","",["/en/pages/project/wechat/index.html","/en/pages/project/wechat/README.md"]],
  ["v-3706649a","/404.html","",["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)

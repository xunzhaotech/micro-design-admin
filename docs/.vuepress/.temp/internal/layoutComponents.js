import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("D:/项目资料/project/micro-design-admin/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("D:/项目资料/project/micro-design-admin/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}

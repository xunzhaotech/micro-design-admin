<!--
 * @Author: xunzhaotech
 * @Email: luyb@xunzhaotech.com
 * @QQ: 1525572900
 * @LastEditors: xunzhaotech
-->
<template>
  <micro-layout
    :locale="locale"
    v-model:collapsed="baseState.collapsed"
    v-model:selectedKeys="baseState.selectedKeys"
    v-model:openKeys="baseState.openKeys"
    iconfont-url="//at.alicdn.com/t/font_2804900_nzigh7z84gc.js"
  >
  </micro-layout>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
// import type { RouteContextProps } from "micro-design-layout";
import { reactive } from "vue";
// import {message,Button,Input,Switch,Select,Avatar,Space,Badge,Menu,} from "ant-design-vue";
import { getMenuData, clearMenuItem } from "micro-design-layout";

const locale = (i18n: string) => i18n;
const router = useRouter();

const { menuData } = getMenuData(clearMenuItem(router.getRoutes()));
console.log(menuData);

const baseState = reactive({
  collapsed: true, // default value
  openKeys: ["/dashboard"],
  selectedKeys: ["/welcome"],
});
// const layoutConf = reactive({
//   navTheme: "dark",
//   layout: "mix",
//   splitMenus: false,
//   menuData,
// });
// export default class BasicLayout extends Vue {}
</script>

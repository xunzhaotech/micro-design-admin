<!--
 * @Author: xunzhaotech
 * @Email: luyb@xunzhaotech.com
 * @QQ: 1525572900
 * @LastEditors: xunzhaotech
-->
<template>
  <div id="PageView">
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "BasicLayout",
  components: {},
  setup() {
    const state = reactive({
      splitMenus: true,
      title: "MicroLayout",
      logo: "https://alicdn.antdv.com/v2/assets/logo.1ef800a8.svg",
      navTheme: "dark",
      layout: "side",
      fixSiderbar: true,
    });

    return {
      state,
    };
  },
});
</script>
<style lang="less" scoped>
@import "index";
</style>

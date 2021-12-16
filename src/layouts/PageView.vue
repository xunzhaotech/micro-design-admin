<!--
 * @Author: xunzhaotech
 * @Email: luyb@xunzhaotech.com
 * @QQ: 1525572900
 * @LastEditors: xunzhaotech
-->
<template>
  <router-view />
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

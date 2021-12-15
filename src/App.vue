<!--
 * @Author: xunzhaotech
 * @Email: luyb@xunzhaotech.com
 * @QQ: 1525572900
 * @LastEditors: xunzhaotech
-->
<template>
  <a-config-provider :getPopupContainer="getPopupContainer">
    <router-view />
  </a-config-provider>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    const getPopupContainer = (el: Element, dialogContext: any) => {
      if (dialogContext) {
        return dialogContext.getDialogWrap();
      }
      return document.body;
    };
    return {
      getPopupContainer,
    };
  },
});
</script>
<style lang="less">
#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #fff;
}
</style>

<!--
 * @Author: xunzhaotech
 * @Email: luyb@xunzhaotech.com
 * @QQ: 1525572900
 * @LastEditors: xunzhaotech
-->
<template>
  <div id="userLayout"></div>
  <router-view />
  <div class="footer">
    <div class="links">
      <a href="_self">帮助</a>
      <a href="_self">隐私</a>
      <a href="_self">条款</a>
    </div>
    <div class="copyright">Copyright &copy; 2018 vueComponent</div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref, watchEffect } from "vue";
import { useRouter } from "vue-router";
import {
  message,
  Button,
  Input,
  Switch,
  Select,
  Avatar,
  Space,
  Badge,
  Menu,
} from "ant-design-vue";
import {
  getMenuData,
  clearMenuItem,
  WaterMark,
  FooterToolbar,
} from "micro-design-layout";
import type { RouteContextProps } from "micro-design-layout";

const i18n = (t: string) => t;

export default defineComponent({
  name: "BasicLayout",
  components: {
    FooterToolbar,
    WaterMark,

    [Button.name]: Button,
    [Input.name]: Input,
    [Input.Search.name]: Input.Search,
    [Switch.name]: Switch,
    [Select.name]: Select,
    [Select.Option.displayName!]: Select.Option,
    [Space.name]: Space,
    [Badge.name]: Badge,
    [Avatar.name]: Avatar,
    [Menu.Item.name]: Menu.Item,
  },
  setup() {
    const loading = ref(false);

    const router = useRouter();
    const { menuData } = getMenuData(clearMenuItem(router.getRoutes()));

    const baseState = reactive<Omit<RouteContextProps, "menuData">>({
      selectedKeys: [],
      openKeys: [],
      collapsed: false,
    });

    const state = reactive({
      menuData,
      splitMenus: true,
      title: "MicroLayout",
      logo: "https://alicdn.antdv.com/v2/assets/logo.1ef800a8.svg",
      navTheme: "dark",
      layout: "side",
      fixSiderbar: true,
    });
    const breadcrumb = computed(() =>
      router.currentRoute.value.matched.concat().map((item) => {
        return {
          path: item.path,
          breadcrumbName: item.meta.title || "",
        };
      })
    );

    const handleCollapsed = () => {
      baseState.collapsed = !baseState.collapsed;
    };
    watchEffect(() => {
      if (router.currentRoute) {
        const matched = router.currentRoute.value.matched.concat();
        baseState.selectedKeys = matched
          .filter((r) => r.name !== "index")
          .map((r) => r.path);
        baseState.openKeys = matched
          .filter((r) => r.path !== router.currentRoute.value.path)
          .map((r) => r.path);
      }
    });

    function handlePageLoadingClick() {
      loading.value = true;
      setTimeout(() => {
        loading.value = false;
      }, 2000);
    }

    return {
      i18n,
      baseState,
      state,
      loading,
      breadcrumb,

      handlePageLoadingClick,
      handleCollapsed,
      handleSearch: () => {
        message.info("search..");
      },
    };
  },
});
</script>

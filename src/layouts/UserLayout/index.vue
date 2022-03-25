<!--
 * @Author: xunzhaotech
 * @Email: luyb@xunzhaotech.com
 * @QQ: 1525572900
 * @LastEditors: xunzhaotech
-->
<template>
  <div id="userLayout" :class="['user-layout-wrapper', isMobile && 'mobile']">
    <div class="container">
      <header>MicroAdmin</header>
      <router-view />
      <footer class="footer">
        <div class="links">
          <a href="_self">帮助</a>
          <a href="_self">隐私</a>
          <a href="_self">条款</a>
        </div>
        <div class="copyright">Copyright &copy; 2020 vueComponent</div>
      </footer>
    </div>
  </div>
</template>
<script lang="ts">
// import { ref } from "vue";
import { Options, Vue } from "vue-class-component";
// import { Options, setup, Vue } from "vue-class-component";
import { deviceMixin } from "@/mixins/device-mixin";
// import { computed, defineComponent, reactive, ref, watchEffect } from "vue";
// import { useRouter } from "vue-router";
// import type { RouteContextProps } from "micro-design-layout";
import {
  // message,
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
  // getMenuData,
  // clearMenuItem,
  WaterMark,
  FooterToolbar,
} from "micro-design-layout";

// const i18n = (t: string) => t;
@Options({
  name: "UserLayout",
  mixins: [deviceMixin],
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
  data() {
    return {
      isMobile: true,
      bigsize: false,
      columns: [],
      dataSource: [],
    };
  },
  methods: {
    sizeClick() {
      this.$data.bigsize = !this.$data.bigsize;
    },
  },
  computed: {},
  mounted() {
    document.body.classList.add("userLayout");

    console.log(document.body.classList);
  },
  beforeDestroy() {
    document.body.classList.remove("userLayout");
  },
})
export default class UserLayout extends Vue {
  isMobile = true;
  public flag = 2;
  private columns: any = [];
  private dataSource: any = [];
  // msg!: string;
  // flag!: string;
  public initVar!: string;
  public mounted(): void {
    this.initVar = "测试";
  }

  // @prop(Boolean) private xsmall: boolean | undefined;
  // @prop(Boolean) private small: boolean | undefined;
  // @prop(Boolean) private large: boolean | undefined;
  // @prop(Boolean) private xlarge: boolean | undefined;
}

// export default defineComponent({
//   name: "BasicLayout",
//   components: {
//     FooterToolbar,
//     WaterMark,

//     [Button.name]: Button,
//     [Input.name]: Input,
//     [Input.Search.name]: Input.Search,
//     [Switch.name]: Switch,
//     [Select.name]: Select,
//     [Select.Option.displayName!]: Select.Option,
//     [Space.name]: Space,
//     [Badge.name]: Badge,
//     [Avatar.name]: Avatar,
//     [Menu.Item.name]: Menu.Item,
//   },
//   setup() {
//     const loading = ref(false);

//     const router = useRouter();
//     const { menuData } = getMenuData(clearMenuItem(router.getRoutes()));

//     const baseState = reactive<Omit<RouteContextProps, "menuData">>({
//       selectedKeys: [],
//       openKeys: [],
//       collapsed: false,
//     });

//     const state = reactive({
//       menuData,
//       splitMenus: true,
//       title: "MicroLayout",
//       logo: "https://alicdn.antdv.com/v2/assets/logo.1ef800a8.svg",
//       navTheme: "dark",
//       layout: "side",
//       fixSiderbar: true,
//     });
//     const breadcrumb = computed(() =>
//       router.currentRoute.value.matched.concat().map((item) => {
//         return {
//           path: item.path,
//           breadcrumbName: item.meta.title || "",
//         };
//       })
//     );

//     const handleCollapsed = () => {
//       baseState.collapsed = !baseState.collapsed;
//     };
//     watchEffect(() => {
//       if (router.currentRoute) {
//         const matched = router.currentRoute.value.matched.concat();
//         baseState.selectedKeys = matched
//           .filter((r) => r.name !== "index")
//           .map((r) => r.path);
//         baseState.openKeys = matched
//           .filter((r) => r.path !== router.currentRoute.value.path)
//           .map((r) => r.path);
//       }
//     });

//     function handlePageLoadingClick() {
//       loading.value = true;
//       setTimeout(() => {
//         loading.value = false;
//       }, 2000);
//     }

//     return {
//       i18n,
//       baseState,
//       state,
//       loading,
//       breadcrumb,

//       handlePageLoadingClick,
//       handleCollapsed,
//       handleSearch: () => {
//         message.info("search..");
//       },
//     };
//   },
// });
</script>
<style lang="less" scoped>
@import "index";
</style>

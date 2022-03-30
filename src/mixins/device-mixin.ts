import { createNamespacedHelpers, useStore } from "vuex";
import { computed } from "vue";
const { mapState, mapActions } = createNamespacedHelpers("user"); // 通过这个函数来辅助我们找到user模块
const store = useStore();
console.log(mapState);
console.log(mapActions);
const deviceMixin = {
  // computed: {
  //   ...mapState({
  //       token: state => state.token, //指定模块后，这里默认就是获取user下面的state了
  // })
  // state
  isMobile: computed(() => store.state.app.isMobile),
  // getter
  // double: computed(() => store.getters.doubleCount),
  // mutations
  // increment: () => store.commit("countIncrement"),
  // actions
  // asyncIncrement: () => store.dispatch("asyncCountIncrement"),
  // computed: {
  //   ...mapState({
  //     isMobile: (state) => state.app.isMobile,
  //   }),
  // },
  // computed: {
  //   ...mapState({
  //     layout: {state) => state.app.layout,
  //     navTheme: state => state.app.theme,
  //     primaryColor: state => state.app.color,
  //     colorWeak: state => state.app.weak,
  //     fixedHeader: state => state.app.fixedHeader,
  //     fixedSidebar: state => state.app.fixedSidebar,
  //     contentWidth: state => state.app.contentWidth,
  //     autoHideHeader: state => state.app.autoHideHeader,
  //     isMobile: state => state.app.isMobile,
  //     sideCollapsed: state => state.app.sideCollapsed,
  //     multiTab: state => state.app.multiTab
  //   }),
  //   isTopMenu () {
  //     return this.layout === "topmenu"
  //   }
  // },
  // methods: {
  //   isSideMenu () {
  //     return !this.isTopMenu
  //   }
  // }
};

export { deviceMixin };

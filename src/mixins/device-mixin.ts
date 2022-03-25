import { useStore } from "vuex";
import { computed } from "vue";
const store = useStore();
const deviceMixin = {
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

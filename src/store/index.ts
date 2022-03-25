// import { createApp } from "vue";
import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import RootSateTypes from "@/interface/store/rootStateTypes";
// import state from "./state";
// import mutations from "./mutations";
// import actions from "./actions";
// import getters from "./getters";
// import app from "./modules/app";
// 定义 injection key
// export const key: InjectionKey<Store<State>> = Symbol();

// import { createPinia } from "pinia";
// const store = createPinia();
// export default store;
// read modules files
// const files = require.context("./modules", false, /\.ts$/);
// const modules: { [key: string]: string } = {};

// 导入所有modules模块
// files.keys().forEach((key): void => {
//   modules[key.replace(/\.\/|\.js/g, "")] = files(key).default;
// });

// 导入所有 vuex 模块，自动加入namespaced:true，用于解决vuex命名冲突
// Object.keys(modules).forEach((key) => {
//   modules[key]["namespaced"] = true;
// });
// const store = createStore({
//   state,
//   getters,
//   mutations,
//   actions,
//   modules,
// });
// const store = createStore<RootSateTypes>({
//   state() {
//     return {
//       count: 1,
//       list: ["a", "b", "c"],
//     };
//   },
//   mutations: {
//     increment(state: any): void {
//       state.count++;
//     },
//   },
// });
const store = createStore<RootSateTypes>({
  state: {
    isMobile: "",
  },
  getters: {},
  mutations: {
    increment(state: any): void {
      state.count++;
    },
  },
  actions: {},
  modules: {},
});
export const key: InjectionKey<Store<RootSateTypes>> = Symbol("vue-store");
export default store;

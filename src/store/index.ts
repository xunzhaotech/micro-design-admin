// import { createApp } from "vue";
import { createStore } from "vuex";
import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
// import getters from "./getters";
import app from "./modules/app";
// 定义 injection key
// export const key: InjectionKey<Store<State>> = Symbol();
export default createStore({
  state,
  // getters,
  mutations,
  actions,
  modules: {
    app,
  },
});
// import { createPinia } from "pinia";
// const store = createPinia();
// export default store;

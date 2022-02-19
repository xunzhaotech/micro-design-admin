import { createStore } from "vuex";
export interface State {
  count: number;
}
// 定义 injection key
// export const key: InjectionKey<Store<State>> = Symbol();
export default createStore<State>({
  state: {
    count: 0,
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
// import { createPinia } from "pinia";
// const store = createPinia();
// export default store;

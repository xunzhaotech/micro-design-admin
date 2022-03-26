// const state = {
//   user: {},
// };
// const mutations = {
//   SET_USER: (state: any, user: any) => {
//     state.user = user;
//   },
// };
// const actions = {};
// export default {
//   state,
//   mutations,
//   actions,
// };
export const app = {
  namespace: true,
  state: {
    menuList: [1, 2, 3, 4, 5, 6],
  },
  getters: {
    menuList: (state: any) => state.menuList,
  },
  mutations: {
    setMenuList: (state: { menuList: any }, menu: any) => {
      state.menuList = menu;
    },
  },
  // action: {
  //   menuFun(store: any, data: any ) => {
  //     store.commit("setMenuList", data)
  //   }
  // }
};

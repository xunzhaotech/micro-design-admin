// import { commit } from "vuex";
const state = {
  username: "admin",
  total: 0,
  accessToken: "admin",
  avatar: "随意设置",
  rolename: "随意设置",
  userList: [{ name: "admin", age: 29 }],
};
const getters = {
  accessToken: (state: any) => state.accessToken,
  username: (state: any) => state.username,
  rolename: (state: any) => state.rolename,
  avatar: (state: any) => state.avatar,
  userList: (state: any) => state.userList,
  total: (state: any) => state.total,
};

const mutations = {
  setAccessToken(state: any, accessToken: any) {
    // 设置accessToken
    state.accessToken = accessToken;
  },
  setUsername(state: any, username: any) {
    // 设置用户名
    state.username = username;
  },
  setRolename(state: any, rolename: any) {
    // 设置权限名
    state.rolename = rolename;
  },
  setAvatar(state: any, avatar: any) {
    // 设置头像
    state.avatar = avatar;
  },
  setUserList(state: any, list: any) {
    // 设置用户列表
    state.userList = list;
  },
  setTotal(state: any, total: any) {
    state.total = total;
  },
};
// const actions = {
//   testActions({ commit }, num: any) {
//     setTimeout(() => {
//       commit("setTotal", num);
//       console.log(num);
//     }, 2000);
//   },
// };
// export default { state, getters, mutations, actions };
export default { state, getters, mutations };

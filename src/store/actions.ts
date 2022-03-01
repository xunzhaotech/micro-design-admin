import { IState, ITodo } from "@/typings/ingex";
import { SIDEBAR_TYPE, TOGGLE_MOBILE_TYPE } from "@/store/mutation-types";
import { Commit } from "vuex";

interface ICtx {
  commit: Commit;
  state: IState;
}
export default {
  [SIDEBAR_TYPE]({ commit }: ICtx, todo: ITodo): void {
    commit(SIDEBAR_TYPE, todo);
  },
  [TOGGLE_MOBILE_TYPE]({ commit }: ICtx, todoList: ITodo[]): void {
    commit(TOGGLE_MOBILE_TYPE, todoList);
  },
};

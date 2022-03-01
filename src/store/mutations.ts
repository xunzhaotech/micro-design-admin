import { IState, ITodo, TODO_STATUS } from "@/typings/ingex";
import {
  SIDEBAR_TYPE,
  TOGGLE_MOBILE_TYPE,
  TOGGLE_NAV_THEME,
  TOGGLE_LAYOUT,
  TOGGLE_FIXED_HEADER,
} from "@/store/mutation-types";

export default {
  [SIDEBAR_TYPE](state: IState, todo: ITodo): void {
    state.list = [todo, ...state.list];
  },
  [TOGGLE_MOBILE_TYPE](state: IState, todoList: ITodo[]): void {
    state.list = todoList;
  },
  [TOGGLE_NAV_THEME](state: IState, id: number) {
    state.list = state.list.filter((item: ITodo) => item.id != id);
  },
  [TOGGLE_LAYOUT](state: IState, id: number) {
    state.list = state.list.map((item: ITodo) => {
      if (item.id === id) {
        switch (item.status) {
          case TODO_STATUS.FINISHED:
            item.status = TODO_STATUS.WILLDO;
            break;
          case TODO_STATUS.WILLDO:
            item.status = TODO_STATUS.FINISHED;
            break;
          case TODO_STATUS.DOING:
            item.status = TODO_STATUS.FINISHED;
            break;
          default:
            break;
        }
      }
      return item;
    });
  },
  [TOGGLE_FIXED_HEADER](state: IState, id: number) {
    state.list = state.list.map((item: ITodo) => {
      if (item.id != id) {
        if (item.status === TODO_STATUS.DOING) {
          item.status = TODO_STATUS.WILLDO;
        }
      } else {
        item.status =
          item.status === TODO_STATUS.WILLDO
            ? TODO_STATUS.DOING
            : TODO_STATUS.WILLDO;
      }
      return item;
    });
  },
};

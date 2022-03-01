enum TODO_STATUS {
  FINISHED = "finished",
  WILLDO = "willdo",
  DOING = "doing",
}

interface ITodo {
  id: number;
  content: string;
  status: TODO_STATUS;
}

interface IState {
  list: ITodo[];
}

export { TODO_STATUS, ITodo, IState };

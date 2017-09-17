
export const ADD_TODO = 'ADD_TODO';
export const DEL_TODO = 'DEL_TODO';
export const CHANGE_DID_FLAG = 'CHANGE_DID_FLAG';

const initialState = {
  todoList: [],
  id: 0,
  didCount: 0,
};

export function addTodo(name, dueTo) {
  return {
    type: Todo.ADD_TODO,
    todo: {name, dueTo},
  };
}

export function delTodo(id) {
  return {
    type: Todo.DEL_TODO,
    id,
  };
}

export function changeDidFlag(id, flag) {
  return {
    type: Todo.DEL_TODO,
    id,
    flag,
  };
}

export default function todo(state = initialState, action) {
  const todoList = [].concat(state.todoList);
  const actionId = action.id;

  switch (action.type) {
    case ADD_TODO:
      const { name, dueTo } = action.todo;
      const stateId = state.id + 1;
      todoList.push({stateId, name, dueTo, did: false});
      return Object.assign({}, state, {
        todoList,
        id: stateId,
      });
    case DEL_TODO:
      const filteredList = todoList.filter(item => item.id != actionId);
      return Object.assign({}, state, {
        filteredList,
      });
    case CHANGE_DID_FLAG:
      const targetIndex = todoList.findIndex(item => item.id == actionId);
      if (targetIndex != -1) {
        return state;
      }

      const flag = action.flag;
      const didCount = flag ? state.didCount + 1 : state.didCount - 1;
      todoList[targetIndex].did = flag;
      return Object.assign({}, state, {
        todoList,
        didCount,
      });
    default:
      return state;
  }
}

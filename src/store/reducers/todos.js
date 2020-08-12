/* eslint-disable indent */
import {
  ADD_TODO_ITEM,
  INPUT_TITLE_HANDLER,
  REMOVE_TODO_ITEM,
  LOCALSTORAGE_GET,
  LOCALSTORAGE_SET,
  CHECK_ITEM,
} from '../actions/actionTypes';

const initialState = {
  todosArray: [],
  todoTitle: '',
};

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case LOCALSTORAGE_GET:
      return {
        ...state,
        todosArray: action.localTodos,
      };
    case INPUT_TITLE_HANDLER:
      return {
        ...state,
        todoTitle: action.title,
      };
    case ADD_TODO_ITEM:
      state.todosArray.push({
        id: Date.now(),
        title: state.todoTitle,
        completed: false,
      });

      return state;
    case CHECK_ITEM: {
      return {
        ...state,
        todosArray: state.todosArray.map(item => {
          if (item.id === action.id) {
            item.completed = !item.completed;
          }
          return item;
        }),
      };
    }
    case REMOVE_TODO_ITEM:
      return {
        ...state,
        todosArray: state.todosArray.filter(
          element => element.id !== action.id,
        ),
      };
    case LOCALSTORAGE_SET:
      window.localStorage.setItem('todoItem', JSON.stringify(state.todosArray));
      return state;
    default:
      return state;
  }
}

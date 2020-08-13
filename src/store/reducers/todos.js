/* eslint-disable indent */
import {
  ADD_TODO_ITEM,
  INPUT_TITLE_HANDLER,
  REMOVE_TODO_ITEM,
  LOCALSTORAGE_GET,
  LOCALSTORAGE_SET,
  CHECK_ITEM,
  TODO_BY_ID,
} from '../actions/actionTypes';

const initialState = {
  todosArray: [],
  todoTitle: '',
  todo: '',
};

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case LOCALSTORAGE_GET:
      return {
        ...state,
        todosArray: action.localTodos,
      };
    case TODO_BY_ID:
      return {
        ...state,
        todo: state.todosArray,
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
        todosList: action.todosList,
      });

      return state;
    case CHECK_ITEM: {
      console.log(action.id, action.index);
      return {
        ...state,
        todosArray: state.todosArray.map(item => {
          if (item.id === action.id) {
            item.todosList.map((itemCheck, index) => {
              if (index === action.index) {
                itemCheck.completed = !itemCheck.completed;
              }
              return itemCheck;
            });
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

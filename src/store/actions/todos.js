import {
  ADD_TODO_ITEM,
  INPUT_TITLE_HANDLER,
  REMOVE_TODO_ITEM,
  LOCALSTORAGE_GET,
  LOCALSTORAGE_SET,
  CHECK_ITEM,
  TODO_BY_ID,
} from './actionTypes';

export function localstorageGet(localTodos) {
  return {
    type: LOCALSTORAGE_GET,
    localTodos,
  };
}

export function todoById(id) {
  return {
    type: TODO_BY_ID,
    id,
  };
}

export function addTodoItem(todosList) {
  return dispatch => {
    dispatch(addTodoItems(todosList));
    dispatch(localSet());
  };
}

function addTodoItems(todosList) {
  return {
    type: ADD_TODO_ITEM,
    todosList,
  };
}

export function checkItem(todoId, todoIndex) {
  return dispatch => {
    dispatch(checkItems(todoId, todoIndex));
    dispatch(localSet());
  };
}

function checkItems(id, index) {
  return {
    type: CHECK_ITEM,
    id,
    index,
  };
}

export function removeTodoItem(id) {
  return dispatch => {
    dispatch(removeTodoItems(id));
    dispatch(localSet());
  };
}

function removeTodoItems(id) {
  return {
    type: REMOVE_TODO_ITEM,
    id,
  };
}

export function inputTitleHandler(title) {
  return {
    type: INPUT_TITLE_HANDLER,
    title,
  };
}

function localSet() {
  return {
    type: LOCALSTORAGE_SET,
  };
}

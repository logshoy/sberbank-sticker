import {
  ADD_TODO_ITEM,
  INPUT_TITLE_HANDLER,
  REMOVE_TODO_ITEM,
  LOCALSTORAGE_GET,
  LOCALSTORAGE_SET,
  CHECK_ITEM,
} from './actionTypes';

export function localstorageGet(localTodos) {
  return {
    type: LOCALSTORAGE_GET,
    localTodos,
  };
}

export function addTodoItem() {
  return dispatch => {
    dispatch(addTodoItems());
    dispatch(localSet());
  };
}

function addTodoItems() {
  return {
    type: ADD_TODO_ITEM,
  };
}

export function checkItem(id) {
  return dispatch => {
    dispatch(checkItems(id));
    dispatch(localSet());
  };
}

function checkItems(id) {
  return {
    type: CHECK_ITEM,
    id,
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

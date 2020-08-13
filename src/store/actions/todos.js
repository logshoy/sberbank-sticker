import {
  ADD_TODO_ITEM,
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

export function addTodoItem(todoTitle, todosList) {
  return dispatch => {
    dispatch(addTodoItems(todoTitle, todosList));
    dispatch(localSet());
  };
}

function addTodoItems(todoTitle, todosList) {
  return {
    type: ADD_TODO_ITEM,
    todoTitle,
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

function localSet() {
  return {
    type: LOCALSTORAGE_SET,
  };
}

import {
  ADD_TODO_ITEM,
  REMOVE_TODO_ITEM,
  LOCALSTORAGE_GET,
  LOCALSTORAGE_SET,
  CHECK_ITEM,
  TODO_BY_ID,
  CHANGE_BY_ID,
} from './actionTypes';

export function localstorageGet(localTodos) {
  return {
    type: LOCALSTORAGE_GET,
    localTodos,
  };
}

export function todoById(byId) {
  return {
    type: TODO_BY_ID,
    byId,
  };
}

export function addTodoItem(todosTitle, todosList) {
  return dispatch => {
    dispatch(addTodoItems(todosTitle, todosList));
    dispatch(localSet());
  };
}

function addTodoItems(todosTitle, todosList) {
  return {
    type: ADD_TODO_ITEM,
    todosTitle,
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

export function changeById(id, title, todosList) {
  return dispatch => {
    dispatch(changeByIds(id, title, todosList));
    dispatch(localSet());
  };
}

function changeByIds(id, title, todosList) {
  return {
    type: CHANGE_BY_ID,
    id,
    title,
    todosList,
  };
}

function localSet() {
  return {
    type: LOCALSTORAGE_SET,
  };
}

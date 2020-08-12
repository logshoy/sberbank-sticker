import { combineReducers } from 'redux';
import todosReducer from './todos';
import modalReducer from './modal';

export default combineReducers({
  todos: todosReducer,
  modal: modalReducer,
});

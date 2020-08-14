import React, { useEffect } from 'react';
import TodoCreate from '../TodoCreate';
import TodoList from '../TodoList';
import DeletePostModal from '../components/DeletePostModal.js';
import { connect } from 'react-redux';
import { localstorageGet } from '../store/actions/todos';

function Main(props) {
  useEffect(() => {
    const todos = Array.from(
      JSON.parse(window.localStorage.getItem('todoItem')),
    );
    props.localstorageGet(todos);
    // eslint-disable-next-line
  }, []); 

  return (
    <div className="container">
      <TodoCreate />
      <TodoList todos={props.todosArray} />
      <DeletePostModal />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    todosArray: state.todos.todosArray,
    todoTitle: state.todos.todoTitle,
  };
}

function mapDispathToProps(dispatch) {
  return {
    localstorageGet: todos => dispatch(localstorageGet(todos)),
  };
}
export default connect(mapStateToProps, mapDispathToProps)(Main);

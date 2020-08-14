import React, { useEffect } from 'react';
import TodoList from '../TodoList';
import ModalRoot from '../components/ModalRoot';
import { connect } from 'react-redux';
import { localstorageGet } from '../store/actions/todos';
import { showModal } from '../store/actions/modal';

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
      <button onClick={() => props.showModal('SHOW_CREATE_TODO')}>
        Создать список
      </button>
      <TodoList todos={props.todosArray} />
      <ModalRoot />
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
    showModal: (modalType, modalProps) => {
      dispatch(showModal(modalType, modalProps));
    },
  };
}
export default connect(mapStateToProps, mapDispathToProps)(Main);

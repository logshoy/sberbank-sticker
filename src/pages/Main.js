import React from 'react';
import TodoList from '../components/TodoItem/TodoList';
import { connect } from 'react-redux';
import { localstorageGet } from '../store/actions/todos';
import { showModal } from '../store/actions/modal';

function Main(props) {
  const newArray = [...props.todosArray];

  return (
    <div className="container">
      <h1>Заметки Тестовое задание для Сбербанка</h1>
      <button
        className="button"
        onClick={() => props.showModal('SHOW_CREATE_TODO')}
      >
        Создать заметку
      </button>
      <h2>Список задач:</h2>
      <TodoList todos={newArray.reverse()} />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    todosArray: state.todos.todosArray,
    todoTitle: state.todos.todoTitle,
    modalData: state.modal,
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

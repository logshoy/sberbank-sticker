import React from 'react';
import TodoList from '../TodoList';
import ModalRoot from '../components/ModalRoot';
// import SimpleModal from '../components/SimpleModal';
import Modal from '../components/Modal';
import { connect } from 'react-redux';
import { localstorageGet } from '../store/actions/todos';
import { showModal } from '../store/actions/modal';

function Main(props) {
  return (
    <div className="container">
      <button onClick={() => props.showModal('SHOW_CREATE_TODO')}>
        Создать список
      </button>
      <TodoList todos={props.todosArray} />
      <ModalRoot />
      {/* <SimpleModal /> */}
      {props.modalData.modalType ? <Modal /> : null}
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

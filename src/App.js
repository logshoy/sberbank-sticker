import React, { useEffect } from 'react';
import Main from './pages/Main';
import EditPost from './pages/EditPost';
import Modal from './components/Modal/Modal';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { localstorageGet } from './store/actions/todos';

function App(props) {
  useEffect(() => {
    if (window.localStorage.getItem('todoItem') !== null) {
      const todos = Array.from(
        JSON.parse(window.localStorage.getItem('todoItem')),
      );
      props.localstorageGet(todos);
    }
    // eslint-disable-next-line
  }, []); 

  return (
    <>
      <Route path="/" exact component={Main} />
      <Route path="/todo/:id" exact component={EditPost} />
      {props.modalData.modalType ? <Modal /> : null}
    </>
  );
}

function mapStateToProps(state) {
  return {
    todosArray: state.todos.todosArray,
    modalData: state.modal,
  };
}

function mapDispathToProps(dispatch) {
  return {
    localstorageGet: todos => dispatch(localstorageGet(todos)),
  };
}

export default connect(mapStateToProps, mapDispathToProps)(App);

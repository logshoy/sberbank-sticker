import React, { useEffect } from 'react';
import Main from './pages/Main';
import EditPost from './pages/EditPost';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { localstorageGet } from './store/actions/todos';

function App(props) {
  useEffect(() => {
    const todos = Array.from(
      JSON.parse(window.localStorage.getItem('todoItem')),
    );
    props.localstorageGet(todos);
    // eslint-disable-next-line
  }, []); 

  return (
    <>
      <Route path="/" exact component={Main} />
      <Route path="/todo/:id" exact component={EditPost} />
    </>
  );
}

function mapStateToProps(state) {
  return {
    todosArray: state.todos.todosArray,
  };
}

function mapDispathToProps(dispatch) {
  return {
    localstorageGet: todos => dispatch(localstorageGet(todos)),
  };
}

export default connect(mapStateToProps, mapDispathToProps)(App);

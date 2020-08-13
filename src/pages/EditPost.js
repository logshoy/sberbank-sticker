import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { todoById } from '../store/actions/todos';

function EditPost(props) {
  useEffect(() => {
    props.todoById(props.match.params.id);
    // eslint-disable-next-line
  }, []);

  const consoleHandler = () => {
    console.log(props);
  };
  return (
    <>
      <h1>Я меняюсь</h1>
      <Link to="/">Изменить</Link>
      {consoleHandler()}
      {props.match.params.id}
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
    todoById: id => dispatch(todoById(id)),
  };
}

export default connect(mapStateToProps, mapDispathToProps)(EditPost);

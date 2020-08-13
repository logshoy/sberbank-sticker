import React from 'react';
import TodoItem from './TodoItem';
import { connect } from 'react-redux';

function TodoList(props) {
  return (
    <ul>
      {props.todos.map(item => (
        <TodoItem key={item.id} {...item} />
      ))}
    </ul>
  );
}

function mapStateToProps(state) {
  return {
    todos: state.todos.todosArray,
  };
}

function mapDispathToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispathToProps)(TodoList);

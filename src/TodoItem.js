import React from 'react';
import { connect } from 'react-redux';
import { removeTodoItem, checkItem } from './store/actions/todos';

function TodoItem(props) {
  const cls = ['todo'];

  if (props.completed) {
    cls.push('completed');
  }
  return (
    <li className={cls.join(' ')}>
      <label>
        <input
          type="checkbox"
          checked={props.completed}
          onChange={props.checkItem.bind(this, props.id)}
        />
        <span>{props.title}</span>
        <i
          className="material-icons red-text"
          onClick={props.removeTodoItem.bind(this, props.id)}
        >
          delete
        </i>
      </label>
    </li>
  );
}

function mapDispathToProps(dispatch) {
  return {
    removeTodoItem: id => dispatch(removeTodoItem(id)),
    checkItem: id => dispatch(checkItem(id)),
  };
}

export default connect(null, mapDispathToProps)(TodoItem);

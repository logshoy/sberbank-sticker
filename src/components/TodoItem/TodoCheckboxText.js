import React from 'react';
import { connect } from 'react-redux';
import { checkItem } from '../../store/actions/todos';

function TodoCheckboxText(props) {
  const cls = ['todoCheck'];
  if (props.completed) {
    cls.push('completed');
  }

  return (
    <div className={cls.join(' ')}>
      <label>
        <input
          type="checkbox"
          checked={props.completed}
          onChange={() => props.checkItem(props.id, props.index)}
        />
        <div></div>
      </label>
      <span>{props.name}</span>
    </div>
  );
}

function mapDispathToProps(dispatch) {
  return {
    checkItem: (todoId, todoIndex) => dispatch(checkItem(todoId, todoIndex)),
  };
}

export default connect(null, mapDispathToProps)(TodoCheckboxText);

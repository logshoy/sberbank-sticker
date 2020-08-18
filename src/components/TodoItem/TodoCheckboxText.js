import React from 'react';

function TodoCheckboxText(props) {
  const cls = ['todoCheck'];
  if (props.completed) {
    cls.push('completed');
  }

  return (
    <div className={cls.join(' ')}>
      <label>
        <input type="checkbox" checked={props.completed} disabled />
        <div className="todoCheck__text"></div>
      </label>
      <span>{props.name}</span>
    </div>
  );
}

export default TodoCheckboxText;

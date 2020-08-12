import React from 'react';
import { connect } from 'react-redux';
import { addTodoItem, inputTitleHandler } from './store/actions/todos';

function TodoCreate(props) {
  const inputTitle = e => {
    const value = e.target.value;
    props.inputTitleHandler(value);
  };

  const addTodo = event => {
    if (event.key === 'Enter') {
      props.addTodoItem();
      props.inputTitleHandler('');
    }
  };

  return (
    <div className="create-todo">
      <h1>Todo app</h1>
      <div className="input-field">
        <input
          type="text"
          placeholder="Title"
          value={props.todoTitle}
          onChange={inputTitle}
          onKeyPress={addTodo}
        />
      </div>
      <hr />
      <div className="input-field">
        <input
          type="text"
          placeholder="Task"
          // value={props.todoTitle}
          // onChange={inputTitle}
          // onKeyPress={addTodo}
        />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    todoTitle: state.todos.todoTitle,
  };
}

function mapDispathToProps(dispatch) {
  return {
    inputTitleHandler: title => dispatch(inputTitleHandler(title)),
    addTodoItem: () => dispatch(addTodoItem()),
  };
}

export default connect(mapStateToProps, mapDispathToProps)(TodoCreate);

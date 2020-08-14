import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodoItem, inputTitleHandler } from './store/actions/todos';

function TodoCreate(props) {
  const [todos, addTodos] = useState(['']);

  const inputTitle = e => {
    const value = e.target.value;
    props.inputTitleHandler(value);
  };

  const addTodo = event => {
    if (event.key === 'Enter') {
      props.addTodoItem(todos);
      addTodos([]);
      props.inputTitleHandler('');
    }
  };

  const addTodoItem = () => {
    addTodos([...todos, '']);
  };

  const handleChange = (e, index) => {
    todos[index] = {
      name: e.target.value,
      completed: false,
    };
    addTodos([...todos]);
  };

  const handleRemove = index => {
    todos.splice(index, 1);
    addTodos([...todos]);
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
      {todos.map((todo, index) => {
        return (
          <div className="input-createTodo" key={index}>
            <input
              type="text"
              placeholder="Task"
              onChange={e => handleChange(e, index)}
              value={todo.name}
            />
            <button onClick={e => handleRemove(e)}>Remove</button>
          </div>
        );
      })}
      <button onClick={addTodoItem}>Add checkbox</button>
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
    addTodoItem: todosList => dispatch(addTodoItem(todosList)),
  };
}

export default connect(mapStateToProps, mapDispathToProps)(TodoCreate);

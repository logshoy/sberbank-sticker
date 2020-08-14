import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodoItem } from './store/actions/todos';
import { hideModal } from './store/actions/modal';

function TodoCreate(props) {
  const [todosTitle, setTodosTitle] = useState(['']);
  const [todos, addTodos] = useState(['']);

  const addTodo = event => {
    if (event.key === 'Enter') {
      props.addTodoItem(todosTitle, todos);
      addTodos([]);
      hideModal();
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
          value={todosTitle}
          onChange={event => setTodosTitle(event.target.value)}
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
      <button onClick={props.hideModal}>TodoCreate</button>
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
    addTodoItem: (todosTitle, todosList) => {
      dispatch(addTodoItem(todosTitle, todosList));
    },
    hideModal: () => dispatch(hideModal()),
  };
}

export default connect(mapStateToProps, mapDispathToProps)(TodoCreate);

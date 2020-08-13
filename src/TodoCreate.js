import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodoItem } from './store/actions/todos';

function TodoCreate(props) {
  const [todoTitle, setTodoTitle] = useState('');
  const [todos, addTodos] = useState([]);

  const addTodo = event => {
    if (event.key === 'Enter') {
      props.addTodoItem(todoTitle, todos);
      setTodoTitle('');
      addTodos([]);
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
          value={todoTitle}
          onChange={event => setTodoTitle(event.target.value)}
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

function mapDispathToProps(dispatch) {
  return {
    addTodoItem: (todoTitle, todosList) =>
      dispatch(addTodoItem(todoTitle, todosList)),
  };
}

export default connect(null, mapDispathToProps)(TodoCreate);

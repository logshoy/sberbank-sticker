import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodoItem } from '../../store/actions/todos';
import { hideModal } from '../../store/actions/modal';

function TodoCreate(props) {
  const [todosTitle, setTodosTitle] = useState(['']);
  const [todos, addTodos] = useState([
    {
      name: '',
      completed: false,
    },
  ]);

  const addTodo = event => {
    if (event.key === 'Enter') {
      props.addTodoItem(todosTitle, todos);
      addTodos([]);
      props.hideModal();
    }
  };

  const addCheckboxItem = () => {
    addTodos([
      ...todos,
      {
        name: '',
        completed: false,
      },
    ]);
  };

  const handleChange = (e, index) => {
    todos[index].name = e.target.value;
    addTodos([...todos]);
  };

  const checkItem = (completed, index) => {
    todos[index].completed = !completed;
    addTodos([...todos]);
  };

  const handleRemove = index => {
    todos.splice(index, 1);
    addTodos([...todos]);
  };

  const addTodoItem = () => {
    props.addTodoItem(todosTitle, todos);
    addTodos([]);
    props.hideModal();
  };

  return (
    <div className="create-todo">
      <h1>Создать заметку</h1>
      <div>
        <input
          type="text"
          placeholder="Название заметки"
          value={todosTitle}
          onChange={event => setTodosTitle(event.target.value)}
          onKeyPress={addTodo}
        />
      </div>
      {todos.map((todo, index) => {
        const cls = ['todoCheck'];
        if (todo.completed) {
          cls.push('completed');
        }
        return (
          <div className={cls.join(' ')} key={index}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => checkItem(todo.completed, index)}
              />
              <div></div>
            </label>
            <input
              type="text"
              placeholder="Задание"
              onChange={e => handleChange(e, index)}
              value={todo.name}
            />
            <button className="button--delete" onClick={e => handleRemove(e)}>
              &times;
            </button>
          </div>
        );
      })}
      <div className="button-add">
        <button className="btn-circle" onClick={addCheckboxItem}>
          +
        </button>
      </div>
      <div className="buttons">
        <button className="button" onClick={addTodoItem}>
          Сохранить
        </button>
        <button className="button" onClick={props.hideModal}>
          Закрыть
        </button>
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
    addTodoItem: (todosTitle, todosList) => {
      dispatch(addTodoItem(todosTitle, todosList));
    },
    hideModal: () => dispatch(hideModal()),
  };
}

export default connect(mapStateToProps, mapDispathToProps)(TodoCreate);

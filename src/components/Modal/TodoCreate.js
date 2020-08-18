import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodoItem } from '../../store/actions/todos';
import { hideModal } from '../../store/actions/modal';

function TodoCreate(props) {
  const [todosTitle, setTodosTitle] = useState('');
  const [todo, addTodos] = useState([
    {
      name: '',
      completed: false,
    },
  ]);

  const addTodo = event => {
    if (event.key === 'Enter') {
      props.addTodoItem(todosTitle, todo);
      props.hideModal();
    }
  };

  const addCheckboxItem = () => {
    addTodos([
      ...todo,
      {
        name: '',
        completed: false,
      },
    ]);
  };

  const handleChange = (e, index) => {
    todo[index].name = e.target.value;
    addTodos([...todo]);
  };

  const checkItem = (completed, index) => {
    todo[index].completed = !completed;
    addTodos([...todo]);
  };

  const handleRemoveTodo = i => {
    if (i > -1) {
      todo.splice(i, 1);
      addTodos([...todo]);
    }
  };

  const addTodoItem = () => {
    props.addTodoItem(todosTitle, todo);
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
      <ul>
        {todo.map((todo, index) => {
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
                <div className="todoCheck__text"></div>
              </label>
              <input
                type="text"
                placeholder="Задание"
                onChange={e => handleChange(e, index)}
                value={todo.name}
              />
              <button
                type="button"
                className="button--delete"
                onClick={() => handleRemoveTodo(index)}
              >
                &times;
              </button>
              <div></div>
            </div>
          );
        })}
      </ul>
      <div className="button-add">
        <button className="btn-circle" onClick={addCheckboxItem}>
          +
        </button>
      </div>
      <div className="buttons">
        <button className="button" onClick={addTodoItem} disabled={!todosTitle}>
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

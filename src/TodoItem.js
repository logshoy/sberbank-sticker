import React from 'react';
import { connect } from 'react-redux';
import { removeTodoItem, checkItem } from './store/actions/todos';
import { Link } from 'react-router-dom';
import { showModal } from './store/actions/modal';

function TodoItem(props) {
  return (
    <li className="todoItem">
      <div className="todo-header">
        <span>{props.title}</span>
        <Link className="todoItem__change" to={'/todo/' + props.id}>
          Изменить
        </Link>
        <div
          className="todoItem__delete"
          onClick={() => props.showModal(props.id)}
        >
          Удалить
        </div>
      </div>

      {props.todosList.map((item, index) => {
        const cls = ['todoCheck'];
        if (item.completed) {
          cls.push('completed');
        }
        return (
          <li key={index} className={cls.join(' ')}>
            <label>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => props.checkItem(props.id, index)}
              />
              <span></span>
            </label>
            <span>{item.name}</span>
          </li>
        );
      })}
    </li>
  );
}

function mapStateToProps(state) {
  return {
    todosArray: state.todos.todosArray,
  };
}

function mapDispathToProps(dispatch) {
  return {
    removeTodoItem: id => dispatch(removeTodoItem(id)),
    checkItem: (todoId, todoIndex) => dispatch(checkItem(todoId, todoIndex)),
    showModal: id => dispatch(showModal(id)),
  };
}

export default connect(mapStateToProps, mapDispathToProps)(TodoItem);

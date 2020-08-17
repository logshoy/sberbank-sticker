import React from 'react';
import TodoCheckboxText from './TodoCheckboxText';
import BinDelete from '../../svg/BinDelete';
import { connect } from 'react-redux';
import { removeTodoItem, checkItem } from '../../store/actions/todos';
import { Link } from 'react-router-dom';
import { showModal } from '../../store/actions/modal';

function TodoItem(props) {
  return (
    <li className="todoItem">
      <div className="todoItem__todoHeader">
        <div className="todoItem__title">{props.title}</div>
        <div className="todoItem__buttons">
          <Link className="todoItem__change" to={'/todo/' + props.id}></Link>
          <div
            onClick={() => {
              props.showModal('DELETE_POST', {
                id: props.id,
                deleteType: 'main',
              });
            }}
          >
            <BinDelete size="20" />
          </div>
        </div>
      </div>
      {props.todosList.map((item, index) => {
        return (
          <>
            <TodoCheckboxText
              key={index}
              id={props.id}
              index={index}
              completed={item.completed}
              name={item.name}
            />
          </>
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
    showModal: (modalType, modalProps) => {
      dispatch(showModal(modalType, modalProps));
    },
  };
}

export default connect(mapStateToProps, mapDispathToProps)(TodoItem);

import React from 'react';
import { connect } from 'react-redux';
import { removeTodoItem } from '../store/actions/todos';
import { hideModal } from '../store/actions/modal';

function DeletePostModal(props) {
  const removeTodo = () => {
    props.removeTodoItem(props.modalProps);
    props.hideModal();
  };

  return (
    <div className="modalBackground">
      <div className="modal-content">
        <h2>Вы действительно хотите удалить эту заметку?</h2>
        <button onClick={removeTodo}>Yes</button>
        <button onClick={props.hideModal}>Nope</button>
      </div>
    </div>
  );
}

function mapDispathToProps(dispatch) {
  return {
    removeTodoItem: id => dispatch(removeTodoItem(id)),
    hideModal: () => dispatch(hideModal()),
  };
}

export default connect(null, mapDispathToProps)(DeletePostModal);

import React from 'react';
import { connect } from 'react-redux';
import { removeTodoItem } from '../../store/actions/todos';
import { hideModal } from '../../store/actions/modal';
import { useHistory } from 'react-router-dom';

function DeletePostModal(props) {
  const history = useHistory();
  const removeTodo = () => {
    props.removeTodoItem(props.modalProps.id);
    props.hideModal();
    if (props.modalProps.deleteType === 'page') {
      history.push('/');
    }
  };

  return (
    <div>
      <h2>Вы действительно хотите удалить эту заметку?</h2>
      <div className="buttons">
        <button className="button" onClick={removeTodo}>
          Да
        </button>
        <button className="button" onClick={props.hideModal}>
          Нет
        </button>
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

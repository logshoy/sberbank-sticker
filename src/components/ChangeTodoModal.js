import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { changeById } from '../store/actions/todos';
import { hideModal } from '../store/actions/modal';

function ChangeTodoModal(props) {
  const history = useHistory();

  const changeByIdModal = () => {
    props.changeById(
      props.modalProps.id,
      props.modalProps.title,
      props.modalProps.todosList,
    );
    props.hideModal();
    history.push('/');
  };

  return (
    <div>
      <h2>Вы действительно хотите изменить эту заметку?</h2>
      <div></div>
      <button onClick={changeByIdModal}>Yes</button>
      <button onClick={props.hideModal}>Nope</button>
    </div>
  );
}

function mapDispathToProps(dispatch) {
  return {
    changeById: (id, title, todosList) => {
      dispatch(changeById(id, title, todosList));
    },
    hideModal: () => dispatch(hideModal()),
  };
}

export default connect(null, mapDispathToProps)(ChangeTodoModal);

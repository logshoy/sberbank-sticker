/* eslint-disable indent */
import React from 'react';
import DeletePostModal from './DeletePostModal';
import TodoCreate from '../TodoCreate';
import { connect } from 'react-redux';
import { hideModal } from '../store/actions/modal';

function ModalRoot(props) {
  const renderTypeModal = () => {
    if (props.modal.modalType === 'DELETE_POST') {
      console.log(props.modal.modalProps);
      return <DeletePostModal modalProps={props.modal.modalProps} />;
    } else if (props.modal.modalType === 'SHOW_CREATE_TODO') {
      return <TodoCreate />;
    }
    return null;
  };
  return (
    <div>
      {props.modal.modalType ? (
        <div className="modalBackground">
          <div className="modal-content">{renderTypeModal()}</div>
        </div>
      ) : null}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    modal: state.modal,
  };
}

function mapDispathToProps(dispatch) {
  return {
    hideModal: () => dispatch(hideModal()),
  };
}

export default connect(mapStateToProps, mapDispathToProps)(ModalRoot);

import React, { useEffect, useRef, useCallback } from 'react';
import DeletePostModal from './DeletePostModal';
import TodoCreate from '../../TodoCreate';
import ChangeTodoModal from './ChangeTodoModal';
import { connect } from 'react-redux';
import { hideModal } from '../../store/actions/modal';

const Modal = props => {
  const modal = useRef(null);

  const handleKeyUp = useCallback(
    e => {
      const keys = {
        27: () => {
          e.preventDefault();
          props.hideModal();
          window.removeEventListener('keyup', handleKeyUp, false);
        },
      };

      if (keys[e.keyCode]) {
        keys[e.keyCode]();
      }
    },
    [props],
  );

  const handleOutsideClick = useCallback(
    e => {
      if (modal) {
        if (!modal.current.contains(e.target)) {
          props.hideModal();
          document.removeEventListener('click', handleOutsideClick, false);
        }
      }
    },
    [props],
  );

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp, false);
    document.addEventListener('click', handleOutsideClick, false);

    return () => {
      window.removeEventListener('keyup', handleKeyUp, false);
      document.removeEventListener('click', handleOutsideClick, false);
    };
  }, [handleKeyUp, handleOutsideClick]);

  const renderTypeModal = () => {
    if (props.modalData.modalType === 'DELETE_POST') {
      return <DeletePostModal modalProps={props.modalData.modalProps} />;
    } else if (props.modalData.modalType === 'SHOW_CREATE_TODO') {
      return <TodoCreate />;
    } else if (props.modalData.modalType === 'CHANGE_TODO') {
      return <ChangeTodoModal modalProps={props.modalData.modalProps} />;
    }
  };

  return (
    <div className="modalBackground">
      <div className="modal-content" ref={modal}>
        <button
          type="button"
          className="closeButton"
          onClick={props.hideModal}
        />
        {renderTypeModal()}
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    modalData: state.modal,
  };
}

function mapDispathToProps(dispatch) {
  return {
    hideModal: () => dispatch(hideModal()),
  };
}

export default connect(mapStateToProps, mapDispathToProps)(Modal);

/* eslint-disable indent */
import React from 'react';
import DeletePostModal from './DeletePostModal';
import TodoCreate from '../TodoCreate';
import ChangeTodoModal from './ChangeTodoModal';
import { connect } from 'react-redux';
import { hideModal } from '../store/actions/modal';

class ModalRoot extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.state = {
      showModal: false,
    };
  }

  handleClick = () => {
    console.log(!this.props.modal.modalType);
    if (!this.props.modal.modalType) {
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }
  };

  renderTypeModal = () => {
    if (this.props.modal.modalType === 'DELETE_POST') {
      return <DeletePostModal modalProps={this.props.modal.modalProps} />;
    } else if (this.props.modal.modalType === 'SHOW_CREATE_TODO') {
      return <TodoCreate />;
    } else if (this.props.modal.modalType === 'CHANGE_TODO') {
      return <ChangeTodoModal modalProps={this.props.modal.modalProps} />;
    }
  };

  handleOutsideClick = e => {
    if (!this.node.contains(e.target)) this.handleClick();
  };

  render() {
    return (
      <div>
        {this.props.modal.modalType ? (
          <div
            className="modalBackground"
            ref={node => {
              this.node = node;
            }}
          >
            <div className="modal-content">{this.renderTypeModal()}</div>
          </div>
        ) : null}
      </div>
    );
  }
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

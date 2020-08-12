/* eslint-disable indent */

import { SHOW_MODAL, HIDE_MODAL } from '../actions/actionTypes';

const initialState = {
  modalShow: false,
  todoId: '',
};

export default function modal(state = initialState, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        modalShow: true,
        todoId: action.id,
      };
    case HIDE_MODAL:
      return initialState;
    default:
      return state;
  }
}

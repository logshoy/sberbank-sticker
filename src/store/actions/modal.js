import { SHOW_MODAL, HIDE_MODAL } from './actionTypes';

export function showModal(id) {
  return {
    type: SHOW_MODAL,
    id,
  };
}

export function hideModal() {
  return {
    type: HIDE_MODAL,
  };
}

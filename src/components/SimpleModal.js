import React, { useState } from 'react';
import Modal from './Modal';

const SimpleModal = ({ buttonLabel, children }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="wrapper">
      <button
        type="button"
        className="modalButton"
        onClick={() => setShowModal(true)}
      >
        {buttonLabel}
      </button>

      {showModal && (
        <Modal onCloseRequest={() => setShowModal(false)}>{children}</Modal>
      )}
    </div>
  );
};

export default SimpleModal;

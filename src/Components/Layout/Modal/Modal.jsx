import React from 'react';
import { useModalContext } from '../../Context/ModalContext';
import '../../../css/Modal.css';

const Modal = ({ Name, children, isOpen, onClose }) => {
  if (!isOpen) return null;

  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child, { onClose: onClose }),
  );

  return (
    <div className='modal-overlay'>
      <div className='modal-content'>
        <div className='modal-title'>
          <h2 style={{ margin: 0 }}>{Name}</h2>
          <p
            style={{
              height: '20px',
              width: '20px',
              cursor: 'pointer',
              color: '#8d8c8c',
            }}
            onClick={onClose}
          >
            X
          </p>
        </div>
        {childrenWithProps}
      </div>
    </div>
  );
};

export default Modal;
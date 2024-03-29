import React, { useState } from 'react';
import '../../../css/Modal.css';
import SearchBar from '../../Layout/SearchBar/index';
import { useModalContext } from '../../Context/ModalContext';

const Modal = ({ Name, children, isOpen, onClose, type }) => {
  const [searchValue, setSearchValue] = useState('');

  if (!isOpen) return null;

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child, { onClose: onClose }),
  );

  if (type === 'Search') {
    return (
      <div className='modal-overlay'>
        <div className='modal-content'>
          <div className='modal-title'>
            <SearchBar type={'Chat'} onSearch={handleSearch} />
          </div>
          {childrenWithProps}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              width: '350px',
              marginTop: '15px',
              marginBottom: '15px',
            }}
          >
            <button style={{ width: '140px', height: '45px' }}>저장</button>
            <button
              onClick={onClose}
              style={{
                width: '140px',
                height: '45px',
                background: '#AECCC8',
              }}
            >
              취소
            </button>
          </div>
        </div>
      </div>
    );
  } else if (type === 'Add' || type === 'Modify') {
    return (
      <div className='modal-overlay'>
        <div className='modal-content'>
          <div className='modal-title'>
            <h2 style={{ margin: 0 }}>{Name}</h2>
          </div>
          {childrenWithProps}
        </div>
      </div>
    );
  } else {
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
  }
};
export default Modal;

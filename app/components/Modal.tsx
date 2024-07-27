import React from 'react';
import Modal from 'react-modal';

type ModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Model = ({ isOpen, setIsOpen }: ModalProps) => {
  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  return (
    <div>
      <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={customStyles}>
        <h1 className="text-blue-500">hi</h1>
      </Modal>
    </div>
  );
};

export default Model;
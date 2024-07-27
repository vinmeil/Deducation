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
      backgroundColor: "#181818",
      border: "none",
    },
  };

  return (
    <div className="gap-4 flex-col">
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
      >
        <h1 className="font-semibold p-2">Would you like to run your validator?</h1>
        <div className = "flex justify-between items-center mt-2">
          <button
            type = "button"
            className = "bg-accent text-background rounded-lg font-semibold p-3"
          >
            Run Validator
          </button>
          <button
          type="button"
          className="bg-red-500 text-background rounded-lg font-semibold p-3"
          onClick = {() => setIsOpen(false)}>
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Model;
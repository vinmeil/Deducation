import React from 'react';
import Modal from 'react-modal';

type ModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isValidatorRunning: boolean;
  setIsValidatorRunning: React.Dispatch<React.SetStateAction<boolean>>;
  stopValidator: () => void;
  handleValidatorStop: () => {};
};

const Model = ({ isOpen, setIsOpen, isValidatorRunning, setIsValidatorRunning, stopValidator, handleValidatorStop}: ModalProps) => {
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
        ariaHideApp={false}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
      >
        <h1 className="font-semibold p-2">Would you like to {isValidatorRunning ? "stop" : "run"} your validator?</h1>
        <div className = "flex justify-between items-center mt-2">
          <button
            type = "button"
            className = "bg-accent text-background rounded-lg font-semibold p-3"
            onClick = {() => {
              if (!isValidatorRunning){
                setIsValidatorRunning(!isValidatorRunning);
                setIsOpen(false);
                isValidatorRunning ? stopValidator() : null;
              } else {
                setIsValidatorRunning(!isValidatorRunning);
                handleValidatorStop();
                setIsOpen(false);
              }
            }}
          >
            {isValidatorRunning ? "Stop Validator" : "Run Validator"}
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
import React from 'react';
import Modal from 'react-modal';
import { Styles } from 'react-modal';

type ModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isValidatorRunning: boolean;
  setIsValidatorRunning: React.Dispatch<React.SetStateAction<boolean>>;
};

const Model = ({ isOpen, setIsOpen, isValidatorRunning, setIsValidatorRunning }: ModalProps) => {
  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      width: "80vw",
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: "#181818",
      border: "none",
      padding: "0px",
    },
  };

  return (
    <div className="gap-4 flex-col">
      <Modal
        isOpen={isOpen}
        ariaHideApp={false}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles as Styles}
      >
        <div className="p-5 h-full">
          <h1 className="font-semibold p-2">Would you like to {isValidatorRunning ? "stop" : "run"} your validator?</h1>
          <div className = "flex justify-between items-center my-2">
            <button
              type = "button"
              className = "bg-accent text-background rounded-lg font-semibold p-3"
              onClick = {() => {
                setIsValidatorRunning(!isValidatorRunning);
                console.log(isValidatorRunning)
                setIsOpen(false);
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
        </div>
      </Modal>
    </div>
  );
};

export default Model;
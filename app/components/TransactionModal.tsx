import React from 'react';
import Modal from 'react-modal';
import { Styles } from 'react-modal';

type ModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  stakeReturns?: number;
};

const TransactionModal = ({ isOpen, setIsOpen, stakeReturns }: ModalProps) => {
  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      width: "2/3",
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
        <div className="p-5 h-full flex flex-col items-center justify-center gap-3">
          <h1 className="font-semibold p-2 text-center">You have received {Number(stakeReturns) / 1000} KLT as stake returns.</h1>
          <button
            type="button"
            className="bg-red-500 text-background rounded-lg font-semibold p-3"
            onClick = {() => setIsOpen(false)}>
              Close
        </button>
        </div>
      </Modal>
    </div>
  );
};

export default TransactionModal;
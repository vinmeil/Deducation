import React from 'react'
import Modal, { Styles } from 'react-modal';

type ModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsHardwareConnected: (value: boolean) => void;
};

const ConnectDeviceModal = ({ isOpen, setIsOpen, setIsHardwareConnected }: ModalProps) => {
  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      zIndex: 2000,
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
      zIndex: 2001,
    },
  };

  const handleCloseModal = () => {
    localStorage.setItem('isHardwareConnected', JSON.stringify(true));
    setIsHardwareConnected(true);
    setIsOpen(false);
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
          <h1 className="font-semibold p-2 text-center">Connect Your Hardware</h1>
          <div className="flex flex-row items-center gap-10">
            <button
              type="button"
              className="bg-accent text-background rounded-lg font-semibold p-3"
              onClick = {handleCloseModal}>
                Continue
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
}

export default ConnectDeviceModal
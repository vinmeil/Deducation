import React, { useState } from 'react'
import { LuUnplug } from "react-icons/lu";
import ConnectDeviceModal from './ConnectDeviceModal';

type HardwareCoverPageProps = {
  setIsHardwareConnected: (value: boolean) => void;
  isHardwareConnected: boolean;
}

const HardwareCoverPage = ({ setIsHardwareConnected }: HardwareCoverPageProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleConnect = () => {
    setIsModalOpen(true);
    console.log(isModalOpen)
  };

  return (
    <div className="w-screen h-screen flex flex-col gap-8 justify-center items-center absolute z-[1000]">
      <LuUnplug size={128} />
      <p className="text-4xl font-semibold">Device not connected</p>
      <button
        className="flex flex-row items-center justify-center gap-2 px-4 py-2 bg-gradient-to-tl from-primary to-accent text-background rounded-lg glow-button font-semibold"
        onClick={handleConnect}
      >
        Connect Device
      </button>

      <ConnectDeviceModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} setIsHardwareConnected={setIsHardwareConnected} />
      <style jsx>{`
        .glow-button {
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.3), 0 0 30px rgba(255, 255, 255, 0.2);
          }
      `}</style>
    </div>
  )
}

export default HardwareCoverPage
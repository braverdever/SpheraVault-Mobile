import React from 'react';
import Link from 'next/link';
import BottomNavigation from '@/components/BottomNavigation';
import { MdKeyboardArrowLeft } from "react-icons/md";

const Pumking_NFT_Page = () => {
  return (
      <div className="max-h-screen flex flex-col bg-[#1c1c1c]"> {/* Added padding bottom */}
        <div className="p-2  flex flex-col justify-center h-[45vh] mt-4">
          <Link href="/">
            <h1 className="text-xl font-bold text-white mt-6 flex items-center"><MdKeyboardArrowLeft size={28} />Back</h1>
          </Link>
          <div className="flex justify-center my-4 h-[40vh]">
            <img src="/images/scaner.png" alt="Sphera Vault" className="rounded-lg object-contain" />
          </div>
        </div>

        <div className=" flex flex-col justify-center px-4 h-[40vh]">
          <h2 className="text-xl font-semibold mt-6 flex justify-start items-center gap-2 text-white">
            Pumking NFT Lego Toy
            <img src="/images/valid.png" alt="Fans Zone" className="h-5 w-5 mt-1" />
          </h2>
          <p className="text-[13px] mt-4 text-white-7">To begin the PBT process, scan the QR code and follow the instructions on your mobile device. Keep your browser open.</p>
          <button className="w-full bg-orange text-black font-normal py-2 px-4 rounded-lg mt-4 text-[14px] text-start flex justify-center items-center gap-3">
            <img src="/images/moniter.png" alt="Fans Zone" className="h-5 w-6 mb-1" />
            <span className="text-black font-semibold">Please continue on your profile on desktop to mint your physical item</span>
          </button>
        </div>
        {/* <BottomNavigation /> */}

        <div className="fixed bottom-0 w-full bg-[#151515] flex justify-around gap-2 py-4 px-3 pb-6 rounded-t-xl h-[15vh]">
          <button className="w-[20%] flex flex-col items-center justify-center bg-[#1c1c1c] p-1 py-2 rounded-md shadow">
            <img src="/images/Home.png" alt="Home" className="h-5 w-5 mb-1" />
            <span className='text-[#6b6b6b] text-[8px] font-light'>HOME</span>
          </button>
          <button className="w-[20%] flex flex-col items-center justify-center bg-[#1c1c1c] p-1 py-2 rounded-md shadow">
            <img src="/images/Marketplace.png" alt="Marketplace" className="h-5 w-5 mb-1" />
            <span className='text-[#6b6b6b] text-[8px] font-light'>MARKETPLACE</span>
          </button>
          <button className="w-[20%] flex flex-col items-center justify-center bg-[#1c1c1c] p-1 py-2 rounded-md shadow">
            <img src="/images/Fanszone.png" alt="Fans Zone" className="h-5 w-6 mb-1" />
            <span className='text-[#6b6b6b] text-[8px] font-light'>FANS ZONE</span>
          </button>
          <button className="w-[20%] flex flex-col items-center justify-center bg-[#1c1c1c] p-1 py-2 rounded-md shadow">
            <img src="/images/SpheraWhite.png" alt="$SPHERA" className="h-5 w-5 mb-1" />
            <span className='text-[#6b6b6b] text-[8px] font-light'>$SPHERA</span>
          </button>
          <button className="w-[20%] flex flex-col items-center justify-center bg-[#1c1c1c] p-1 py-2 rounded-md shadow border-[2px] border-orange">
            <img src="/images/Vault.png" alt="Vault" className="h-5 w-7 mb-1" />
            <span className="text-orange text-[8px] font-light">VAULT</span>
          </button>
        </div>
      </div>
  );
};

export default Pumking_NFT_Page;

import React from 'react';
import Link from 'next/link';
import BottomNavigation from '@/components/BottomNavigation';
import { MdKeyboardArrowLeft } from "react-icons/md";

const Pumking_NFT_Page = () => {
  return (
    <div className="min-h-screen bg-[#1c1c1c]">
      <div className="p-4">
        <Link href="/">
          <h1 className="text-xl font-bold mt-4 cursor-pointer text-white flex justify-start items-center gap-0.8"><MdKeyboardArrowLeft className='mt-1' size={28}/>Back</h1>
        </Link>
        <div className="flex justify-center my-4">
          <img src="/images/scaner.png" alt="Sphera Vault" className="rounded-lg" />
        </div>
        <h2 className="text-xl font-semibold mt-6 flex justify-start items-center gap-2 text-white">
          Pumking NFT Lego Toy
          <img src="/images/valid.png" alt="Fans Zone" className="h-5 w-5 mt-1" />
        </h2>
        <p className="text-[13px] mt-4 text-white-7">To begin the PBT process, scan the QR code and follow the instructions on your mobile device. Keep your browser open.</p>
        <button className="w-full bg-orange text-black font-normal py-4 px-4 rounded-lg mt-4 text-[14px] text-start flex justify-center items-center gap-3">
          <img src="/images/moniter.png" alt="Fans Zone" className="h-5 w-6 mb-1" />
          <span className="text-black font-semibold">Please continue on your profile on desktop to mint your physical item</span>
        </button>
      </div>
      <BottomNavigation />
    </div>
  );
};

export default Pumking_NFT_Page;

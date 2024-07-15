import React from 'react';
import Link from 'next/link';
import BottomNavigation from '@/components/BottomNavigation';

const ScanChipPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#1c1c1c]">
     <div className="p-4 overflow-y-scroll h-[calc(100vh-100px)]">
        <h1 className="text-xl font-bold mt-1 text-white">Sphera Vault</h1>
        <div className="flex justify-center my-4">
          <img src="/images/scaner.png" alt="Sphera Vault" className="rounded-lg" />
        </div>
        <h2 className="text-xl font-semibold mt-6 text-white">Scan Chip</h2>
        <ul className="list-disc list-inside mt-4 flex flex-col gap-4 list-disc-orange">
          <li className="text-[12px] text-white-7">Press &quot;SCAN HERE&quot; and tap the chip on your phone</li>
          <li className="text-[12px] text-white-7">Position the chip within the scanning frame</li>
          <li className="text-[12px] text-white-7">Move your device closer or farther away to get a clear focus</li>
        </ul>
        <Link href="/scan" passHref>
          <button className="w-full bg-orange text-[#000] font-semibold py-4 px-4 rounded-lg mt-4 text-[18px]">
            Click to scan
          </button>
        </Link>
      </div>
      <BottomNavigation />
    </div>
  );
};

export default ScanChipPage;

import React from 'react';

const BottomNavigation = () => {
  return ( 
    <div className="fixed bottom-0 w-full bg-[#151515] flex justify-around gap-2 py-4 px-3 pb-6 rounded-t-xl h-[15vh]">
      <button className="w-[20%] flex flex-col items-center justify-center bg-[#1c1c1c] p-1 py-2 rounded-md shadow">
        <img src="/images/Home.png" alt="Home" className="h-5 w-5 mb-1"/>
        <span className='text-[#6b6b6b] text-[8px] font-light'>HOME</span>
      </button>
      <button className="w-[20%] flex flex-col items-center justify-center bg-[#1c1c1c] p-1 py-2 rounded-md shadow">
        <img src="/images/Marketplace.png" alt="Marketplace" className="h-5 w-5 mb-1"/>
        <span className='text-[#6b6b6b] text-[8px] font-light'>MARKETPLACE</span>
      </button>
      <button className="w-[20%] flex flex-col items-center justify-center bg-[#1c1c1c] p-1 py-2 rounded-md shadow">
        <img src="/images/Fanszone.png" alt="Fans Zone" className="h-5 w-6 mb-1"/>
        <span className='text-[#6b6b6b] text-[8px] font-light'>FANS ZONE</span>
      </button>
      <button className="w-[20%] flex flex-col items-center justify-center bg-[#1c1c1c] p-1 py-2 rounded-md shadow">
        <img src="/images/SpheraWhite.png" alt="$SPHERA" className="h-5 w-5 mb-1"/>
        <span className='text-[#6b6b6b] text-[8px] font-light'>$SPHERA</span>
      </button>
      <button className="w-[20%] flex flex-col items-center justify-center bg-[#1c1c1c] p-1 py-2 rounded-md shadow border-[2px] border-orange">
        <img src="/images/Vault.png" alt="Vault" className="h-5 w-7 mb-1"/>
        <span className="text-orange text-[8px] font-light">VAULT</span>
      </button>
    </div>
  );
};

export default BottomNavigation;

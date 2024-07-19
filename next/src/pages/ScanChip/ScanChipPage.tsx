"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import BottomNavigation from "@/components/BottomNavigation";
import { imitateSignature, generateSignature } from "../../utils/pbt.mjs";
const ScanChipPage: React.FC = () => {
  const scanChip = async () => {
    // In production
    const params = new URLSearchParams(window.location.search);

    const messageHash = params.get("message");

    if (messageHash == undefined) {
      alert("Incorrect Message!");
      return;
    }
    let signature;
    try {
      signature = await generateSignature(messageHash);
    } catch {
      signature = imitateSignature(messageHash);
    }
    alert(signature);
    console.log(signature);
  };
  return (
    <div className="max-h-screen flex flex-col bg-[#1c1c1c]">
      {" "}
      {/* Added padding bottom */}
      <div className="p-2  flex flex-col justify-center h-[45vh] mt-4">
        <h1 className="text-xl font-bold text-white mt-6">Sphera Vault</h1>
        <div className="flex justify-center my-4 h-[40vh]">
          <img
            src="/images/scaner.png"
            alt="Sphera Vault"
            className="rounded-lg object-contain"
          />
        </div>
      </div>
      <div className=" flex flex-col justify-center px-4 h-[40vh]">
        <h2 className="text-xl font-semibold mt-6 text-white">Scan Chip</h2>
        <ul className="list-disc list-inside mt-4 flex flex-col gap-2 list-disc-orange">
          <li className="text-[11px] text-white-7">
            Press &quot;SCAN HERE&quot; and tap the chip on your phone
          </li>
          <li className="text-[11px] text-white-7">
            Position the chip within the scanning frame
          </li>
          <li className="text-[11px] text-white-7">
            Move your device closer or farther away to get a clear focus
          </li>
        </ul>
        {/* <Link href={`/scan${window.location.search}`} passHref> */}
        <button
          className="w-full bg-orange text-[#000] font-semibold py-4 px-4 rounded-lg mt-4 text-[18px]"
          onClick={scanChip}
        >
          Click to scan
        </button>
        {/* </Link> */}
      </div>
      {/* <BottomNavigation /> */}
      <div className="fixed bottom-0 w-full bg-[#151515] flex justify-around gap-2 py-4 px-3 pb-6 rounded-t-xl h-[15vh]">
        <button className="w-[20%] flex flex-col items-center justify-center bg-[#1c1c1c] p-1 py-2 rounded-md shadow">
          <img src="/images/Home.png" alt="Home" className="h-5 w-5 mb-1" />
          <span className="text-[#6b6b6b] text-[8px] font-light">HOME</span>
        </button>
        <button className="w-[20%] flex flex-col items-center justify-center bg-[#1c1c1c] p-1 py-2 rounded-md shadow">
          <img
            src="/images/Marketplace.png"
            alt="Marketplace"
            className="h-5 w-5 mb-1"
          />
          <span className="text-[#6b6b6b] text-[8px] font-light">
            MARKETPLACE
          </span>
        </button>
        <button className="w-[20%] flex flex-col items-center justify-center bg-[#1c1c1c] p-1 py-2 rounded-md shadow">
          <img
            src="/images/Fanszone.png"
            alt="Fans Zone"
            className="h-5 w-6 mb-1"
          />
          <span className="text-[#6b6b6b] text-[8px] font-light">
            FANS ZONE
          </span>
        </button>
        <button className="w-[20%] flex flex-col items-center justify-center bg-[#1c1c1c] p-1 py-2 rounded-md shadow">
          <img
            src="/images/SpheraWhite.png"
            alt="$SPHERA"
            className="h-5 w-5 mb-1"
          />
          <span className="text-[#6b6b6b] text-[8px] font-light">$SPHERA</span>
        </button>
        <button className="w-[20%] flex flex-col items-center justify-center bg-[#1c1c1c] p-1 py-2 rounded-md shadow border-[2px] border-orange">
          <img src="/images/Vault.png" alt="Vault" className="h-5 w-7 mb-1" />
          <span className="text-orange text-[8px] font-light">VAULT</span>
        </button>
      </div>
    </div>
  );
};

export default ScanChipPage;

import Image from 'next/image';
import React from 'react';
import Logo from '../public/logo.png';

function UserInfo() {
  return (
    <div className="w-56 pr-1.5 rounded-lg border border-green-300/20 flex md:hidden items-center justify-between space-x-2 overflow-hidden">
        <Image className="p-0.5 bg-green-200 h-10 w-8 object-contain rounded-l" src={Logo} alt="Logo" />
        <div className="w-full text-center">
           <div className="mb-0.5 text-[0.6rem] font-semibold tracking-widest border-b border-green-300/10 border-dashed text-green-300/50 truncate">EBENEZER KWABENA BLAY ACKAH</div>
           <div className="text-[0.6rem] font-semibold tracking-[0.2em] text-green-200">CONSTITUENCY OBSERVER</div>
        </div>
           
    </div>
  )
}

export default UserInfo
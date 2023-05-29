'use client';
import React, { useState } from 'react'
import { Dialog } from '@headlessui/react' 
import PgDetaileResult from './PgDetaileResult';
import { FiPrinter } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import { GiLoad } from 'react-icons/gi';
import { BiLoader } from 'react-icons/bi';
import PgRegionSummary from './PgRegionSummary';
import PgNationalSummary from './PgNationalSummary';
import PgDetaileStationResult from './PgDetaileStationResult';
import PgContention from './PgContention';
import PgSkirtSummary from './PgSkirtSummary';

function ModalBox({ isOpen,setIsOpen,data }:any) {

  const Switcher = () => {
    switch(data.page){
        case 'overview': return <PgNationalSummary setIsOpen={setIsOpen} />; break;
        case 'summaries': return <PgRegionSummary setIsOpen={setIsOpen} />; break;
        case 'constituencies': return <PgDetaileResult setIsOpen={setIsOpen} hasHeader={true} />; break;
        case 'stations': return <PgDetaileStationResult setIsOpen={setIsOpen} />; break;
        case 'contentions': return <PgContention setIsOpen={setIsOpen} />; break;
        case 'skirt': return <PgSkirtSummary setIsOpen={setIsOpen} />; break;
        case 'constituency_parl': return <PgDetaileResult setIsOpen={setIsOpen} type="parl" cid={2} />; break;
        case 'constituency_pres': return <PgDetaileResult setIsOpen={setIsOpen} type="pres" cid={2} />; break;
        case 'contention': return <PgContention setIsOpen={setIsOpen} cid={2} />; break;
        
    }

  }

  return (
    <Dialog 
      open={isOpen} 
      onClose={() => null }
      className="relative z-50"
    >
     <div className="fixed inset-0 flex items-center justify-center p-4 bg-black/50 text-green-800">
        <Dialog.Panel className="mx-auto w-full max-h-screen max-w-5xl rounded bg-white overflow-scroll md:overflow-y-auto scrollbar-hide">
          {Switcher()}
        </Dialog.Panel>
     </div>
    </Dialog>
  )
}

export default ModalBox
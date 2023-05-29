'use client';
import React, { useState } from 'react'
import Badge from '@/components/Badge';
import BadgeIcon from '@/components/BadgeIcon';
import { MdOutlineArticle,MdAdd } from 'react-icons/md'
import { FiEdit3,FiTrash } from 'react-icons/fi'
import GoBack from '@/components/GoBack';
import SearchBox from '@/components/SearchBox';
import PageTitle from '@/components/PageTitle';
import ActionButton from '@/components/ActionButton';
import Image from 'next/image';
import Logo from '../public/logo.png'
import PgDetaileResult from './PgDetaileResult';
import DetailConstituency from './DetailConstituency';
import ModalBox from './ModalBox';


function PgObserveConstituency() {
    const [ isOpen,setIsOpen ] = useState(false)
    const [ data,setdata ] = useState({})
    
    const loadData = ( page:string, param:object ) => {
        switch(page){
          case 'constituency_parl': setdata({ page:'constituency_parl', params: {} }); break;
          case 'constituency_pres': setdata({ page:'constituency_pres', params: {} }); break;
          case 'stations': setdata({ page:'stations', params: {} }); break;
          case 'contention': setdata({ page:'contention', params: {} }); break;
          default: setdata({ page:'constituency_parl', params: {} }); break;
        } setIsOpen(true)
    }
  return (
     <>
        <ModalBox isOpen={isOpen} setIsOpen={setIsOpen} data={data} />
        <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between md:space-x-4 md:space-y-0 space-y-2">
            <div className="hidden flex-col md:flex-row md:items-center md:space-x-4 md:space-y-0 space-y-2">
                <div className="w-full flex items-center justify-between md:justify-start space-x-4">
                    <GoBack />
                </div>
                <PageTitle title="CONSTITUENCY STATISTICS" />
            </div>
            <div className="hidden md:flex">
                {/* <ActionButton title="New Record" Icon={MdAdd} onClick={null} /> */}
            </div>
        </div>
        <div className="pb-12 overflow-y-scroll scrollbar-hide">
            <div className="w-full border-separate border-spacing-0 border border-green-300/20 rounded text-[0.86rem] text-green-200/80">
                <div className="flex flex-col md:flex-row md:items-center justify-between bg-green-400/20 text-green-200 text-[0.86rem] font-poppins font-medium tracking-wider">
                   <div className="mx-6 my-2 w-full flex flex-col md:flex-row text-base md:text-xl text-green-200 tracking-widest">AOWIN CONSTITUENCY</div>
                </div>
            </div>
            <div className="my-4 w-full flex flex-col md:flex-row md:items-center md:space-x-4 md:space-y-0 space-y-3">
                <div className="flex-1 border border-green-300/20 rounded">
                    <div className="px-6 py-3 text-center text-green-200 tracking-widest">WINNING CANDIDATES</div>
                    <div className="p-1 flex flex-col md:flex-row md:items-center space-y-1 md:space-y-0 md:space-x-1 text-green-200 border-t border-green-300/20">
                        <button className="px-4 md:px-3 py-1  h-full flex-1 flex items-center justify-between font-semibold text-sm tracking-widest bg-green-300/10  rounded border border-green-300/20">PARLIAMENTARY&nbsp;&nbsp; <span className="p-0.5 px-2 rounded bg-[#0a3b0a] text-xs text-green-200 font-semibold tracking-widest">NDC</span></button>
                        {/* <button className="px-4 md:px-3 py-1  h-full flex-1 flex items-center justify-between font-semibold text-sm tracking-widest bg-green-300/10  rounded border border-green-300/20">PRESIDENTIAL&nbsp;&nbsp;<span className="p-0.5 px-2 rounded bg-[#181860] text-xs text-green-100 font-semibold tracking-widest">NPP</span></button> */}
                        <button className="px-4 md:px-3 py-1  h-full flex-1 flex items-center justify-between font-semibold text-sm tracking-widest bg-green-300/10  rounded border border-green-300/20">PRESIDENTIAL&nbsp;&nbsp;<span className="p-0.5 px-2 rounded bg-[#0a3b0a] text-xs text-green-200 font-semibold tracking-widest">NDC</span></button>
                    </div>
                </div> 
                <div className="flex-1 border border-green-300/20 rounded">
                    <div className="px-6 py-3 text-center text-green-200 tracking-widest">POLLING STATION STATISTICS</div>
                    <div className="p-1 flex flex-col md:flex-row md:items-center space-y-1 md:space-y-0 md:space-x-1 text-green-200 border-t border-green-300/20">
                        {/* <button className="px-3 py-1  h-full flex-1 font-mono text-base bg-green-300/10  rounded border border-green-300/20">314</button> */}
                        <button className="px-4 md:px-3 py-1  h-full flex-1 flex items-center justify-between font-semibold text-xs tracking-widest bg-green-300/10  rounded border border-green-300/20">TOTAL&nbsp;&nbsp; <span className="p-0.5 px-2 rounded text-[#0a3b0a] text-sm bg-green-200 font-mono font-semibold tracking-widest">314</span></button>
                        <button className="px-4 md:px-3 py-1  h-full flex-1 flex items-center justify-between font-semibold text-xs tracking-widest bg-green-300/10  rounded border border-green-300/20">PUBLISHED&nbsp;&nbsp; <span className="p-0.5 px-2 rounded text-[#0a3b0a] text-sm bg-green-200 font-mono font-semibold tracking-widest">60</span></button>
                        <button className="px-4 md:px-3 py-1  h-full flex-1 flex items-center justify-between font-semibold text-xs tracking-widest bg-green-300/10  rounded border border-green-300/20">VALID&nbsp;&nbsp;<span className="p-0.5 px-2 rounded text-[#0a3b0a] text-sm bg-green-200 font-mono font-semibold tracking-widest">50</span></button>
                        <button className="px-4 md:px-3 py-1  h-full flex-1 flex items-center justify-between font-semibold text-xs tracking-widest bg-green-300/10  rounded border border-green-300/20">CONTENTION&nbsp;&nbsp;<span className="p-0.5 px-2 rounded text-[#0a3b0a] text-sm bg-green-200 font-mono font-semibold tracking-widest">4</span></button>
                    </div>
                </div> 
               
            </div>

            <div className=" my-4 w-full flex flex-col md:flex-row md:items-center md:space-x-4 md:space-y-0 space-y-3">
                <div className="flex-1 border border-green-300/20 rounded">
                    <div className="px-6 py-3 text-center text-green-200 tracking-widest">CONSTITUENCY RESULTS</div>
                    <div className="p-1 flex items-center space-x-1 text-green-200 border-t border-green-300/20">
                        <button onClick={() => loadData("constituency_parl",{})} className="px-3 py-1  h-full flex-1 text-sm bg-green-300/10  rounded border border-green-300/20">PARLIAMENTARY</button>
                        <button onClick={() => loadData("constituency_pres",{})} className="px-3 py-1  h-full flex-1 text-sm bg-green-300/10  rounded border border-green-300/20">PRESIDENTIAL</button>
                    </div>
                </div> 
                <div className="flex-1 border border-green-300/20 rounded">
                    <div className="px-6 py-3 text-center text-green-200 tracking-widest">POLLING STATION</div>
                    <div className="p-1 flex flex-col md:flex-row md:items-center space-y-1 md:space-y-0 md:space-x-1 text-green-200 border-t border-green-300/20">
                        <div className="px-3 py-1  h-full flex-2 text-sm bg-red-400/20  rounded border border-green-300/20">
                            <select className="p-0 focus:ring-0 border-0 w-full bg-transparent focus:outline-none">
                                <option className="px-6">AOWIN KWAMWE JUNCTION</option>
                            </select>
                        </div>
                        <button className="px-3 py-1  h-full flex-1 text-sm bg-green-300/10  rounded border border-green-300/20">FETCH RESULTS</button>
                        <button onClick={() => loadData("contention",{})} className="px-3 py-1  h-full flex-1 text-sm bg-green-300/10  rounded border border-green-300/20">CONTENTIONS</button>
                        
                    </div>
                </div> 
               
                
                {/* <div className="flex-1 border border-green-300/20 rounded">
                    <div className="px-6 py-3 text-center text-green-200 tracking-widest">LOST SEATS</div>
                    <div className="p-1 flex items-center space-x-1 text-green-200 border-t border-green-300/20">
                        <button className="px-3 py-1  h-full flex-1 text-sm bg-[#0a3b0a] font-mono text-white  rounded border border-white">NDC-120</button>
                        <button className="px-3 py-1  h-full flex-1 text-sm bg-[#181860] font-mono text-white  rounded border border-white">NPP-566</button>
                        <button className="px-3 py-1  h-full flex-1 text-sm bg-white font-mono text-black rounded border border-green">REST-26</button>
                    </div>
                </div>
                <div className="flex-1 border border-green-300/20 rounded">
                    <div className="px-6 py-3 text-center text-green-200 tracking-widest">NEW SEATS</div>
                    <div className="p-1 flex items-center space-x-1 text-green-200 border-t border-green-300/20">
                        <button className="px-3 py-1  h-full flex-1 text-sm bg-[#0a3b0a] font-mono text-white  rounded border border-white">NDC-120</button>
                        <button className="px-3 py-1  h-full flex-1 text-sm bg-[#181860] font-mono text-white  rounded border border-white">NPP-566</button>
                        <button className="px-3 py-1  h-full flex-1 text-sm bg-white font-mono text-black rounded border border-green">REST-26</button>
                    </div>
                </div> */}
            </div>
            
        </div>
    </>
  )
}

export default PgObserveConstituency
'use client';
import React, { useState} from 'react'
import GoBack from '@/components/GoBack';
import PageTitle from '@/components/PageTitle';
import ModalBox from './ModalBox';
import PgDetaileResult from './PgDetaileResult';


function PgStrongroom() {
  const [ isOpen,setIsOpen ] = useState(false)
  const [ data,setdata ] = useState({})
  
  const loadData = ( page:string, param:object ) => {
      switch(page){
        case 'overview': setdata({ page:'overview', params: {} }); break;
        case 'summaries': setdata({ page:'summaries', params: {} }); break;
        case 'constituencies': setdata({ page:'constituencies', params: {} }); break;
        case 'stations': setdata({ page:'stations', params: {} }); break;
        case 'contentions': setdata({ page:'contentions', params: {} }); break;
        case 'skirt': setdata({ page:'skirt', params: {} }); break;
        default: setdata({ page:'summaries', params: {} }); break;
      } setIsOpen(true)
  }
 
  return (
     <>
        <ModalBox isOpen={isOpen} setIsOpen={setIsOpen} data={data} />
        <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between md:space-x-4 md:space-y-0 space-y-2">
            <div className="flex flex-col md:flex-row md:items-center md:space-x-4 md:space-y-0 space-y-2">
               <PageTitle title="STRONG ROOM" />
            </div>
            <div className="hidden md:flex">
                {/* <ActionButton title="New Record" Icon={MdAdd} onClick={null} /> */}
            </div>
        </div>
        <div className="pb-12 overflow-y-scroll scrollbar-hide">
            <div className="w-full border-separate border-spacing-0 border border-green-300/20 rounded text-[0.86rem] text-green-200/80">
                <div className="grid bg-green-400/20 text-green-200 text-[0.86rem] font-poppins font-medium tracking-wider">
                   <div className="mx-6 my-2 w-full flex  text-base md:text-xl text-green-200 tracking-widest">REALTIME STATISTICS <span className="hidden md:flex">&nbsp;OF ELECTIONS</span></div>
                </div>
            </div>
            <div className="my-4 flex flex-col md:flex-row md:items-center md:space-x-4 md:space-y-0 space-y-3">
                <div className="flex-1 border border-green-300/20 rounded">
                    <div className="px-6 py-3 text-center text-green-200 tracking-widest">REGIONS</div>
                    <div className="p-1 flex items-center space-x-1 text-green-200 border-t border-green-300/20">
                        <button onClick={() => loadData("overview",{})} className="px-3 py-1  h-full flex-1 text-sm bg-green-300/10  rounded border border-green-300/20">Overview</button>
                        <button onClick={() => loadData("summaries",{})} className="px-3 py-1  h-full flex-1 text-sm bg-green-300/10  rounded border border-green-300/20">Summaries</button>
                    </div>
                </div> 
                <div className="flex-1 border border-green-300/20 rounded">
                    <div className="px-6 py-3 text-center text-green-200 tracking-widest">CONSTITUENCIES</div>
                    <div className="p-1 flex items-center space-x-1 text-green-200 border-t border-green-300/20">
                        <button onClick={() => loadData("constituencies",{})} className="px-3 py-1  h-full flex-1 text-sm bg-green-300/10  rounded border border-green-300/20">Detailed Results</button>
                    </div>
                </div> 
                <div className="flex-1 border border-green-300/20 rounded">
                    <div className="px-6 py-3 text-center text-green-200 tracking-widest">POLLING STATIONS</div>
                    <div className="p-1 flex items-center space-x-1 text-green-200 border-t border-green-300/20">
                        <button onClick={() => loadData("stations",{})} className="px-3 py-1  h-full flex-2 text-sm bg-green-300/10  rounded border border-green-300/20">Detailed Results</button>
                        <button onClick={() => loadData("contentions",{})} className="px-3 py-1  h-full flex-1 text-sm bg-green-300/10  rounded border border-green-300/20">Contentions</button>
                    </div>
                </div>
                <div className="flex-1 border border-green-300/20 rounded">
                    <div className="px-6 py-3 text-center text-green-200 tracking-widest">PARLIAMENT SEATS - 275</div>
                    <div className="p-1 flex items-center space-x-1 text-green-200 border-t border-green-300/20">
                        <button className="px-3 py-1  h-full flex-1 text-sm bg-[#0a3b0a] text-green-200 font-mono rounded ">NDC-250</button>
                        <button className="px-3 py-1  h-full flex-1 text-sm bg-[#181860] text-green-100 font-mono rounded ">NPP-225</button>
                        <button className="px-3 py-1  h-full flex-1 text-sm bg-white font-mono text-black rounded">REST-0</button>
                    </div>
                </div>
                
                
            </div>

            <div className="my-4 flex flex-col md:flex-row md:items-center md:space-x-4 md:space-y-0 space-y-3">
                <div className="flex-1 border border-green-300/20 rounded">
                    <div className="px-6 py-3 text-center text-green-200 tracking-widest">PARLIAMENT - LOST SEATS</div>
                    <div className="p-1 flex items-center space-x-1 text-green-200 border-t border-green-300/20">
                        <button className="px-3 py-1  h-full flex-1 text-sm bg-[#0a3b0a] text-green-200 font-mono rounded">NDC-13</button>
                        <button className="px-3 py-1  h-full flex-1 text-sm bg-[#181860] text-green-100 font-mono rounded">NPP-27</button>
                        <button className="px-3 py-1  h-full flex-1 text-sm bg-white font-mono text-black rounded border border-green">REST-1</button>
                    </div>
                </div>
                <div className="flex-1 border border-green-300/20 rounded">
                    <div className="px-6 py-3 text-center text-green-200 tracking-widest">PARLIAMENT - NEW SEATS</div>
                    <div className="p-1 flex items-center space-x-1 text-green-200 border-t border-green-300/20">
                        <button className="px-3 py-1  h-full flex-1 text-sm bg-[#0a3b0a] text-green-200 font-mono rounded">NDC-26</button>
                        <button className="px-3 py-1  h-full flex-1 text-sm bg-[#181860] text-green-100 font-mono rounded ">NPP-12</button>
                        <button className="px-3 py-1  h-full flex-1 text-sm bg-white font-mono text-black rounded border border-green">REST-1</button>
                    </div>
                </div>
                <div className="flex-1 border border-green-300/20 rounded">
                    <div className="px-6 py-3 text-center text-green-200 tracking-widest">SKIRT & BLOUSE</div>
                    <div className="p-1 flex items-center space-x-1 text-green-200 border-t border-green-300/20">
                        <button onClick={() => loadData("skirt",{})} className="px-3 py-1  h-full flex-1 text-sm bg-green-300/10  rounded border border-green-300/20">View Zones</button>
                    </div>
                </div>
            </div>
           
        </div>
    </>
  )
}

export default PgStrongroom
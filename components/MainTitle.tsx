import React from 'react'

function MainTitle() {
  return (
    <div className="py-2 flex flex-col md:flex-row items-center space-x-3">
        <div className="px-6 py-3 flex-2 flex items-center space-x-2 font-semibold">
            <div className="relative px-3 py-0.5 pt-4 flex-1 border border-green-300/50 rounded text-center text-red-50 font-poppins">
                <span className="py-0.5 px-2 absolute -top-2 left-[50%] -translate-x-[50%] rounded bg-[#86efac] font-bold text-black text-[0.65rem] overflow-hidden">POLLING STATION</span>
                PRESBY MID SCH ASIWA-BOBIAM 
            </div>
        </div>

        <div className="md:px-6 py-3 flex-1 flex flex-col md:flex-row md:items-center md:space-y-0 space-y-3 font-semibold">
            <div className="relative px-3 py-0.5 pt-4 flex-1 border border-green-300/50 rounded md:rounded-none md:rounded-l text-center text-green-200 font-poppins">
                <span className="py-0.5 px-2 absolute -top-2 left-[50%] -translate-x-[50%] rounded bg-[#86efac] font-bold text-black text-[0.65rem]">REGION</span>
                WESTERN NORTH
            </div>
            <div className="relative px-3 py-0.5 pt-4 flex-1 border border-green-300/50 rounded md:rounded-none text-center text-green-200 font-poppins">
                <span className="py-0.5 px-2 absolute -top-2 left-[50%] -translate-x-[50%] rounded bg-[#86efac] font-bold text-black text-[0.65rem]">CONSTITUENCY</span>
                AOWIN 
            </div>
            <div className="relative px-3 py-0.5 pt-4 flex-1 border border-green-300/50 rounded md:rounded-none md:rounded-r text-center text-green-200 font-poppins">
                <span className="py-0.5 px-2 absolute -top-2 left-[50%] -translate-x-[50%] rounded bg-[#86efac] font-bold text-black text-[0.65rem]">ELECTORAL AREA</span>
                PRESBY MID SCH ASIWA-BOBIAM 
            </div>
        </div>
    </div>
  )
}

export default MainTitle
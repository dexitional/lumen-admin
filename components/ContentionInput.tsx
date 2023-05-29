import React from 'react'

type Props = {
    label: string;
    name: string;
    register: any;
    hint: string;
}

function ContentionInput({ label,hint,name,register }: Props) {
  return (
    <div className="px-4 py-2 flex flex-col space-y-3 rounded border border-green-300/20 text-sm">
        <span className="flex-1 tracking-widest text-green-200 text-base font-medium">{label} <br/><span className="text-green-50 text-[0.6rem] font-semibold">{hint}</span></span>
        {/* <select multiple className=" hidden py-2 px-6 md:py-0.5 w-full group md:flex-1 tracking-widest text-red-50 text-sm font-mono font-bold rounded bg-green-300/20 border border-green-300/20 focus:outline-none placeholder:text-green-300/50 placeholder:font-medium placeholder:tracking-tight scrollbar-hide" name={name} {...register}>
            <option value="c1" className="group-focus-within:bg-red-300">No Contention</option>
            <option value="c1">C1 - overvotting</option>
            <option value="c3">C3 - Moverble</option>
        </select> */}
        <div className="flex flex-col space-y-2 md:space-y-0.5">
            <label htmlFor="ok" className="flex items-center space-x-4 cursor-pointer group">
              <input id="ok" type="checkbox" className="bg-transparent rounded-sm border-2 border-green-300/50 focus:outline-none focus:ring-0 group-hover:bg-green-300/20 hover:ring-0 hover:bg-transparent hover:border-2 hover:border-green-300/50 checked:bg-red-500 group-checked:ring-0 group-checked:outline-none"/>
              <span className="font-semibold">NO CONTENTION IN POLLING STATION</span>
            </label>
            <label htmlFor="c1" className="flex items-center space-x-4 cursor-pointer group">
              <input id="c1" type="checkbox" className="bg-transparent rounded-sm border-2 border-green-300/50 focus:outline-none focus:ring-0 group-hover:bg-green-300/20 hover:ring-0 hover:bg-transparent hover:border-2 hover:border-green-300/50 checked:bg-red-500 group-checked:ring-0 group-checked:outline-none"/>
              <span>C1: OVER VOTES BASED ON BALLOT ISSUED</span>
            </label>
            <label htmlFor="c3" className="flex items-center space-x-4 cursor-pointer group">
              <input id="c3" type="checkbox" className="bg-transparent rounded-sm border-2 border-green-300/50 focus:outline-none focus:ring-0 group-hover:bg-green-300/20 hover:ring-0 hover:bg-transparent hover:border-2 hover:border-green-300/50 checked:bg-red-500 group-checked:ring-0 group-checked:outline-none"/>
              <span>C3: BIOMETRIC VERIFICATION MACHINE NOT USED</span>
            </label>
            <label htmlFor="ds" className="flex items-center space-x-4 cursor-pointer group">
              <input id="ds" type="checkbox" className="bg-transparent rounded-sm border-2 border-green-300/50 focus:outline-none focus:ring-0 group-hover:bg-green-300/20 hover:ring-0 hover:bg-transparent hover:border-2 hover:border-green-300/50 checked:bg-red-500 group-checked:ring-0 group-checked:outline-none"/>
              <span>DS: SAME SERIAL NUMBER USED ON MULTIPLE REDSHEETS</span>
            </label>
            <label htmlFor="dp" className="flex items-center space-x-4 cursor-pointer group">
              <input id="dp" type="checkbox" className="bg-transparent rounded-sm border-2 border-green-300/50 focus:outline-none focus:ring-0 group-hover:bg-green-300/20 hover:ring-0 hover:bg-transparent hover:border-2 hover:border-green-300/50 checked:bg-red-500 group-checked:ring-0 group-checked:outline-none"/>
              <span>DP: DIFFERENT RESULTS FOR THE SAME POLLING STATION CODE</span>
            </label>
            <label htmlFor="ns" className="flex items-center space-x-4 cursor-pointer group">
              <input id="ns" type="checkbox" className="bg-transparent rounded-sm border-2 border-green-300/50 focus:outline-none focus:ring-0 group-hover:bg-green-300/20 hover:ring-0 hover:bg-transparent hover:border-2 hover:border-green-300/50 checked:bg-red-500 group-checked:ring-0 group-checked:outline-none"/>
              <span>NS: SIGNATURE OF PRESIDING OFFICER OR ASSISTANT MISSING</span>
            </label>
            <label htmlFor="uk" className="flex items-center space-x-4 cursor-pointer group">
              <input id="uk" type="checkbox" className="bg-transparent rounded-sm border-2 border-green-300/50 focus:outline-none focus:ring-0 group-hover:bg-green-300/20 hover:ring-0 hover:bg-transparent hover:border-2 hover:border-green-300/50 checked:bg-red-500 group-checked:ring-0 group-checked:outline-none"/>
              <span>UK: UNKNOWN POLLING STATIONS</span>
            </label>
        </div>
       
       
    </div>
                                
  )
}

export default ContentionInput
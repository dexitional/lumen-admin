import React from 'react'

type Props = {
    label: string;
    name: string;
    type: string;
    register: any
}

function PollInput({ label,name,type,register }: Props) {
  return (
    <div className="px-4 py-2 flex flex-col md:flex-row items-center md:space-x-4 rounded border border-green-300/20 text-sm">
        <span className="flex-1 tracking-widest text-green-200 font-medium">{label}</span>
        <input className="py-2 px-6 md:py-0.5 w-full md:flex-1 tracking-widest text-red-50 text-lg font-mono font-bold rounded bg-green-300/20 border border-green-300/20 focus:outline-none placeholder:text-green-300/50 placeholder:font-medium placeholder:tracking-tight" type={type} name={name} {...register} placeholder="Enter Figure " />
    </div>
                                
  )
}

export default PollInput
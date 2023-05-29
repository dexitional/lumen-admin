import React from 'react'

type Props = {
    label: string;
    name: string;
    register: any;
    hint: string;
}

function PinkSheetUpload({ label,hint,name,register }: Props) {
  return (
    <div className="px-4 py-2 flex flex-col md:flex-row space-y-3 rounded border border-green-300/20 text-sm">
        <div className="flex-1 tracking-widest text-green-200 font-medium">{label} <br/><span className="text-green-50 text-[0.6rem] font-semibold">{hint}</span></div>
        <input type="file" className="py-2 px-6 w-32 md:py-0.5 group text-red-50 text-sm font-mono font-bold bg-transparent file:bg-green-300/20 file:border-2 file:border-green-300/10 file:rounded file:text-green-200 file:" name={name} {...register} />
    </div>
                                
  )
}

export default PinkSheetUpload
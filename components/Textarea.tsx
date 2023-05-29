import React from 'react'

type Props = {
    label: string;
    name: string;
    register: any
}

function Textarea({ label,name,register }: Props) {
  return (
    <div className="p-2 md:p-3 flex flex-col space-y-1 border border-green-300/10 rounded">
        <span className="text-sm tracking-wider">{label}</span>
        <textarea className="px-3 py-1 rounded border border-green-300/20 bg-green-300/10 focus:outline-0 text-base text-green-50 scrollbar-hide" name={name} {...register} />
    </div>
  )
}

export default Textarea
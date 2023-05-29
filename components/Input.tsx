import React from 'react'

type Props = {
    label: string;
    name: string;
    type: string;
    register: any
}

function Input({ label,name,type,register }: Props) {
  return (
    <div className="p-2 md:p-3 flex flex-col space-y-1 border border-blue-200/20 rounded">
        <span className="text-sm tracking-wider">{label}</span>
        <input className="px-3 py-1 rounded border border-blue-400/20 bg-blue-300/10 focus:ring-0 text-base text-blue-900/60" {...register} type={type} name={name} />
    </div>
  )
}

export default Input
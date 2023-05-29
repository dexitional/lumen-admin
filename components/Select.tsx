import React from 'react'

type Props = {
    label: string;
    name: string;
    register: any,
    data: any;
}

// value,label,
function Select({ label,name,data,register }: Props) {
  return (
    <div className="p-2 md:p-3 flex flex-col space-y-1 border border-blue-200/20 rounded">
        <span className="text-sm tracking-wider">{label}</span>
        <select className="px-3 py-1 rounded border border-blue-400/20 bg-blue-300/10 focus:ring-0 text-base text-blue-900/60 scrollbar-hide file:text-red-500" >
            <option disabled selected className="p-2 py-4 ">-- select -- </option>
            { data.map(( row: any,i: React.Key ) => (<option key={i} value={row.value}>{row.label}</option>))}
        </select>
    </div>
  )
}

export default Select
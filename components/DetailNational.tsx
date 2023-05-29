import React from 'react'
import { FiCheckSquare,FiCheck } from 'react-icons/fi'
import { MdCheckBoxOutlineBlank } from 'react-icons/md';

type Props = {
    title: string;
    data: any
}


function DetailNational({ title,data }: Props) {
  return (
    <div className="my-6 flex flex-col items-center bg-white">
        <h1 className="font-serif text-xl font-semibold underline">REGIONAL SUMMARY </h1>
        <p className="underline font-semibold">PRESIDENTIAL RESULTS</p>
        <div className=" my-4 w-full max-w-4xl">
            
            <table className="px-2 w-full border-collapse rounded border-2 border-black">
                <tr className="grid grid-cols-10 text-sm font-mono font-bold">
                    <td colSpan={2} className="px-2 py-2 col-span-2 border-b-2 border-r-2 border-black">REGION</td>
                    <td className="px-2 py-2 border-b-2 col-span-2 border-r-2 border-black">TOTAL VOTERS</td>
                    <td className="px-2 py-2 border-b-2 border-r-2 border-black flex-1">REJECTED </td>
                    <td className="px-2 py-2 border-b-2 border-r-2 border-black flex-1">NDC</td>
                    <td className="px-2 py-2 border-b-2 border-r-2 border-black flex-1">NPP</td>
                    <td className="px-2 py-2 border-b-2 border-r-2 border-black flex-1">CPP</td>
                    <td className="px-2 py-2 border-b-2 border-r-2 border-black flex-1">PPP</td>
                    <td className="px-2 py-2 border-b-2 border-black flex-1">OTHERS</td>
                </tr>
                <tr className="grid grid-cols-10  text-xs font-mono font-semibold">
                    <td colSpan={2} className="px-2 py-1 col-span-2 border-b-2 border-r-2 border-black">WESTERN NORTH</td>
                    <td className="px-2 py-1 col-span-2 border-b-2 border-r-2  border-black">10017418</td>
                    <td className="px-2 py-1 flex-1 border-b-2 border-r-2  border-black">20944216</td>
                    <td className="px-2 py-1 flex-1 border-b-2 border-r-2  border-black">14044216</td>
                    <td className="px-2 py-1 flex-1 border-b-2 border-r-2  border-black">44216</td>
                    <td className="px-2 py-1 flex-1 border-b-2 border-r-2  border-black">4216</td>
                    <td className="px-2 py-1 flex-1 border-b-2 border-r-2  border-black">5216</td>
                    <td className="px-2 py-1 flex-1 border-b-2 border-black">2300</td>
                </tr>
        
            </table>
        </div>
    </div>
  )
}

export default DetailNational
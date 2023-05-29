import React from 'react'
import { FiCheckSquare,FiCheck } from 'react-icons/fi'
import { MdCheckBoxOutlineBlank } from 'react-icons/md';

type Props = {
    title: string;
    data: any
}


function DetailRegion({ title,data }: Props) {
  return (
    <div className="my-6 flex flex-col items-center bg-white">
        <h1 className="font-serif text-xl font-semibold underline">CONSTITUENCY SUMMARY</h1>
        <p className="underline font-semibold">PRESIDENTIAL RESULTS</p>
        <div className=" my-4 w-full max-w-4xl">
            
            <table className="px-2 w-full border-collapse rounded border-2 border-black">
                <tr className="flex text-sm font-mono font-bold">
                    <td colSpan={2} className="px-2  py-2 w-48 border-b-2 border-r-2 border-black">REGION</td>
                    <td colSpan={2} className="px-2 py-2 w-80 border-b-2 border-r-2 border-black">CONSTITUENCY</td>
                    <td className="px-2 py-2 border-b-2 border-r-2 border-black flex-1">CODE</td>
                    <td className="px-2 py-2 border-b-2  w-28 border-r-2 border-black">TOTAL VOTERS</td>
                    <td className="px-2 py-2 border-b-2 border-r-2 border-black flex-1">NDC</td>
                    <td className="px-2 py-2 border-b-2 border-r-2 border-black flex-1">NPP</td>
                    <td className="px-2 py-2 border-b-2 border-r-2 border-black flex-1">OTHERs</td>
                </tr>
                <tr className="flex text-xs font-mono font-semibold">
                    <td colSpan={2} className="px-2 py-1 w-48 border-b-2 border-r-2 border-black">WESTERN NORTH</td>
                    <td colSpan={2} className="px-2 py-1 w-80 border-b-2 border-r-2  border-black">TINA NAA AYELEY</td>
                    <td className="px-2 py-1 flex-1 border-b-2 border-r-2  border-black">A0101</td>
                    <td className="px-2 py-1 w-28 border-b-2 border-r-2  border-black">117418</td>
                    <td className="px-2 py-1 flex-1 border-b-2 border-r-2  border-black">9944216</td>
                    <td className="px-2 py-1 flex-1 border-b-2 border-r-2  border-black">5337020</td>
                    <td className="px-2 py-1 flex-1 border-b-2 border-black">57020</td>
                </tr>
                <tr className="flex text-xs font-mono font-semibold">
                    <td colSpan={2} className="px-2 py-1 w-48 border-b-2 border-r-2 border-black">WESTERN NORTH</td>
                    <td colSpan={2} className="px-2 py-1 w-80 border-b-2 border-r-2  border-black">TINA NAA AYELEY</td>
                    <td className="px-2 py-1 flex-1 border-b-2 border-r-2  border-black">A0101</td>
                    <td className="px-2 py-1 w-28 border-b-2 border-r-2  border-black">117418</td>
                    <td className="px-2 py-1 flex-1 border-b-2 border-r-2  border-black">94216</td>
                    <td className="px-2 py-1 flex-1 border-b-2 border-r-2  border-black">57020</td>
                    <td className="px-2 py-1 flex-1 border-b-2 border-black">57020</td>
                </tr>
                <tr className="flex text-xs font-mono font-semibold">
                    <td colSpan={2} className="px-2 py-1 w-48 border-b-2 border-r-2 border-black">WESTERN NORTH</td>
                    <td colSpan={2} className="px-2 py-1 w-80 border-b-2 border-r-2  border-black">TINA NAA AYELEY</td>
                    <td className="px-2 py-1 flex-1 border-b-2 border-r-2  border-black">A0101</td>
                    <td className="px-2 py-1 w-28 border-b-2 border-r-2  border-black">117418</td>
                    <td className="px-2 py-1 flex-1 border-b-2 border-r-2  border-black">94216</td>
                    <td className="px-2 py-1 flex-1 border-b-2 border-r-2  border-black">57020</td>
                    <td className="px-2 py-1 flex-1 border-b-2 border-black">57020</td>
                </tr>
               
            </table>
        </div>
    </div>
  )
}

export default DetailRegion
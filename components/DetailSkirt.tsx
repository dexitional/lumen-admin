import React from 'react'
import { FiCheckSquare,FiCheck } from 'react-icons/fi'
import { MdCheckBoxOutlineBlank } from 'react-icons/md';

type Props = {
    title: string;
    data: any
}


function DetailSkirt({ title,data }: Props) {
  return (
    <div className="my-6 flex flex-col items-center bg-white">
        <h1 className="font-serif text-xl font-semibold underline">CONSTITUENCY SUMMARY</h1>
        <p className="underline font-semibold">SKIRT & BLOUSE OUTCOME</p>
        <div className=" my-4 w-full max-w-4xl">
            
            <table className="px-2 w-full border-collapse rounded border-2 border-black">
                <tr className="flex text-sm font-mono font-bold">
                    <td colSpan={2} className="px-2  py-2 w-48 border-b-2 border-r-2 border-black">REGION</td>
                    <td colSpan={2} className="px-2 py-2 w-80 border-b-2 border-r-2 border-black">CONSTITUENCY</td>
                    <td className="px-2 py-2 border-b-2  flex-1 border-r-2 border-black">PRESIDENTIAL</td>
                    <td className="px-2 py-2 border-b-2 border-r-2 border-black flex-1">PARLIAMENTARY</td>
                </tr>
                <tr className="flex text-xs font-mono font-semibold">
                    <td colSpan={2} className="px-2 py-1 w-48 border-b-2 border-r-2 border-black">WESTERN NORTH</td>
                    <td colSpan={2} className="px-2 py-1 w-80 border-b-2 border-r-2  border-black">TINA NAA AYELEY</td>
                    <td className="px-2 py-1 flex-1 border-b-2 border-r-2  border-black">NDC</td>
                    <td className="px-2 py-1 flex-1 border-b-2 border-r-2  border-black">NPP</td>
                </tr>
                <tr className="flex text-xs font-mono font-semibold">
                    <td colSpan={2} className="px-2 py-1 w-48 border-b-2 border-r-2 border-black">GREATER ACCRA</td>
                    <td colSpan={2} className="px-2 py-1 w-80 border-b-2 border-r-2  border-black">ABLEKUMA CENTRAL</td>
                    <td className="px-2 py-1 flex-1 border-b-2 border-r-2  border-black">NDC</td>
                    <td className="px-2 py-1 flex-1 border-b-2 border-r-2  border-black">NPP</td>
                </tr>
               
            </table>
        </div>
    </div>
  )
}

export default DetailSkirt
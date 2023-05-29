import React from 'react'
import { FiCheckSquare,FiCheck } from 'react-icons/fi'
import { MdCheckBoxOutlineBlank } from 'react-icons/md';

type Props = {
    title: string;
    data: any
}


function DetailStation({ title,data }: Props) {
  return (
    <div className="my-6 flex flex-col items-center bg-white">
        <h1 className="font-serif text-xl font-semibold underline">Detailed {title} Election Results</h1>
        <p className="underline font-medium">Date of Election: 7th & 8th December 2024</p>
        <div className="my-4 w-full max-w-4xl">
            <div className="w-full border-b border-black flex items-center space-x-6">
                <span className="text-sm">Region</span>
                <span className="text-sm font-semibold uppercase">GREATER ACCRA</span>
            </div>
            <div className="py-2 border-b border-black flex items-center justify-between">
                <div className="flex items-center space-x-6">
                    <span className="font-semibold font-serif">Polling Station:</span>
                    <span className="font-semibold font-mono">WEIJA GBAWE NKWANTANAN</span>
                </div>
                <div className="flex items-center space-x-6">
                    <span className="font-semibold font-serif">Constituency:</span>
                    <span className="font-semibold font-mono">WEIJA/GBAWE</span>
                </div>
                <div className="flex items-center space-x-8 ">
                    <span className="font-semibold font-serif">Registered Voters:</span>
                    <span className="font-semibold font-mono">89,843</span>
                </div>
            </div>
            <table className="w-full border-collapse">
                <tr className="flex text-sm font-mono font-bold">
                    <td  colSpan={2} className="py-2 w-96 border-b-2 border-double border-black">Name</td>
                    <td className="py-2 border-b-2 border-double border-black flex-1">Party</td>
                    <td className="py-2 border-b-2 border-double border-black flex-1">Sex</td>
                    <td className="py-2 border-b-2 border-double border-black flex-1">Age</td>
                    <td className="py-2 border-b-2 border-double border-black flex-1">Votes</td>
                    <td className="py-2 border-b-2 border-double border-black flex-1">Pcnt</td>
                    <td className="py-2 border-b-2 border-double border-black flex-1">Elected</td>
                </tr>
                <tr className="flex text-xs font-mono font-semibold">
                    <td colSpan={2} className="py-1 w-96">TINA NAA AYELEY</td>
                    <td className="py-1 flex-1">NDC</td>
                    <td className="py-1 flex-1">F</td>
                    <td className="py-1 flex-1">52</td>
                    <td className="py-1 flex-1">34,216</td>
                    <td className="py-1 flex-1">57.29%</td>
                    <td className="py-1 flex-1">
                        <FiCheckSquare className="h-4 w-4" />
                    </td>
                </tr>
                <tr className="flex text-xs font-mono font-semibold">
                    <td colSpan={2} className="py-1 w-96">GIFTY NAA MENSAH</td>
                    <td className="py-1 flex-1">NPP</td>
                    <td className="py-1 flex-1">F</td>
                    <td className="py-1 flex-1">52</td>
                    <td className="py-1 flex-1">34,216</td>
                    <td className="py-1 flex-1">57.29%</td>
                    <td className="py-1 flex-1">
                        <MdCheckBoxOutlineBlank className="h-5 w-4" />
                    </td>
                </tr>
                <tr className="flex text-xs font-mono font-semibold">
                    <td colSpan={2} className="py-1 w-96">TINA GIFTY NAA AYELEY MENSAH</td>
                    <td className="py-1 flex-1">CPP</td>
                    <td className="py-1 flex-1">F</td>
                    <td className="py-1 flex-1">52</td>
                    <td className="py-1 flex-1">34,216</td>
                    <td className="py-1 flex-1">57.29%</td>
                    <td className="py-1 flex-1">
                        <MdCheckBoxOutlineBlank className="h-4 w-4" />
                    </td>
                </tr>
            </table>
            <div className="pt-6 py-2 border-b border-black flex items-center justify-between">
                <div className="flex items-center space-x-6">
                    <span className="font-semibold font-mono">Valid Votes:</span>
                    <span className="font-medium font-mono">89,843</span>
                </div>
                <div className="flex items-center space-x-6">
                    <span className="font-semibold font-mono">Rejected Votes:</span>
                    <span className="font-medium font-mono">89,843</span>
                </div>
                <div className="flex items-center space-x-6">
                    <span className="font-semibold font-mono">Total Votes Cast:</span>
                    <span className="font-medium font-mono">89,843</span>
                </div>
                <div className="flex items-center space-x-6">
                    <span className="font-semibold font-mono">Turn-Out:</span>
                    <span className="font-medium font-mono">67.00%</span>
                </div>
            </div>

        </div>
    </div>
  )
}

export default DetailStation
import React from 'react'
import { FiCheckSquare,FiCheck } from 'react-icons/fi'
import { MdCheckBoxOutlineBlank } from 'react-icons/md';

type Props = {
    title: string;
    data: any
}


function DetailConstituency({ title,data }: Props) {
  return (
    <div className="my-6 flex flex-col items-center bg-white">
        <h1 className="font-serif text-lg md:text-xl text-center font-semibold underline">Detailed {title} Election Results</h1>
        <p className="underline font-medium">Date of Election: 7th & 8th December 2024</p>
        <div className="my-4 w-full max-w-4xl flex flex-col">
            <div className="w-full flex flex-col">
                <div className="w-full border-b border-black flex items-center space-x-6">
                    <span className="text-sm">Region</span>
                    <span className="text-sm font-semibold uppercase">GREATER ACCRA</span>
                </div>
                <div className="py-2 md:border-b border-black flex flex-col md:flex-row items-center md:justify-between space-y-2">
                    <div className="flex flex-col md:flex-row items-center md:space-x-6">
                        <span className="font-semibold font-serif">Constituency:</span>
                        <span className="font-semibold font-mono">WEIJA/GBAWE</span>
                    </div>
                    <div className="flex flex-col md:flex-row items-center md:space-x-8 ">
                        <span className="font-semibold font-serif">Registered Voters:</span>
                        <span className="font-semibold font-mono">89,843</span>
                    </div>
                </div>
            </div>
            <table className="w-full border-collapse divide-y-2 md:divide-y-0 divide-dashed divide-slate-500">
                <tr className="hidden md:flex text-sm font-mono font-bold">
                    <td  colSpan={2} className="py-2 w-96 border-b-2 border-double border-black">Name</td>
                    <td className="py-2 border-b-2 border-double border-black flex-1">Party</td>
                    <td className="py-2 border-b-2 border-double border-black flex-1">Sex</td>
                    <td className="py-2 border-b-2 border-double border-black flex-1">Age</td>
                    <td className="py-2 border-b-2 border-double border-black flex-1">Votes</td>
                    <td className="py-2 border-b-2 border-double border-black flex-1">Pcnt</td>
                    <td className="py-2 border-b-2 border-double border-black flex-1">Elected</td>
                </tr>
                <tr className="flex flex-col md:flex-row text-xs font-mono font-semibold">
                    <td colSpan={2} className="py-1 md:w-96 flex flex-col space-y-1 md:space-y-0">
                        <span className="p-0.5 px-1.5 rounded bg-gray-100 text-sm text-gray-500 tracking-widest md:hidden">Name</span>
                        <span className="indent-2 md:indent-0">TINA NAA AYELEY</span>
                    </td>
                    <td className="py-1 flex-1  flex flex-col space-y-1 md:space-y-0">
                        <span className="p-0.5 px-1.5 rounded bg-gray-100 text-sm text-gray-500 tracking-widest md:hidden">Party</span>
                        <span className="indent-2 md:indent-0">NDC</span>
                    </td>
                    <td className="py-1 flex-1  flex flex-col space-y-1 md:space-y-0">
                        <span className="p-0.5 px-1.5 rounded bg-gray-100 text-sm text-gray-500 tracking-widest md:hidden">Sex</span>
                        <span className="indent-2 md:indent-0">F</span>
                    </td>
                    <td className="py-1 flex-1  flex flex-col space-y-1 md:space-y-0">
                        <span className="p-0.5 px-1.5 rounded bg-gray-100 text-sm text-gray-500 tracking-widest md:hidden">Age</span>
                        <span className="indent-2 md:indent-0">52</span>
                    </td>
                    <td className="py-1 flex-1  flex flex-col space-y-1 md:space-y-0">
                        <span className="p-0.5 px-1.5 rounded bg-gray-100 text-sm text-gray-500 tracking-widest md:hidden">Votes</span>
                        <span className="indent-2 md:indent-0">34,216</span>
                    </td>
                    <td className="py-1 flex-1  flex flex-col space-y-1 md:space-y-0">
                        <span className="p-0.5 px-1.5 rounded bg-gray-100 text-sm text-gray-500 tracking-widest md:hidden">Pcnt</span>
                        <span className="indent-2 md:indent-0">57.29%</span>
                    </td>
                    <td className="py-1 flex-1  flex flex-col space-y-1 md:space-y-0">
                        <span className="p-0.5 px-1.5 rounded bg-gray-100 text-sm text-gray-500 tracking-widest md:hidden">Elected</span>
                        <FiCheckSquare className="ml-2 h-7 w-6 md:h-4 md:w-4" />
                    </td>
                </tr>
                <tr className="flex flex-col md:flex-row text-xs font-mono font-semibold">
                    <td colSpan={2} className="py-1 md:w-96 flex flex-col space-y-1 md:space-y-0">
                        <span className="p-0.5 px-1.5 rounded bg-gray-100 text-sm text-gray-500 tracking-widest md:hidden">Name</span>
                        <span className="indent-2 md:indent-0">GIFTY NAA MENSAH</span>
                    </td>
                    <td className="py-1 flex-1  flex flex-col space-y-1 md:space-y-0">
                        <span className="p-0.5 px-1.5 rounded bg-gray-100 text-sm text-gray-500 tracking-widest md:hidden">Party</span>
                        <span className="indent-2 md:indent-0">NPP</span>
                    </td>
                    <td className="py-1 flex-1  flex flex-col space-y-1 md:space-y-0">
                        <span className="p-0.5 px-1.5 rounded bg-gray-100 text-sm text-gray-500 tracking-widest md:hidden">Sex</span>
                        <span className="indent-2 md:indent-0">F</span>
                    </td>
                    <td className="py-1 flex-1  flex flex-col space-y-1 md:space-y-0">
                        <span className="p-0.5 px-1.5 rounded bg-gray-100 text-sm text-gray-500 tracking-widest md:hidden">Age</span>
                        <span className="indent-2 md:indent-0">52</span>
                    </td>
                    <td className="py-1 flex-1  flex flex-col space-y-1 md:space-y-0">
                        <span className="p-0.5 px-1.5 rounded bg-gray-100 text-sm text-gray-500 tracking-widest md:hidden">Votes</span>
                        <span className="indent-2 md:indent-0">34,216</span>
                    </td>
                    <td className="py-1 flex-1  flex flex-col space-y-1 md:space-y-0">
                        <span className="p-0.5 px-1.5 rounded bg-gray-100 text-sm text-gray-500 tracking-widest md:hidden">Pcnt</span>
                        <span className="indent-2 md:indent-0">57.29%</span>
                    </td>
                    <td className="py-1 flex-1  flex flex-col space-y-1 md:space-y-0">
                        <span className="p-0.5 px-1.5 rounded bg-gray-100 text-sm text-gray-500 tracking-widest md:hidden">Elected</span>
                        <MdCheckBoxOutlineBlank className="ml-2 h-7 w-6 md:h-5 md:w-4" />
                    </td>
                </tr>
            </table>
            <div className="pt-6 py-2 w-full border-t md:border-b border-black flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex md:items-center justify-between md:space-x-6">
                    <span className="font-semibold font-mono">Valid Votes:</span>
                    <span className="font-medium font-mono">89,843</span>
                </div>
                <div className="flex md:items-center justify-between md:space-x-6">
                    <span className="font-semibold font-mono">Rejected Votes:</span>
                    <span className="font-medium font-mono">89,843</span>
                </div>
                <div className="flex md:items-center justify-between md:space-x-6">
                    <span className="font-semibold font-mono">Total Votes Cast:</span>
                    <span className="font-medium font-mono">89,843</span>
                </div>
                <div className="flex md:items-center justify-between md:space-x-6">
                    <span className="font-semibold font-mono">Turn-Out:</span>
                    <span className="font-medium font-mono">67.00%</span>
                </div>
            </div>

        </div>
    </div>
  )
}

export default DetailConstituency
import React from 'react'
import { FiCheckSquare,FiCheck } from 'react-icons/fi'
import { MdCheckBoxOutlineBlank } from 'react-icons/md';

type Props = {
    data: any;
    cid: string | null;
}


function DetailContention({ data, cid = null }: Props) {
  return (
    <div className="my-6 flex flex-col items-center bg-white">
        <h1 className="font-serif text-lg md:text-xl text-center font-semibold md:underline">LIST OF POLLING STATIONS IN CONTENTION</h1>
        <div className=" my-4 w-full max-w-6xl">
            <table className="px-2 w-full border-collapse divide-y-2 md:divide-y-0 divide-dashed divide-slate-500 rounded border-t-2 border-black text-[0.4rem]">
                <tr className="bg-green-300 hidden md:grid md:grid-flow-col text-[0.55rem] font-poppins font-extrabold">
                    <td className="px-2 py-0 border-b-2 border-black">CAT</td>
                    <td className="px-2 py-0 col-span-2 border-b-2 border-black">REGION</td>
                    <td className="px-2 py-0 col-span-2 border-b-2 border-black">CONSTITUENCY NAME</td>
                    <td className="px-2 py-0 col-span-2 border-b-2 border-black">PSName</td>
                    <td className="px-2 py-0 border-b-2 border-black">PSCode</td>
                    <td className="px-2 py-0 border-b-2 border-black">SerialNum</td>
                    <td className="px-2 py-0 border-b-2 border-black">NDC</td>
                    <td className="px-2 py-0 border-b-2 border-black">NPP</td>
                    <td className="px-2 py-0 border-b-2 border-black">CPP</td>
                    <td className="px-2 py-0 border-b-2 border-black">PPP</td>
                    <td className="px-2 py-0 border-b-2 border-black">OTHERS</td>
                    <td className="px-2 py-0 border-b-2 border-black">TOTAL VALID VOTES</td>
                </tr>
                <tr className="py-4 md:py-0 grid grid-cols-1 md:grid-flow-col text-xs md:text-[0.55rem] font-arial font-semibold ">
                    <td className="px-2 py-0 flex flex-col space-y-1 md:space-y-0">
                        <span className="p-0.5 px-1.5 rounded bg-gray-100 text-gray-500 tracking-widest md:hidden">CAT</span>
                        <span className="indent-2 md:indent-0">C1-C3-DS-</span>
                    </td>
                    <td className="px-2 py-0 col-span-2 flex flex-col space-y-1 md:space-y-0">
                        <span className="p-0.5 px-1.5 rounded bg-gray-100 text-gray-500 tracking-widest md:hidden">REGION</span>
                        <span className="indent-2 md:indent-0">ASHANTI NORTHERN</span>
                    </td>
                    <td className="px-2 py-0 col-span-2 flex flex-col space-y-1 md:space-y-0">
                        <span className="p-0.5 px-1.5 rounded bg-gray-100 text-gray-500 tracking-widest md:hidden">CONSTITUENCY NAME</span>
                        <span className="indent-2 md:indent-0">ATWIMA NWABIAGYA NORTH</span>
                    </td>
                    <td className="px-2 py-0 col-span-2 flex flex-col space-y-1 md:space-y-0">
                        <span className="p-0.5 px-1.5 rounded bg-gray-100 text-gray-500 tracking-widest md:hidden">PSName</span>
                        <span className="indent-2 md:indent-0">D/A PRIM SCH KOJOBOURKROM</span>
                    </td>
                    <td className="px-2 py-0 flex flex-col space-y-1 md:space-y-0">
                        <span className="p-0.5 px-1.5 rounded bg-gray-100 text-gray-500 tracking-widest md:hidden">PSCode</span>
                        <span className="indent-2 md:indent-0">G110504</span>
                    </td>
                    <td className="px-2 py-0 flex flex-col space-y-1 md:space-y-0"> 
                        <span className="p-0.5 px-1.5 rounded bg-gray-100 text-gray-500 tracking-widest md:hidden">SerialNum</span>
                        <span className="indent-2 md:indent-0">04977</span></td>
                    <td className="px-2 py-0 flex flex-col space-y-1 md:space-y-0">
                        <span className="p-0.5 px-1.5 rounded bg-gray-100 text-gray-500 tracking-widest md:hidden">NDC</span>
                        <span className="indent-2 md:indent-0">495</span>
                    </td>
                    <td className="px-2 py-0 flex flex-col space-y-1 md:space-y-0">
                        <span className="p-0.5 px-1.5 rounded bg-gray-100 text-gray-500 tracking-widest md:hidden">NPP</span>
                        <span className="indent-2 md:indent-0">495</span>
                    </td>
                    <td className="px-2 py-0 flex flex-col space-y-1 md:space-y-0">
                        <span className="p-0.5 px-1.5 rounded bg-gray-100 text-gray-500 tracking-widest md:hidden">CPP</span>
                        <span className="indent-2 md:indent-0">495</span>
                    </td>
                    <td className="px-2 py-0 flex flex-col space-y-1 md:space-y-0">
                        <span className="p-0.5 px-1.5 rounded bg-gray-100 text-gray-500 tracking-widest md:hidden">PPP</span>
                        <span className="indent-2 md:indent-0">456</span>
                    </td>
                    <td className="px-2 py-0 flex flex-col space-y-1 md:space-y-0">
                        <span className="p-0.5 px-1.5 rounded bg-gray-100 text-gray-500 tracking-widest md:hidden">OTHERS</span>
                        <span className="indent-2 md:indent-0">13444</span>
                    </td>
                    <td className="px-2 py-0 flex flex-col space-y-1 md:space-y-0">
                        <span className="p-0.5 px-1.5 rounded bg-gray-100 text-gray-500 tracking-widest md:hidden">TOTAL VALID VOTES</span>
                        <span className="indent-2 md:indent-0">200000</span>
                    </td>
                </tr>
                <tr className="py-4 md:py-0 flex flex-col md:flex-row text-xs md:text-[0.55rem] font-arial font-semibold ">
                    <td className="px-2 py-0 flex flex-col space-y-1 md:space-y-0">
                        <span className="p-0.5 px-1.5 rounded bg-gray-100 text-gray-500 tracking-widest md:hidden">CAT</span>
                        <span className="indent-2 md:indent-0">C1-C3-DS-</span>
                    </td>
                    <td colSpan={2} className="px-2 py-0 flex flex-col space-y-1 md:space-y-0">
                        <span className="p-0.5 px-1.5 rounded bg-gray-100 text-gray-500 tracking-widest md:hidden">REGION</span>
                        <span className="indent-2 md:indent-0">ASHANTI NORTHERN</span>
                    </td>
                    <td colSpan={2} className="px-2 py-0 flex flex-col space-y-1 md:space-y-0">
                        <span className="p-0.5 px-1.5 rounded bg-gray-100 text-gray-500 tracking-widest md:hidden">CONSTITUENCY NAME</span>
                        <span className="indent-2 md:indent-0">ATWIMA NWABIAGYA NORTH</span>
                    </td>
                    <td colSpan={2} className="px-2 py-0 flex flex-col space-y-1 md:space-y-0">
                        <span className="p-0.5 px-1.5 rounded bg-gray-100 text-gray-500 tracking-widest md:hidden">PSName</span>
                        <span className="indent-2 md:indent-0">D/A PRIM SCH KOJOBOURKROM</span>
                    </td>
                    <td className="px-2 py-0 flex flex-col space-y-1 md:space-y-0">
                        <span className="p-0.5 px-1.5 rounded bg-gray-100 text-gray-500 tracking-widest md:hidden">PSCode</span>
                        <span className="indent-2 md:indent-0">G110504</span>
                    </td>
                    <td className="px-2 py-0 flex flex-col space-y-1 md:space-y-0"> 
                        <span className="p-0.5 px-1.5 rounded bg-gray-100 text-gray-500 tracking-widest md:hidden">SerialNum</span>
                        <span className="indent-2 md:indent-0">04977</span></td>
                    <td className="px-2 py-0 flex flex-col space-y-1 md:space-y-0">
                        <span className="p-0.5 px-1.5 rounded bg-gray-100 text-gray-500 tracking-widest md:hidden">NDC</span>
                        <span className="indent-2 md:indent-0">495</span>
                    </td>
                    <td className="px-2 py-0 flex flex-col space-y-1 md:space-y-0">
                        <span className="p-0.5 px-1.5 rounded bg-gray-100 text-gray-500 tracking-widest md:hidden">NPP</span>
                        <span className="indent-2 md:indent-0">495</span>
                    </td>
                    <td className="px-2 py-0 flex flex-col space-y-1 md:space-y-0">
                        <span className="p-0.5 px-1.5 rounded bg-gray-100 text-gray-500 tracking-widest md:hidden">CPP</span>
                        <span className="indent-2 md:indent-0">495</span>
                    </td>
                    <td className="px-2 py-0 flex flex-col space-y-1 md:space-y-0">
                        <span className="p-0.5 px-1.5 rounded bg-gray-100 text-gray-500 tracking-widest md:hidden">PPP</span>
                        <span className="indent-2 md:indent-0">456</span>
                    </td>
                    <td className="px-2 py-0 flex flex-col space-y-1 md:space-y-0">
                        <span className="p-0.5 px-1.5 rounded bg-gray-100 text-gray-500 tracking-widest md:hidden">OTHERS</span>
                        <span className="indent-2 md:indent-0">13444</span>
                    </td>
                    <td className="px-2 py-0 flex flex-col space-y-1 md:space-y-0">
                        <span className="p-0.5 px-1.5 rounded bg-gray-100 text-gray-500 tracking-widest md:hidden">TOTAL VALID VOTES</span>
                        <span className="indent-2 md:indent-0">200000</span>
                    </td>
                </tr>
                {/* <tr className="text-[0.55rem] font-arial font-semibold odd:bg-zinc-200/80">
                    <td className="px-2 py-0">C1-C3-DS-</td>
                    <td colSpan={2} className="px-2 py-0">ASHANTI NORTHERN</td>
                    <td colSpan={2} className="px-2 py-0">ATWIMA NWABIAGYA NORTH</td>
                    <td colSpan={2} className="px-2 py-0">D/A PRIM SCH KOJOBOURKROM</td>
                    <td className="px-2 py-0">G110504</td>
                    <td className="px-2 py-0">04977</td>
                    <td className="px-2 py-0">495</td>
                    <td className="px-2 py-0">495</td>
                    <td className="px-2 py-0">495</td>
                    <td className="px-2 py-0">456</td>
                    <td className="px-2 py-0">13444</td>
                    <td className="px-2 py-0">200000</td>
                </tr> */}
               
                
                
            </table>
        </div>
    </div>
  )
}

export default DetailContention
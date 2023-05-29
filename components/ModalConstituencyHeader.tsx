import React from 'react'
import { FiPrinter } from 'react-icons/fi'
import { MdClose } from 'react-icons/md'

function ModalConstituencyHeader({ setIsOpen }: any) {
  return (
    <div className="px-2 md:px-6 py-2 mb-4 border-b-2 border-green-800 w-full sticky top-0 bg-green-100 flex flex-col md:flex-row space-y-2 md:space-y-0 items-center md:justify-between print:hidden">
        <div className="w-full flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-3">
            <label className="tracking-wide font-mono">CONSTITUENCY</label>
            <div className="w-full flex items-center space-x-3">
                <select name="" className="flex-1 md:w-96 px-4 py-1 ring-0 selected:ring-0 focus:ring-0 border-2 border-green-800  outline-none rounded bg-green-300/20">
                    <option>AOWIN </option>
                    <option>SUAMAN </option>
                </select>
                <button onClick={(e) => setIsOpen(false)} className="px-2 py-1 flex items-center space-x-2 border-2 border-green-800 rounded">
                    <span>Fetch</span>
                </button>
            </div>
            <button className="px-2 py-1 w-fit justify-left flex items-center space-x-2 border-2 border-green-800 rounded">
                <FiPrinter className="h-5 w-5" />
                <span>Print</span>
            </button>
        </div>
        <div className="absolute bottom-2 right-2 md:relative md:bottom-0 md:-right-2 flex items-center space-x-3">
            <button onClick={(e) => setIsOpen(false)} className="px-2 py-1 flex items-center space-x-2 border-2 border-green-800 rounded">
                <MdClose className="h-5 w-5" />
                <span>Close</span>
            </button>
        </div>
    </div>
  )
}

export default ModalConstituencyHeader
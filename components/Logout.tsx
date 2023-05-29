import React from 'react'
import { FiLogOut } from 'react-icons/fi'
import { MdLogout } from 'react-icons/md'

function Logout() {
  return (
    <button className="px-2.5 py-1.5 bg-green-300/10 md:bg-blue-300/30 rounded border border-blue-900/40 flex items-center space-x-2">
        <FiLogOut className="h-5 w-5 text-blue-900/60" />
        <span className="hidden md:flex text-sm font-medium text-blue-900/60 ">Logout</span>
    </button>
  )
}

export default Logout
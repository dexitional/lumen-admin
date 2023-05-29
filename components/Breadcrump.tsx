import React from 'react'

function Breadcrump() {
  return (
    <div className="hidden md:flex items-center space-x-3 text-blue-800 text-[0.7rem] tracking-wide">
        <span>Dexitional</span>
        <div className="h-3 w-0 border-l-2   border-900/40 -skew-x-[25deg]"></div>
        <span>Lectures</span>
    </div>
  )
}

export default Breadcrump
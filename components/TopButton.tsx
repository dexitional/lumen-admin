import React from 'react'
import { IconType } from 'react-icons/lib/esm/iconBase';

type Props = {
    title: string | null;
    Icon: IconType | null;
}

function TopButton({ title = "", Icon = null }: Props) {
  return (
    <div className="px-3 py-2.5 md:py-1 flex items-center justify-center space-x-1.5 bg-blue-300/10 border border-blue-900/40 rounded">
       { Icon ? <Icon  className={`h-4 w-4 ${ title ? `text-blue-800`:`text-blue-800`}`} /> : null }
       { title ? <span className="text-[0.7rem] text-blue-900/50">{title}</span> : null }
    </div>
  )
}

export default TopButton
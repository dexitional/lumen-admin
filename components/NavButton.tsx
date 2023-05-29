'use client';
import Link from 'next/link'
import React from 'react'
import { useRouter,usePathname, useSearchParams } from 'next/navigation';

type Props = {
    title: string;
    link: string;
    active: boolean;
    onClick: any;
}

function NavButton({ title,active = false,link = '#', onClick }: Props) {
  // const router = useRouter();
  // const path = usePathname().split('/');
  // const pathname = path.length > 2 ? path[2]: path[1];
  // const searchParams = useSearchParams();
  
  // console.log(pathname)
  return (
    <Link key={link} href={link} className={`px-4 py-1.5 text-sm text-blue-200 font-medium tracking-wider ${ active ? `bg-blue-800 hover:text-gray-300`:`bg-green-400/20`} hover:bg-yellow-500 hover:text-blue-950 hover:font-bold rounded-lg`}>
      {title}
    </Link>             
  )
}

export default NavButton
'use client';
import SideBar from '@/components/SideBar'
import React, { ReactElement } from 'react'
import Header from '@/components/Header';
import { Menu, Transition } from '@headlessui/react'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Menu as='div' className="relative w-full h-screen flex bg-slate-100 overflow-hidden print:m-0 print:p-0 print:bg-white print:border-0">
        <SideBar />
        <div className="flex-1">
            <Header />
            <div className="px-6 py-4 h-full flex flex-col space-y-4 print:p-0">
                {children}
            </div>
        </div>
    </Menu>
  )
}

export default Layout
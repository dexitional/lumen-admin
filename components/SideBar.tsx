'use client';
import { Menu } from '@headlessui/react'
import { Transition } from '@headlessui/react'
import React,{Fragment} from 'react'
import NavButton from './NavButton'
import { useRouter,usePathname,useSearchParams } from 'next/navigation'
import { MdClose } from 'react-icons/md';


function SideBar() {
    
    const router = useRouter();
    const path = usePathname().split('/');
    const pathname = path.length > 2 ? path[2]: path[1];
    const searchParams = useSearchParams();
    const isActive = false;

    return (
        <>
        <Transition
          as={Fragment}
          enter="transition ease-in duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-out duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="z-20 h-screen absolute top-0 left-0 md:relative md:flex flex-col w-72 bg-blue-900 outline-none border-r border-blue-300/20 print:hidden">
            <div className="px-6 py-2.5 w-full h-14 flex items-center justify-between border-b border-blue-300/20">
                <span className="text-blue-100 text-2xl md:text-3xl font-prism">LUMEN HQ</span>
                
                <Menu.Button onClick={() => null } className="px-2 py-2 rounded  bg-green-300/10 border border-green-300/20">
                    <MdClose className="h-4 w-4 text-blue-200"/>
                </Menu.Button>
            </div>
            <div className="p-8">
                {/* Menus */}
                <div className="h-[40rem] flex flex-col space-y-2 overflow-scroll scrollbar-hide">
                    <Menu.Item>{({ close }) => (<NavButton onClick={close} active={pathname==='lectures'} title="lectures" link="/lectures"/> )}</Menu.Item>
                </div>
            </div>
          </Menu.Items>
        </Transition>

        <div className="z-20 absolute top-0 left-0 md:relative hidden md:flex flex-col w-72 bg-blue-900 border-r border-blue-300/20 print:hidden">
            <div className="px-8 py-2.5 w-full h-14 flex items-center border-b border-blue-300/20">
                <span className="text-blue-100 text-2xl md:text-3xl font-prism">LUMEN HQ</span>
            </div>
            <div className="p-8">
                {/* Menus */}
                <div className="h-[40rem] flex flex-col space-y-2 overflow-scroll scrollbar-hide">
                    <NavButton onClick active={pathname==='lectures'} title="Lectures" link="/lectures"/>
                </div>
            </div>
        </div>
        </>
    )
}

export default SideBar
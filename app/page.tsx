'use client'
import { useState } from "react"
import { TbShieldLock } from 'react-icons/tb';
import LoginForm from "@/components/LoginForm";
import Link from "next/link";


export default function Home() {

  

  return (
    <main className="p-4 md:p-24 w-full h-full min-h-screen flex-1 flex items-center justify-center backdrop-grayscale bg-opacity-70 bg-gray-200/70">
        <div className="flex flex-col space-y-4">
            <div className="relative w-full max-w-lg flex flex-col items-center justify-center space-y-8">
              {/* Background Effect */}
              {/* <div className="z-0 absolute top-0 left-0 w-96 h-96 mix-blend-multiply blur-xl opacity-30 animate-pulse transition-all duration-300 bg-green-800 rounded-full "></div>
              <div className="z-0 absolute top-36 left-36 w-96 h-96 mix-blend-multiply blur-xl opacity-30 animate-bounce transition-all duration-700 bg-red-800 rounded-full "></div>
              <div className="z-0 absolute top-36 -left-36 w-96 h-96 mix-blend-multiply blur-xl opacity-30 animate-bounce transition-all duration-150 bg-black rounded-full "></div> */}
              
              <div className="z-0 absolute top-2 left-8 w-80 h-80 animate-blob mix-blend-multiply filter blur-xl opacity-30 bg-yellow-100 rounded-full "></div>
              <div className="z-0 absolute right-48 w-80 h-80 animate-blob animation-delay-2000 mix-blend-multiply filter blur-xl opacity-30 bg-red-300 rounded-full "></div>
              <div className="z-0 absolute left-48 w-80 h-80 animate-blob animation-delay-4000 mix-blend-multiply filter blur-xl opacity-20 bg-blue-800 rounded-full "></div>

              <div className="opacity-100 z-10 pt-4 pb-10 px-8 w-full md:w-80 bg-white/90 filter backdrop-blur-xs shadow-lg transition-all  rounded-xl">
                  <div className="my-6 py-1 px-2 flex-1 flex items-center justify-center space-x-2 font-bold text-xl rounded-3xl bg-white/60 ">
                    <TbShieldLock className="h-8 w-8 text-blue-900"/>
                    <span className="text-blue-900 font-extrabold font-bugee text-2xl md:text-4xl tracking-wide">LUMEN</span>
                  </div>
                  {/* <Image className="mb-6 h-24 md:h-36 object-contain transition hover:scale-105" src={Logo} alt="Logo" /> */}
                  <LoginForm  />
              </div>
              <p className="text-center text-[10px] text-slate-500 font-poppins font-medium">Developed By <Link href="">K-Soft GH</Link> & Powered By <Link href="" className="text-red-900">UCC-SRC</Link></p>
            </div>
        </div>
    </main>
  )
}

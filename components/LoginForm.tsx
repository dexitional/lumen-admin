"use client"
import React, { useEffect, useState } from 'react'
import { BiLoaderCircle,BiCheck } from 'react-icons/bi'
import { FcGoogle } from 'react-icons/fc'
import { useSearchParams } from "next/navigation";
import { useSession, signIn } from 'next-auth/react';


function LoginForm() {
    const [ form,setForm ] = useState({ username:'', password: '' })
    const [ isLoading,setIsLoading ] = useState(0)
    const [ verified,setVerified ] = useState(false)
    const { data:session } = useSession()
    const searchParams = useSearchParams()
    const error = searchParams.get('error')


    const authenticateCredential = async (e: any) => {
        e.preventDefault()
        try {
          //const resp = await signIn('credentials', { callbackUrl: `/user`, serial: form?.username, pin: form.password })
          const resp = await signIn('credentials', { redirect: false, callbackUrl: `/user`, serial: form?.username, pin: form?.password })
          console.log(resp)
        } catch(e){
          console.log(e)
        }
        
    }

    const authenticateGoogle = async (e: any) => {
        e.preventDefault()
        try {
          const resp = await signIn('google')
          console.log(resp);
          //const resp = await signIn('google', { redirect: false, serial: form?.serial, pin: form.pin })
        } catch(e){
          console.log(e)
        }
    }
  
    const onChange = (e: any) => {
       setForm({ ...form, [e.target.name]:e.target.value })
    }

   
  return (
    <form onSubmit={authenticateCredential} className="flex flex-col space-y-2">
        <input name="username" onChange={onChange} className="w-full px-2 py-1.5 md:px-6 md:py-2.5 font-poppin text-sm placeholder:text-gray-600 border-2 outline-none focus:bg-green-50/50 focus:border-blue-800 focus:shadow-sm focus:shadow-blue-200/70 focus:ring-0 rounded-lg" type="text" placeholder="Username" autoComplete="off"/>
        <input name="password" onChange={onChange} className="w-full px-2 py-1.5 md:px-6 md:py-2.5 font-poppin text-sm placeholder:text-gray-600 border-2 outline-none focus:bg-green-50/50 focus:border-blue-800 focus:shadow-sm focus:shadow-blue-200/70 focus:ring-0 rounded-lg" type="password" placeholder="Password" autoComplete="off"/>
        <button type="submit" className={`px-2 py-1.5 md:px-6 md:py-2.5 rounded-lg hover:bg-blue-900/90 ${isLoading ? isLoading == 2 ? ` bg-blue-600`:`bg-blue-900`:`bg-blue-900`}`}>
            { isLoading ?
              isLoading == 2 
              ? <div className="flex items-center justify-center space-x-4">
                    <BiCheck className="h-6 w-6 text-white" />
                    <span className="text-white font-medium">Authenticated</span>
                </div>
              : <div className="flex items-center justify-center space-x-4">
                    <BiLoaderCircle className="h-6 w-6 text-white animate-spin duration-300" />
                    <span className="text-white font-medium animate-pulse">Authentication ... </span>
                </div>
              : <span className="text-sm md:text-base font-medium text-white tracking-widest">Sign In</span>
            }
        </button>
        <button type="button" onClick={authenticateGoogle} className={`px-2 py-2 md:px-6 md:py-3 border border-slate-400/50 rounded-lg hover:bg-slate-400 bg-slate-300`}>
           <div className="flex items-center justify-center space-x-4">
              <FcGoogle className="h-6 w-6 text-white" />
              <span className="font-medium hover:text-white">Sign In with Google</span>
           </div>
        </button>
        {/* <span className="text-center text-xs md:text-sm font-poppins">Forgot Password?</span> */}
    </form>
  )
}

export default LoginForm
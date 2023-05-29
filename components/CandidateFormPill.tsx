import Image from 'next/image'
import React from 'react';
import Logo from '../public/logo.png'
import NoPhoto from '../public/none.png'

type Props = {
    number: string;
    name: string;
    logo: string;
    register: any;
    image: string;
    candidate: string;
}

function CandidateFormPill({ candidate,image,logo,number,name,register}: Props) {
  return (
    <div className="px-4 py-2 w-full group focus-within:bg-green-300/10 rounded border border-green-300/20 text-sm flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0 md:space-x-2 ">
        <div className="flex">
            <div className="p-2 rounded bg-white">
                <Image className="w-12 h-12 object-contain transition group-hover:scale-125" src={Logo} alt="Party" />
            </div>
            <div className="p-1 ml-4 rounded bg-white">
                <Image className="w-14 h-14 object-contain" src={NoPhoto} alt="Candidate" />
            </div>
        </div>
        <div className="flex-1 flex flex-col space-y-2">
            <span className="text-xs md:text-sm text-center md:text-left md:indent-2 text-green-100 font-medium tracking-wider">{candidate}</span>
            <input className="m-2 px-6 py-0.5 w-full md:w-48 tracking-widest text-center md:text-left text-red-50 text-lg font-mono font-bold rounded bg-green-300/20 border border-green-300/20 focus:outline-none focus:bg-red-300/20 focus:text-green-50 placeholder:text-green-300/50 placeholder:font-medium placeholder:tracking-tight" name={name} type="text" {...register} placeholder="Enter Votes" />
        </div>
        <span className="align-middle text-2xl font-medium italic">#{number}</span>
    </div>
  )
}

export default CandidateFormPill
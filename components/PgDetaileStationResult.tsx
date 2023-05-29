import React from 'react'
import { MdPrint } from 'react-icons/md'
import GoBack from '@/components/GoBack';
import PageTitle from '@/components/PageTitle';
import ActionButton from '@/components/ActionButton';
import MainTitle from './MainTitle';
import DetailConstituency from './DetailConstituency';
import ModalConstituencyHeader from './ModalConstituencyHeader';
import DetailStation from './DetailStation';
import ModalStationHeader from './ModalStationHeader';

function PgDetaileStationResult({ setIsOpen }: any) {
  return (
     <>
        <ModalStationHeader setIsOpen={setIsOpen} />
        <div className="pb-4 overflow-y-scroll scrollbar-hide print:p-0">
            <div className="w-full text-[0.86rem] text-green-200/80 print:border-0 print:bg-white">
                <div className="px-4 print:p-0">
                    <div className="px-6 py-2 rounded bg-white text-black print:p-0">
                       <DetailStation title="Parliamentary"  data={null} />
                       <DetailStation title="Presidential" data={null} />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default PgDetaileStationResult
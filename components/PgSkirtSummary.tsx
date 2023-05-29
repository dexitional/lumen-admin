import React from 'react'
import { MdPrint } from 'react-icons/md'
import GoBack from '@/components/GoBack';
import PageTitle from '@/components/PageTitle';
import ActionButton from '@/components/ActionButton';
import MainTitle from './MainTitle';
import DetailConstituency from './DetailConstituency';
import DetailRegion from './DetailRegion';
import ModalMainHeader from './ModalMainHeader';
import DetailSkirt from './DetailSkirt';

function PgSkirtSummary({ setIsOpen }: any) {
  return (
    <>
    <ModalMainHeader setIsOpen={setIsOpen} />
    <div className="pb-12 overflow-y-scroll scrollbar-hide print:p-0">
        <div className="w-full border-separate border-spacing-0 border border-green-300/20 rounded text-[0.86rem] text-green-200/80 print:border-0 print:bg-white">
            <div className="px-4 py-3 print:p-0">
                <div className="p-6 rounded bg-white text-black print:p-0">
                    <DetailSkirt title="Parliamentary"  data={null} />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default PgSkirtSummary
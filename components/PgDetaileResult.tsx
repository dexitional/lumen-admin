import React from 'react'
import { MdPrint } from 'react-icons/md'
import GoBack from '@/components/GoBack';
import PageTitle from '@/components/PageTitle';
import ActionButton from '@/components/ActionButton';
import MainTitle from './MainTitle';
import DetailConstituency from './DetailConstituency';
import ModalConstituencyHeader from './ModalConstituencyHeader';
import ModalMainHeader from './ModalMainHeader';

function PgDetaileResult({ setIsOpen, type = null, hasHeader = false, cid = null }: any) {
  const constituency_id = 2;

  return (
     <>
        { hasHeader 
        ? <ModalConstituencyHeader setIsOpen={setIsOpen} /> 
        : <ModalMainHeader setIsOpen={setIsOpen} /> 
        }
        <div className="pb-4 overflow-y-scroll scrollbar-hide print:p-0">
            <div className="w-full text-[0.86rem] text-green-200/80 print:border-0 print:bg-white">
                <div className="px-4 print:p-0">
                    <div className="px-6 py-2 rounded bg-white text-black print:p-0">
                      { !type ? (
                        <>
                          <DetailConstituency title="Parliamentary"  data={null} />
                          <DetailConstituency title="Presidential" data={null} />
                        </>
                        ):null
                      }

                      { type == 'parl' ? (<DetailConstituency title="Parliamentary"  data={null} />): null}
                      { type == 'pres' ? (<DetailConstituency title="Presidential"  data={null} />): null}
                       
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default PgDetaileResult
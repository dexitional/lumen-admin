import React from 'react'
import Badge from '@/components/Badge';
import BadgeIcon from '@/components/BadgeIcon';
import { MdOutlineArticle,MdPrint } from 'react-icons/md'
import { FiEdit3,FiTrash } from 'react-icons/fi'
import GoBack from '@/components/GoBack';
import SearchBox from '@/components/SearchBox';
import PageTitle from '@/components/PageTitle';
import ActionButton from '@/components/ActionButton';
import Select from './Select';
import PollInput from './PollInput';
import Image from 'next/image';
import CandidateFormPill from './CandidateFormPill';
import ParliamentaryChip from './ParliamentaryChip';
import PresidentialChip from './PresidentialChip';
import MainTitle from './MainTitle';


function PgPollingAgent() {
  return (
     <>
        <div className="w-full flex flex-col md:flex-row items-start md:items-center md:justify-between md:space-x-4 md:space-y-0 space-y-2">
            <div className="flex flex-row items-center space-x-4">
                <div className="w-full flex items-center justify-between md:justify-start space-x-4">
                    <GoBack />
                </div>
                <PageTitle title="POLLING AGENT" />
            </div>
            <div className="hidden md:flex">
                <ActionButton title="Print Pinksheet" Icon={MdPrint} onClick={null} />
            </div>
        </div>
        <div className="pb-12 overflow-y-scroll scrollbar-hide">
            <div className="w-full border-separate border-spacing-0 border border-green-300/20 rounded text-[0.86rem] text-green-200/80">
                <div className="bg-green-400/20 text-green-200 text-[0.86rem] font-inter font-medium tracking-wider">
                    <MainTitle />
                </div>
                <div>
                  <form>
                    <div className="p-2 md:px-6 md:py-4 flex flex-col md:flex-row md:items-start space-y-3 md:space-y-0 md:space-x-6">
                        <ParliamentaryChip />
                        <PresidentialChip />
                    </div>

                    <div className="px-2 pb-2 md:px-6 md:pb-4 flex flex-col md:flex-row md:items-start space-y-2 md:space-y-0 md:space-x-3">
                        <button className="px-3 py-2 w-full rounded border-2 border-green-200 bg-slate-50 text-green-700 font-semibold text-sm">SAVE & EXIT</button>
                        <button className="px-3 py-2 w-full rounded border-2 border-gray-500 bg-slate-800/80 text-green-100 font-semibold text-sm">PRINT RESULTS</button>
                        <button className="px-3 py-2 w-full rounded border-2 border-green-600 bg-green-700 text-green-100 font-semibold text-sm">SUBMIT & PUBLISH</button>
                    </div>
                  </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default PgPollingAgent
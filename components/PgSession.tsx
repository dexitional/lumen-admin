import React from 'react'
import Badge from '@/components/Badge';
import BadgeIcon from '@/components/BadgeIcon';
import { MdOutlineArticle,MdAdd } from 'react-icons/md'
import { FiEdit3,FiTrash } from 'react-icons/fi'
import GoBack from '@/components/GoBack';
import SearchBox from '@/components/SearchBox';
import PageTitle from '@/components/PageTitle';
import ActionButton from '@/components/ActionButton';


function PgSession() {
  return (
     <>
        <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between md:space-x-4 md:space-y-0 space-y-2">
            <div className="flex flex-col md:flex-row md:items-center md:space-x-4 md:space-y-0 space-y-2">
                <div className="w-full flex items-center justify-between md:justify-start space-x-4">
                    <GoBack />
                    <SearchBox keyword="" setKeyword={null} />
                    <div className="md:hidden">
                        <ActionButton title="" Icon={MdAdd} onClick={null} />
                    </div>
                </div>
                <PageTitle title="ELECTION SESSIONS" />
            </div>
            <div className="hidden md:flex">
                <ActionButton title="New Record" Icon={MdAdd} onClick={null} />
            </div>
        </div>
        <div className="pb-12 overflow-y-scroll scrollbar-hide">
            <table className="w-full border-separate border-spacing-0 border border-green-300/20 rounded text-[0.86rem] text-green-200/80">
                <tr className="hidden md:grid md:grid-cols-7 bg-green-400/20 text-green-200 text-[0.86rem] font-inter font-medium tracking-wider">
                    <td className="px-6 py-3">Year</td>
                    <td className="px-6 py-3 md:col-span-2">Name</td>
                    <td className="px-6 py-3 md:col-span-2">Period</td>
                    <td className="px-6 py-3">Status</td>
                    <td className="px-6 py-3">&nbsp;</td>
                </tr>
                <tr className="grid grid-cols-1 md:grid-cols-7 text-left ">
                    <td className="px-6 py-3 grid md:grid-cols-1 gap-y-2 md:border-b border-green-300/20">
                        <span className="md:hidden py-0.5 px-3 rounded bg-green-300/10">Year</span>
                        <span className="ml-3 md:m-0">2024</span>
                    </td>
                    <td className="px-6 py-3 grid  md:col-span-2 md:grid-cols-1 gap-y-2 md:border-b border-green-300/20">
                        <span className="md:hidden py-0.5 px-3 rounded bg-green-300/10">Name</span>
                        <span className="ml-3 md:m-0">2024 PRESIDENTIAL/PARLIAMENTARY ELECTIONS</span>
                    </td>
                    <td className="px-6 py-3 grid md:col-span-2 md:grid-cols-1 gap-y-2 md:border-b border-green-300/20">
                        <span className="md:hidden py-0.5 px-3 rounded bg-green-300/10">Period</span>
                        <span className="ml-3 md:m-0">7-8TH DECEMBER, 2024</span>
                    </td>
                    <td className="px-6 py-3 grid md:grid-cols-1 gap-y-2 md:border-b border-green-300/20">
                        <span className="md:hidden py-0.5 px-3 rounded bg-green-300/10">Status</span>
                        <div className="ml-3 md:m-0">
                            <Badge title="DEFAULT" />
                        </div>
                    </td>
                   <td className="px-6 py-3 border-b border-green-300/20 flex md:justify-end">
                        <div className="md:px-2 w-fit flex items-center space-x-4">
                            {/* <BadgeIcon title="" Icon={MdOutlineArticle}/> */}
                            <FiEdit3 className="w-3.5 h-3.5" />
                            <FiTrash className="w-3.5 h-3.5" />
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    </>
  )
}

export default PgSession
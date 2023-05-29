import React from 'react'
import Badge from '@/components/Badge';
import BadgeIcon from '@/components/BadgeIcon';
import { MdOutlineArticle,MdAdd } from 'react-icons/md'
import { FiEdit3,FiTrash } from 'react-icons/fi'
import GoBack from '@/components/GoBack';
import SearchBox from '@/components/SearchBox';
import PageTitle from '@/components/PageTitle';
import ActionButton from '@/components/ActionButton';


function PgUser() {
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
                <PageTitle title="USERS" />
            </div>
            <div className="hidden md:flex">
                <ActionButton title="New Record" Icon={MdAdd} onClick={null} />
            </div>
        </div>
        <div className="pb-12 overflow-y-scroll scrollbar-hide">
            <table className="w-full border-separate border-spacing-0 border border-green-300/20 rounded text-[0.86rem] text-green-200/80">
                <tr className="hidden md:grid md:grid-cols-7 bg-green-400/20 text-green-200 text-[0.86rem] font-inter font-medium tracking-wider">
                    <td className="px-6 py-3">Username</td>
                    <td className="px-6 py-3">Name</td>
                    <td className="px-6 py-3">Contact</td>
                    <td className="px-6 py-3">Role</td>
                    <td className="px-6 py-3">Constituency</td>
                    <td className="px-6 py-3">Polling Center</td>
                    <td className="px-6 py-3">&nbsp;</td>
                </tr>
                <tr className="grid grid-cols-1 md:grid-cols-7 text-left ">
                    <td className="px-6 py-3 grid md:grid-cols-1 gap-y-2 md:border-b border-green-300/20">
                        <span className="md:hidden py-0.5 px-3 rounded bg-green-300/10">Username</span>
                        <span className="ml-3 md:m-0">A02322</span>
                    </td>
                    <td className="px-6 py-3 grid md:grid-cols-1 gap-y-2 md:border-b border-green-300/20">
                        <span className="md:hidden py-0.5 px-3 rounded bg-green-300/10">Name</span>
                        <span className="ml-3 md:m-0">AOWIN</span>
                    </td>
                    <td className="px-6 py-3 grid md:grid-cols-1 gap-y-1 md:border-b border-green-300/20">
                        <span className="md:hidden py-0.5 px-3 rounded bg-green-300/10">Contact</span>
                        <span className="ml-3 md:m-0">0277675089</span>
                        <span className="ml-3 md:m-0 text-sm text-red-50 font-medium italic">056556665</span>
                        <span className="ml-3 md:m-0 text-xs text-red-50 font-medium">Kwaku.manu-amponsah@gmail.com</span>
                    </td>
                    
                    <td className="px-6 py-3 grid md:grid-cols-1 gap-y-2 md:border-b border-green-300/20">
                        <span className="md:hidden py-0.5 px-3 rounded bg-green-300/10">Role</span>
                        <span className="ml-3 md:m-0">POLLING AGENT</span>
                    </td>
                    <td className="px-6 py-3 grid md:grid-cols-1 gap-y-2 md:border-b border-green-300/20">
                        <span className="md:hidden py-0.5 px-3 rounded bg-green-300/10">Constituency</span>
                        <span className="ml-3 md:m-0">AOWIN</span>
                    </td>
                    <td className="px-6 py-3 grid md:grid-cols-1 gap-y-1 md:border-b border-green-300/20">
                        <span className="md:hidden py-0.5 px-3 rounded bg-green-300/10">Polling Center</span>
                        <span className="ml-3 md:m-0">WESTERN NORTH AKOTOKYIR DANSI</span>
                        <span className="ml-3 md:m-0 text-xs text-red-50 font-medium italic">-- Parliamentary</span>
                        <span className="ml-3 md:m-0 text-xs text-red-50 font-medium italic">-- Presidential</span>
                    </td>
                    <td className="px-6 py-3 border-b border-green-300/20 flex md:justify-end">
                        <div className="md:px-2 w-fit flex items-center space-x-4">
                            <BadgeIcon title="Profile" Icon={MdOutlineArticle}/>
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

export default PgUser
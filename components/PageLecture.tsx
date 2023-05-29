import React from 'react'
import { MdOutlineArticle } from 'react-icons/md';
import BadgeIcon from './BadgeIcon';
import { FiEdit3, FiTrash } from 'react-icons/fi';

type Props = {
    keyword: string;
    page: number;
}

function PageLecture({ keyword, page }: Props) {
  
  const data:any = [];
  return (
    <div className="pb-12 overflow-y-scroll scrollbar-hide">
        <table className="w-full border-separate border-spacing-0 border border-blue-900/30 rounded text-[0.86rem] text-blue-900/60">
            <tr className="hidden md:grid md:grid-cols-5 bg-blue-900/5 text-blue-900 text-[0.86rem] font-inter font-bold tracking-wider">
                <td className="px-6 py-3">Course</td>
                <td className="px-6 py-3">Period</td>
                <td className="px-6 py-3">Venue</td>
                <td className="px-6 py-3">Group</td>
                <td className="px-6 py-3">&nbsp;</td>
            </tr>
            { data?.map((row:any,i:React.Key) => (
                <tr key={row.code} className="grid grid-cols-1 md:grid-cols-5 text-left ">
                    <td className="px-6 py-3 grid md:grid-cols-1 gap-y-2 md:border-b border-blue-900/40">
                        <span className="md:hidden py-0.5 px-3 rounded bg-green-900/5 font-bold">Course</span>
                        <span className="ml-3 md:m-0">{row.code}</span>
                    </td>
                    <td className="px-6 py-3 grid md:grid-cols-1 gap-y-2 md:border-b border-blue-900/40">
                        <span className="md:hidden py-0.5 px-3 rounded bg-green-900/5 font-bold">Period</span>
                        <span className="ml-3 md:m-0">{row.title?.toUpperCase()}</span>
                    </td>
                    <td className="px-6 py-3 grid md:grid-cols-1 gap-y-2 md:border-b border-blue-900/40">
                        <span className="md:hidden py-0.5 px-3 rounded bg-green-900/5 font-bold">Venue</span>
                        <span className="ml-3 md:m-0">{row.district?.title?.toUpperCase()}</span>
                        {/* <div className="ml-3 md:m-0">
                            <Badge title="275" />
                        </div> */}
                    </td>
                    <td className="px-6 py-3 grid md:grid-cols-1 gap-y-2 md:border-b border-blue-900/40">
                        <span className="md:hidden py-0.5 px-3 rounded bg-blue-900/5 font-bold">Group</span>
                        <span className="ml-3 md:m-0">{row.region?.title?.toUpperCase()}</span>
                    </td>
                    <td className="px-6 py-3 border-b border-blue-900/20 flex md:justify-end">
                        <div className="md:px-2 w-fit flex items-center space-x-4">
                            {/* <BadgeIcon title="" Icon={MdOutlineArticle}/> */}
                            <FiEdit3 className="w-3.5 h-3.5" />
                            {/* <FiTrash className="w-3.5 h-3.5" /> */}
                        </div>
                    </td>
                </tr>
            ))}

        </table>
    </div>
  )
}

export default PageLecture
import React from 'react'
import Badge from '@/components/Badge';
import BadgeIcon from '@/components/BadgeIcon';
import { MdOutlineArticle,MdSave } from 'react-icons/md'
import { FiEdit3,FiTrash } from 'react-icons/fi'
import GoBack from '@/components/GoBack';
import SearchBox from '@/components/SearchBox';
import PageTitle from '@/components/PageTitle';
import ActionButton from '@/components/ActionButton';
import Input from './Input';
import Textarea from './Textarea';
import Select from './Select';


function PgConstituencyForm() {
  return (
     <>
        <div className="w-full flex flex-col md:flex-row items-start md:items-center md:justify-between md:space-x-4 md:space-y-0 space-y-2">
            <div className="flex flex-col md:flex-row md:items-center md:space-x-4 md:space-y-0 space-y-2">
                <div className="w-full flex items-center justify-between md:justify-start space-x-4">
                    <GoBack />
                    <div className="md:hidden">
                        <ActionButton title="" Icon={MdSave} onClick={null} />
                    </div>
                </div>
                <PageTitle title="CONSTITUENCIES" />
            </div>
            <div className="hidden md:flex">
                <ActionButton title="Save" Icon={MdSave} onClick={null} />
            </div>
        </div>
        <div className="pb-12 overflow-y-scroll scrollbar-hide">
            <div className="w-full border-separate border-spacing-0 border border-green-300/20 rounded text-[0.86rem] text-green-200/80">
                <div className="md:grid md:grid-cols-5 bg-green-400/20 text-green-200 text-[0.86rem] font-inter font-medium tracking-wider">
                    <div className="px-6 py-3 font-semibold">NEW CONSTITUENCY</div>
                </div>
                <div>
                  <form>
                    <div className="p-2 md:px-6 md:py-4 flex flex-col md:flex-row md:items-start space-y-3 md:space-y-0 md:space-x-6">
                        <div className="p-2 md:p-4 flex-1 flex flex-col space-y-2 rounded border border-green-300/20 ">
                            <Input label="Constituency Box" name="name" type="text" register={null} />
                            <Input label="Constituency Box" name="name" type="text" register={null} />
                            <Input label="Constituency Box" name="name" type="text" register={null} />
                            <Textarea label="Constituency minger Box" name="name" register={null} />
                        </div>
                        <div className="p-2 md:p-4  flex-1 flex flex-col space-y-2 rounded border border-green-300/20 ">
                            <Select label="Constituency minger Box" name="name" register={null} data={[{ value:'1',label:'No' },{ value:'2',label:'Yes'}]} />
                            <Select label="Constituency minger Box" name="name" register={null} data={[{ value:'1',label:'No' },{ value:'2',label:'Yes'}]} />
                            <Select label="Constituency minger Box" name="name" register={null} data={[{ value:'1',label:'No' },{ value:'2',label:'Yes'}]} />
                            <Select label="Constituency minger Box" name="name" register={null} data={[{ value:'1',label:'No' },{ value:'2',label:'Yes'}]} />
                        </div>
                    </div>
                    <div className="px-2 pb-2 md:px-6 md:pb-4 flex flex-col md:flex-row md:items-start space-y-2 md:space-y-0 md:space-x-3">
                        <button className="px-3 py-1 w-full rounded border-2 border-green-600 bg-green-700 text-green-200 font-semibold text-base">Save</button>
                        <button className="px-3 py-1 w-full rounded border-2 border-red-600 bg-red-900 text-red-200 font-semibold text-base">Cancel</button>
                    </div>
                  </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default PgConstituencyForm
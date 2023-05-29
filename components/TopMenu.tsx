import React from 'react'
import { BiHelpCircle } from 'react-icons/bi'
import { MdNotificationsNone } from 'react-icons/md';
import { FiMessageCircle } from 'react-icons/fi';
import TopButton from './TopButton';


function TopMenu() {
  return (
    <div className="hidden md:flex items-center space-x-2">
        <TopButton title="Help" Icon={BiHelpCircle} />
        <TopButton title="Feedback on this Page?" Icon={FiMessageCircle} />
        <TopButton title="" Icon={MdNotificationsNone} />
    </div>
  )
}

export default TopMenu
import React from 'react'
import Breadcrump from './Breadcrump'
import HamburgerMenu from './HamburgerMenu'
import Logout from './Logout'
import TopMenu from './TopMenu'
import UserInfo from './UserInfo'

function Header() {
  return (
    <div className="px-4 h-14 flex items-center justify-between border-b border-blue-900/40 print:hidden">
      <HamburgerMenu />
      <Breadcrump />
      <UserInfo />
      <div className="flex md:space-x-10">
        <TopMenu />
        <Logout />
      </div>
      
    </div>
  )
}

export default Header
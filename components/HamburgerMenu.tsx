import React from 'react'
import TopButton from './TopButton'
import { FiMenu } from 'react-icons/fi'
import { Menu } from '@headlessui/react'

function HamburgerMenu() {
  return (
    <Menu.Button as='div' className="flex md:hidden">
      <TopButton title="" Icon={FiMenu} />
    </Menu.Button>
   
  )
}

export default HamburgerMenu
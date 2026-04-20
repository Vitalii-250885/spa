'use client'

import Image from 'next/image'
import Link from 'next/link'
import { SettingsIcon } from './icons/SettingsIcon'
import { MenuIcon } from './icons/MenuIcon'
import { useState } from 'react'
import { CloseIcon } from './icons/CloseIcon'

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className={`sidebar ${isOpen ? 'sidebar--open' : 'sidebar--collapsed'}`}>
      <button
        type='button'
        onClick={() => setIsOpen(!isOpen)}
        className='sidebar__menu--button'>
        {isOpen ? (
          <CloseIcon className='sidebar__menu-icon' />
        ) : (
          <MenuIcon className='sidebar__menu-icon' />
        )}
      </button>

      <div className='sidebar__user-icon--wrapper'>
        <Image
          src={'/user.png'}
          alt='user'
          width={100}
          height={100}
          className='sidebar__user-icon'
        />
        <div className='sidebar__settings-icon--circle'>
          <SettingsIcon className='sidebar__settings-icon' />
        </div>
      </div>
      <nav className='nav nav-underline flex-column sidebar__nav'>
        <Link className='nav-link active sidebar__nav-link' href='#'>
          Orders
        </Link>
        <Link className='nav-link sidebar__nav-link' href='#'>
          Products
        </Link>
      </nav>
    </div>
  )
}

"use client"

import React from 'react'
import UserDropdown from '../user-dropdown/page';

export default function Navbar() {
  return (
    <div 
    className='bg-[#23303F] shadow-md h-16 flex items-center justify-end'
    >
      <UserDropdown />
    </div>
  )
}
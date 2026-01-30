import React from 'react'
import Logo from './headercomponent/logo'
import Nav from './headercomponent/nav'
import Log from './headercomponent/Log'

export default function Header() {
  return (
    <>
<div className='w-full flex bg-[#ffffff4d] text-white justify-between px-35 py-6  items-center absolute  top-0 z-20'>
    <div className='  flex justify-between gap-20 w-[35%]'>
          <Logo />
          <Nav />
</div>
          <Log />
</div>
    </>
  )
}

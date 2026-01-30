import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Log() {
  return (
    <>
<div className='flex gap-4'>
        <button className='bg-[#D9176C] px-4 py-2  rounded-[10px]  '><NavLink to="login">log in</NavLink></button>
        <button className='bg-white px-4 py-2 text-[#D9176C] rounded-[10px]'><NavLink to="Regester">sing up</NavLink></button>
</div>
    </>
  )
}

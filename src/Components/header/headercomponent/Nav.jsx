import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <>
      <ul className='flex justify-around gap-9 text-[18px]'>
        <li><NavLink className={({ isActive }) => ` ${isActive ? "text-[#EAA451]" : ""}`}  to="/">Home</NavLink></li>
        <li><NavLink className={({ isActive }) => ` ${isActive ? "text-[#EAA451]" : ""}`} to="Books">Books</NavLink></li>
        <li><NavLink className={({ isActive }) => ` ${isActive ? "text-[#EAA451]" : ""}`} to="About">About us</NavLink></li>
      </ul>
    </>
  )
}

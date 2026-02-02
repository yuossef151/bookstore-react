import React from 'react'

export default function Img() {
  return (
    <>
              <div className=" w-full h-200 inset-0">
          <img
            className=" object-cover w-full h-full rotate-180   top-0 "
            src="./public/imglogin.png"
            alt=""
          />
          {/* bg-[#D9176C] */}
          <div className="absolute w-full h-200 inset-0 bg-[#00000099] flex items-center justify-center ">
            <div className='w-133.75  rounded-[50px] relative overflow-hidden'>
            <input className='bg-white py-4 px-6 w-111 rounded-l-2xl h-full  focus:border-none focus:outline-none ' type="search" placeholder='Search'/>
            <div className='w-26.25 bg-[linear-gradient(to_right,#fff_37%,#D9176C_37%)]  absolute right-0 top-0 h-full flex items-center justify-between pe-6'>
                          <svg xmlns="http://www.w3.org/2000/svg" className=' text-[#22222280]' width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}><path d="M16 6.429C16 4.535 14.21 3 12 3S8 4.535 8 6.429v5.142C8 13.465 9.79 15 12 15s4-1.535 4-3.429z"></path><path d="M5 11a7 7 0 1 0 14 0m-7 7v3m-4 0h8"></path></g></svg>
              <svg xmlns="http://www.w3.org/2000/svg" className='text-white' width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m18 11l-6-6"></path></svg>
            </div>
            

            </div>
          </div>
        </div>
    </>
  )
}

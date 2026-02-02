import React from "react";

export default function Aboutimg() {
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
          <div className="text-white flex flex-col items-center">
            <h2 className="text-5xl font-bold">About Bookshop</h2>
            <p className="w-150 text-2xl text-center pt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.</p>
          </div>
        </div>
      </div>
    </>
  );
}

// src/components/Header.js
import React from "react";

const Header = ({setForm}) => {
    console.log("setForm",setForm)
  return (
    <header className="fixed top-0 left-0 w-full h-20 bg-gray-800 text-white flex items-center justify-between pl-6 z-50">
      {/* Company Name */}
      {/* <div className="text-xl font-bold">Optimum</div> */}
      <h1 className="text-3xl font-orbitron font-bold bg-gradient-to-r from-[#3b82f6] via-[#93c5fd] to-[#ddd6fe]  inline-block text-transparent bg-clip-text">
      STORARC
      </h1>

      {/* Navigation */}
      <nav className=" hidden md:block font-ubuntu flex flex-center text-lg">
        <a href="#about" className="hover:text-gray-400">
          ABOUT
        </a>
      </nav>

      {/* Button */}
      {/* <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                Button #3b82f6
            </button> */}

      <div className="h-20 bg-gray-800 px-4 rounded-full flex flex-col justify-center relative overflow-hidden ">
        <div className="relative group cursor-pointer">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#3b82f6] via-[#93c5fd] to-[#ddd6fe] rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          {/* <button className="relative  py-2 px-4 bg-white ring-1 ring-gray-900/5 rounded-full leading-none flex items-top justify-start space-x-6">
            <div className="space-y-2">
              <p className="text-slate-800">Glowing Gradient Border</p>
            </div>
          </button> */}
          {/* <button className="flex relative items-top justify-start">
            <div className="h-10 rounded-full bg-gradient-to-r from-[#3b82f6] via-[#93c5fd] to-[#ddd6fe] p-1">
              <div className="flex h-full w-full rounded-full items-center justify-center bg-gray-800 back py-2 px-4">
                <div className="font-black text-white font-s">Create Wallet</div>
              </div>
            </div>
          </button> */}
            <button
            onClick={()=>setForm(true)}
              type="button"
              className="transtion group relative flex h-10 w-32 items-center justify-center rounded-full bg-gradient-to-r from-[#3b82f6] via-[#93c5fd] to-[#ddd6fe] p-[1.5px] text-white duration-300 hover:bg-gradient-to-l hover:shadow-2xl hover:shadow-purple-600/30"
            >
              <div className="font-ubuntu flex h-full w-full items-center justify-center rounded-full bg-gray-900 transition duration-300 ease-in-out group-hover:bg-gradient-to-br group-hover:from-gray-700 group-hover:to-gray-900 group-hover:transition group-hover:duration-300 group-hover:ease-in-out">
                WAITLIST
              </div>
            </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

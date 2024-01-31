import React from 'react'
import { HiUserCircle } from "react-icons/hi2";
import { IoHomeOutline } from "react-icons/io5";
import { PiSignOutBold } from "react-icons/pi";
import { PiShoppingCartSimpleLight } from "react-icons/pi";

export default function Navbar({ Handlermodal}) {
  return (
    <>
        <div>
        <div className="w-full bg-white p-2 shadow-md" onClick={ Handlermodal}>
            <div className="flex justify-between items-center">
               <div className="md:w-20 w-16 mx-4">
                   <img src="/img/logo.png" alt="" />
               </div>
                   <div className="flex items-center">
                        {/* <p className="font-semibold text-xl mr-6">{username}</p> */}
                         <div className="md:mr-8 mr-4 cursor-pointer hover:w-10 hover:rounded-full hover:shadow-md">
                         <HiUserCircle className="text-4xl mx-auto"/>
                         </div>
                         <div className="mr-3 flex relative cursor-pointer">
                         <PiShoppingCartSimpleLight className="text-3xl"/>
                         <p className="text-base text-slate-900"></p>
                         </div>
                   </div>
            </div>
        </div>
        </div>

    </>
  )
}

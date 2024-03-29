import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { useState, useEffect } from 'react';


function Footer() {
    const [isloading , setisloading] = useState(true)
    useEffect(()=> {
        const timer = setTimeout(()=>{
            setisloading(false);
        }, 2000);
        return (()=> clearTimeout(timer));
     })
  return (
    <>
        <div className={`bg-slate-200 mt-24 h-full${isloading ? 'animate-pulse' : ""}` }>
             <div className='flex justify-center'>
                 <div className='mt-12 mb-2'>
                      <p className='font-semibold'>© copyright by team 1 bys</p>
                      <div className='border-t border-slate-400'></div>
                      <div className='flex justify-center gap-x-4 mt-2'>
                      <a href="https://www.instagram.com/raffy_samaa/"><FaInstagram className='text-2xl' /></a>
                      <a href="https://www.fiverr.com/mohammadrafialb?public_mode=true"><SiFiverr  className='text-2xl'/></a>
                      <a href="https://github.com/raffyalbar30"><FaGithub  className='text-2xl'/></a>
                      </div>
                 </div>
             </div>
        </div>
    </>
  )
}

export default Footer
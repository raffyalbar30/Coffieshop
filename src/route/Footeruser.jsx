import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { FaGithub } from "react-icons/fa";


export default function Footeruser({Handlermodal}) {
  return (
     <>
          <div className={`bg-slate-200 mt-5`} onClick={Handlermodal}>
             <div className='flex justify-center'>
                 <div className='mt-2 mb-2'>
                      <p className='font-semibold'>© copyright by raffy albar</p>
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

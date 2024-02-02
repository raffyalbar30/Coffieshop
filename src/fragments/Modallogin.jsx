import React from 'react'
import Modal from '../components/Modals/Modalspopup'
import { IoMdClose } from "react-icons/io";
import Button from '../components/Buttons/Button';



function Modallogin({Handlerclosemodal}) {
    const Handlerloginuserpublic = () => {
         window.location.href = "http://localhost:5173/login";
    }
  return (
      <>
         <Modal>
             <div className='float-right'>
                 <div className='w-8 h-8 border border-slate-400 rounded-md'>
                   <IoMdClose className='mx-auto text-2xl pt-2' onClick={Handlerclosemodal}/>
                 </div>
             </div>
             <div className='mt-16'>
                 <img src="/img/logo.png" alt="" className='w-44 mx-auto' />
                 <p className='text-sm font-semibold text-center'>Selamat datang di Coffieshop cilamaya !!!</p>
                 <span className='text-sm font-semibold text-center'>Untuk bisa mengakses fitur silahkan login terlebih dahulu</span>
                 <div className='flex justify-center'>
                 <Button onClick={ Handlerloginuserpublic}>Login</Button>
                 </div>
             </div>
         </Modal>
      </>
  )
}

export default Modallogin
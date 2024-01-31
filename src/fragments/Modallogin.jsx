import React from 'react'
import Modal from '../components/Modals/Modalspopup'
import { IoMdClose } from "react-icons/io";



function Modallogin({Handlerclosemodal}) {
  return (
      <>
         <Modal>
             <div className='float-right'>
                 <div className='w-8 h-8 border border-slate-400 rounded-md'>
                   <IoMdClose className='mx-auto text-2xl pt-2' onClick={Handlerclosemodal}/>
                 </div>
             </div>
             <div>Login dolo</div>
         </Modal>
      </>
  )
}

export default Modallogin
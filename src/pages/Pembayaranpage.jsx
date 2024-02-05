import React from 'react';
import Input from '../components/Inputs/Inputs';
import Button from '../components/Buttons/Button';

const Pembayaranpage = () => {
  return (
     <>
     <div className='flex justify-center mt-8'>
   <div className='w-[700px] h-auto border border-slate-300 rounded-md '>

       <div className=' mt-8'>
          <img src="/img/logo.png" alt="" className='mx-auto' />
          <div className='flex justify-center'>
          <span>silahkan lengkapi pembelian !!</span>
          </div>
       </div>

       <div className='flex justify-center mt-4'>
          <div className='mr-2 pl-2 pt-2'>
            <span>Nama Pembeli</span>
            <Input  type="text" name="pembeli" classname={`px-36`}></Input> 
            <span>Alamat</span>
            <Input  type="text" name="nama" classname={`px-36`}></Input> 
            <span>No telepon aktive</span>
            <Input  type="text" name="nama" classname={`px-36`}></Input> 
          <div className='flex gap-x-2 mt-4'>
            <div className='w-[250px] border border-slate-400 ml-2 p-2 rounded-md'>
            <span className='text-xl font-semibold'>Playments</span>
             <select name="" id="" className="border border-slate-400 rounded-md float-right p-2">
                <option>Cash</option>
                <option >Qriss</option>
             </select>
           
            </div>
          </div>
          <div className='flex-wrapp ml-24 mt-24 mb-4'>
              <Button>Cek Out</Button>
              <Button>Batalkan</Button>
          </div>
          </div>
       </div>

   </div>
   </div>
     </>
  );
}

export default Pembayaranpage;

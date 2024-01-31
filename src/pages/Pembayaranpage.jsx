import React from 'react'
import Button from '../components/Buttons/Button'


function Pembayaran() {
  const totalprice = localStorage.getItem("price")
  const Handlerbayar = () => {
     window.open(`https://wa.me/6285694175143?text=Hello saya mau mengkonfirmasi pembayaran saya!! di coffieshop cilamaya`)
  }
  const Hendlerbatal = () => {
    localStorage.removeItem("price");
    window.location.href = "https://coffieshop-raffyalbar30.vercel.app/";
  }
  return (
    <div>
        <div className="flex justify-center mt-24">
          <div>
          <h1 className='text-center mb-2 text-xl font-semibold'>Pembayaran</h1>
            <img src="/img/qris.jpeg" alt="" className='w-80' />
            <p className='mt-2 text-xl'>Total Harga : Rp.{totalprice}</p>
          </div>
        </div>
        <div className='flex justify-center mt-6'>
           <div className='flex gap-x-2'>
          <Button onClick={Handlerbayar}>Bayar</Button>
          <Button onClick={Hendlerbatal}>Batal</Button>
           </div>
        </div>
    </div>
  )
}

export default Pembayaran
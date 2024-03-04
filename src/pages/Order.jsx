import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Button from '../components/Buttons/Button';




const Order = () => {
 const [Name, setName] = useState(null);
 const [Alamat, setAlamat] = useState(null);
 const [Telpon,setTelpon] = useState(null);
 const [pembayaran, setPembayaran] = useState(null);
 const [totalbarang, setTotalbarang] = useState(null);
 const { cart } = useSelector(all => all.cart);
 
 async function downloadStruk() {
    try {

        const response = await axios({
            method: "post",
            url: "http://localhost:8000/api/struk-pembelian",
            responseType: "blob",
            data: {},
            headers: {
                Authorization:"Bearer " + localStorage.getItem('token'),
            },
        });

        const currentDate = new Date();

        const year = currentDate.getFullYear();
        const month = currentDate.getMonth() + 1;
        const day = currentDate.getDate();
        const hours = currentDate.getHours();
        const minutes = currentDate.getMinutes();
        const seconds = currentDate.getSeconds();
        const currentDateTime =`_${year}-${month}-${day}_${hours}:${minutes}:${seconds}`;
        const namaFile = `Struk_Pembayaran-${currentDateTime}.pdf`;

        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", namaFile);
        document.body.appendChild(link);
        link.click();
        localStorage.removeItem("order");
    } catch (error) {
        console.log(error)
    }
}

 useEffect(() => {
     async function getData() {
         try {
            
              await axios.get(
                   'http://raffycoffieshopapi.my.id/api/order',
                 {
                     headers: {
                         Authorization:  "Bearer " + localStorage.getItem('token') ,
                     },
                 }
             ).then((ress) => {
                  console.log(ress.data)
                 setName(ress.data.nama_pembeli)
                 setAlamat(ress.data.alamat_pembeli)
                 setTelpon(ress.data.notelpon)
                 setPembayaran(ress.data.jenis_pembayaran)
                 setTotalbarang(ress.data.total_barang)
             }).catch(err => {
                 console.log(err)
             });
             setTimeout(() => {
                 alert("silahkan untuk print struk pembayaran lalu konfirmasi pembayaran lewat nomber admin di struk pembayaran!!, terimakasih telah order di toko kami")

             }, 1500);
         } catch (error) {
             
         }
     }
 
     getData()

 }, []);
 
 const Handlekembali = () => {
     localStorage.removeItem("price");
     localStorage.removeItem("order");
     window.location.href ="/userpage"
 }

    return (
        <>
     <div className='flex justify-center md:mt-32 mt-8'>
   <div className='md:w-[900px] w-[400px] h-auto border border-slate-300 rounded-md '>
     {/* logo */}
       <div className=' mt-8'>
          <img src="/img/logo.png" alt="" className='mx-auto' />
       </div>
      <div className='mt-12'>
          <div className='text-left ml-8 mr-4'>
            <div className='flex justify-between'>
             <p className='md:text-2xl text-sm font-semibold'>Nama Pembeli </p>
             <i className='md:text-xl text-sm font-semibold'>{Name}</i>
            </div>
             <div className='border-t border-slate-400 mt-2 '></div>
            <div className='flex justify-between'>
              <p className='md:text-2xl text-sm font-semibold'>Alamat Pembeli</p>
              <i className='md:text-xl text-sm font-semibold'>{Alamat}</i>
            </div>
              <div className='border-t border-slate-400 mt-2 '></div>
            <div className='flex justify-between'>
              <p className='md:text-2xl text-sm font-semibold'>Nomber telpon </p>
              <i className='md:text-xl text-sm font-semibold'>{Telpon}</i>
            </div>
          {cart?.map((item)=>(
            <>
             <div className='border-t border-slate-400 mt-2 '></div>
         <div className="flex flex-wrap items-center mt-2 ml-2">
           <div className="w-full flex justify-between md:pt-2">
              <div className="flexitems-center" key={item.id}>
              <div>
                 <p className='font-semibold md:text-2xl text-sm'>{item.name}</p>
                 <p className='md:text-2xl font-semibold text-sm'>Qty :{item.qty}</p>
                </div>
          </div>
          <div className="flex gap-x-4 items-center mr-4">
               <p className='text-sm'>Rp.{item.price}</p>
          </div>
      </div>
      </div>
      <div className='border-t border-slate-400 mt-2 '></div>
          </>
          ))}
      </div>
       <div className='ml-8'>
        <div className='flex justify-between'>
         <p className='md:text-2xl text-sm font-semibold'>Metode Pembayaran</p>
        <i className='md:text-xl text-sm mr-4 font-semibold'>{pembayaran}</i>
        </div>
         <div className='flex justify-between'>
         <p className='md:text-2xl text-sm font-semibold'>Total Harga</p>
         <i className='md:text-xl text-sm  text-green-700 font-semibold mr-4'>Rp.{totalbarang}</i>
         </div>
       </div>
       <div className=' flex gap-x-4  items-center  justify-center mt-6 mb-4'>
       <div>
           <Button className={`ml-4`} onClick={downloadStruk}>Print</Button>
       </div>
       <div>
           <Button className={`ml-4`} onClick={Handlekembali}>kembali</Button>
       </div>
       </div>
       
   </div>
   </div>
   </div>
        </>
    );
}

export default Order;

import Swal from 'sweetalert2'
import React from 'react';
import Input from '../components/Inputs/Inputs';
import Button from '../components/Buttons/Button';
import { useNavigate } from "react-router-dom"
import { useState } from 'react';
import axios from 'axios';




const Pembayaranpage = () => {
    const [pembeli,setPembeli] = useState("")
    const [alamat, setAlamat] = useState("")
    const [notelpon, setNotelpon] = useState("")
    const [value, setvalue] = useState(null);
    const Navigateorder = useNavigate();
    
   
    

    

    const Handlebatal = () => {
        localStorage.removeItem("price")
        window.location.href = "/userpage";
    }

            const Handlechange = (e) => {
                 setvalue(e.target.value);
            }
              

    async function createData() {
      
      try {
          const data =
          {
              nama_pembeli: pembeli,
              alamat_pembeli: alamat,
              notelpon: notelpon,
              jenis_pembayaran: value,
              barang_beli: JSON.parse(localStorage.getItem("order")),
              total_barang: localStorage.getItem("price"),
          };
  
      
          const response = await axios.post(
              'https://rapicoffieshop.000webhostapp.com/api/order',
              data,
              {
                  headers: {
                    Authorization: "Bearer " + localStorage.getItem('token'),

                  },
              }
          );
  
          if (response.data.success) {
              console.log(response.data.success.message)
              Navigateorder("/userpage/pembayaran/order");
          }
  
      } catch (error) {
        Swal.fire({
            toast: true,
            position: "top",
            iconColor: "white",
            color: "white",
            background: "#b22222",
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 5000,
            icon: "error",
            title:
              'Data eror silahkan lengkapi',
          });
      }
  }
  

  return (
     
     <>
     <div className='flex justify-center md:mt-32 mt-8'>
   <div className='md:w-[700px] w-[400px] h-auto md:mb-12 mb-24 border border-slate-300 rounded-md '>
       <div className=' mt-8'>
          <img src="/img/logo.png" alt="" className='mx-auto' />
          <div className='flex justify-center'>
          <span className='md:text-xl text-sm'>silahkan lengkapi pembelian !!</span>
          </div>
       </div>

       <div className='flex justify-center mt-4'>
          <div className='pt-2'>
            <div className='md:mr-8 '>
            <span className='ml-4 font-semibold md:text-xl text-sm'>Nama Pembeli</span>
            <Input className="ml-4 " type="text" value={pembeli} classname={` ml-4 w-[300px] md:w-[600px] `} onChange={(e) => setPembeli(e.target.value)}  ></Input> 
            <span className='ml-4 md:text-xl text-sm font-semibold'>Alamat</span>
            <Input  type="text" value={alamat} classname={` ml-4 w-[300px] md:w-[600px] `} onChange={(e) => setAlamat(e.target.value)} ></Input> 
            <span className='ml-4 md:text-xl text-sm font-semibold'>No telepon aktive</span>
            <Input  type="text" value={notelpon} classname={` ml-4 w-[300px] md:w-[600px] `} onChange={(e) => setNotelpon(e.target.value)} ></Input> 
         
          <div className='flex gap-x-2 mt-4'>
            <div className='md:w-[350px] w-[250px] border border-slate-400 ml-2 p-2 rounded-md'>
            <span className='font-semibold md:text-xl text-sm'>playments</span>
           <select color="blue" label="Select Version" onChange={Handlechange} className='border border-slate-200 md:w-[300px] p-2 rounded-lg'>
                 <option value={null} selected disabled>pilih metode</option>
                 <option value={`Cash`} className=' mt-2 w-[250px]'> Cash</option>  
                 <option value={`Cash on delevery(COD)`} className=' mt-2 w-[250px]'> Cash on delevery (COD) </option>

          </select>
            </div>
          </div>
          </div>
          <div className='flex gap-x-4 items-center mt-6 mb-4 ml-4'>
            <div>
              <Button onClick={createData}>Cek Out</Button>
            </div>
            <div>
              <Button onClick={Handlebatal}>Batalkan</Button>
            </div>
          </div>
          </div>
       </div>

   </div>
   </div>
     </>
  );
}

export default Pembayaranpage;


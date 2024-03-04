import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import {  useSelector } from 'react-redux';
import { deleteitem } from '../../redux/slices/Cartslice';
import { useDispatch } from 'react-redux'; 
import Button from '../Buttons/Button';
import { IoMdClose } from "react-icons/io";
import { useNavigate } from 'react-router-dom';


// Cart maping rendering from Menus data (menu) -> to storage Redux konsep
function Carts({Handlercloseopencart}) {
  const dispacth = useDispatch()
  const { cart } = useSelector(all => all.cart);
  const initialValue = 0;
  const total = cart.reduce((accumulator,current) => accumulator + current.price * current.qty, initialValue)
  const Navigatepembayaran = useNavigate();
  
  

  

// conditional if placeorder onclick pages redirect to pembayaran pages if no stay haree alert 
const Hendlercekout = () =>{
    localStorage.setItem("price", total);
    const totalstore = localStorage.getItem("price");
    if (totalstore !== '0') {
       Navigatepembayaran("/userpage/pembayaran"); 
     
    } else {
       alert("maaf harap tambahkan barang terlebih dahulu!!!");
    }
}

  return (
    <>
    <div className="ml-4 mt-2">
    <div className='flex justify-between'>
      <h1 className="font-bold text-lg">TRANSAKSI MENU</h1>
      <IoMdClose className='text-3xl cursor-pointer' onClick={Handlercloseopencart}/>
    </div>
    <div className='border-t border-slate-400'></div>
    
      {cart?.map((item)=>(
        <>
     <div className="flex flex-wrap items-center mt-2">
       <div className="w-full flex justify-between md:pt-2">
          <div className="flexitems-center" key={item.id}>
          <div className="mr-2">
             <img src={item.img} alt="" />
          </div>
          <div>
             <p className='font-semibold'>{item.name}</p>
             <p>Qty :{item.qty}</p>
            </div>
      </div>
      <div className="flex gap-x-4 items-center mr-4">
           <p>Rp.{item.price}</p>
           <FaRegTrashAlt className="mr-4 text-xl cursor-pointer" onClick={()=> dispacth(deleteitem(item))} />
      </div>
  </div>
  </div>
  <div className='border-t border-slate-400'></div>
      </>
      ))}
        <div className="flex items-center gap-x-2 justify-between">
          <p className="text-sm mt-2"><span className='font-semibold'>Total price</span> : Rp.{total}</p>
           <Button className='text-sm px-2 mt-2' onClick={Hendlercekout}>place order</Button>
      </div>
  </div>
  </>
    )
  }
 
  


export default Carts;
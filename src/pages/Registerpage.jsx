import React from 'react';
import Register from '../fragments/Register';
import Button from '../components/Buttons/Button';
import Input from '../components/Inputs/Inputs';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Registerpage = () => {
  const Navigatelogin = useNavigate();
  const [register, setregister] = useState(null);
  const Url = `http://127.0.0.1:8000/api/user`;
  const Handlechange = (e) => {
    setregister({
        ...register,
        [e.target.name]: e.target.value
      })
  }
 const Handleregister = (e) => {
    e.preventDefault()
    axios.post(Url, {email: register.email, password: register.password, nama: register.nama})
    .then(()=> {
         alert("data berhasil di tambahkann")
   }).catch((error)=>{
       const message = Object.values(error.response.data.errors).join('  ')
       alert(message)
   });
 }

 const navigatelogin = () => {
       Navigatelogin("/login");
 }
    return (
        <>
        <Register>
          <Input placeholder="Name" type="text" name="nama" onChange={Handlechange}/>
          <Input placeholder="example@gmail.com" type="email" name="email" onChange={Handlechange}/>
          <Input placeholder="*******" type="password" name="password" onChange={Handlechange} />
          <Button onClick={Handleregister} className={`mt-5`}>Register</Button>
           <div className="mb-6">
              <p className="font-semibold text-black">have an account ? <span className="font-bold text-blue-700 cursor-pointer" onClick={navigatelogin}>Login now</span></p>
           </div>
        </Register>
        </>
    );
}

export default Registerpage;

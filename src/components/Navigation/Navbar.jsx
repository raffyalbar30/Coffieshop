import { HiUserCircle } from "react-icons/hi2";
import { IoHomeOutline } from "react-icons/io5";
import { PiSignOutBold } from "react-icons/pi";
import { useState} from "react";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";







const Navbar = ({Hendleropenscart}) => {

    const [isOpen,setisOpen] = useState(false);
    const { cart } = useSelector(all => all.cart);
    let menuRef = useRef();
    const Navigatelogout = useNavigate();
    const username = useLogin();
   
    
  
   useEffect(() => {
      const Outside = (e) =>{
         if (!menuRef.current.contains(e.target)) {
            setisOpen(false)
         }
      }

      document.addEventListener("mousedown", Outside);
      return ()=> document.removeEventListener("mousedown", Outside);
   });

    const Hendlerprofil = () => {
            setisOpen(!isOpen) 
    }

    const Handlerdashboard = () => {
        window.location.href ="https://coffieshop-raffyalbar30.vercel.app/";
    }
     const Handlerlogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("price");
        localStorage.removeItem("message");
        Navigatelogout("/login")

     }

    
    return (
        <>
        <div ref={menuRef}>
        <div className="w-full bg-white p-2 shadow-md">
            <div className="flex justify-between items-center">
               <div className="md:w-20 w-16 mx-4">
                   <img src="/img/logo.png" alt="" />
               </div>
                     <p>{username}</p>

                   <div className="flex items-center">
                         <div className="md:mr-8 mr-4 cursor-pointer hover:w-10 hover:rounded-full hover:shadow-md">
                         <HiUserCircle className="text-4xl mx-auto" onClick={Hendlerprofil}/>
                         </div>
                         <div className="mr-3 flex relative cursor-pointer">
                         <PiShoppingCartSimpleLight onClick={Hendleropenscart} className="text-3xl"/>
                         <p className="text-base text-slate-900">{cart.length}</p>
                         </div>
                   </div>
            </div>
        </div>
         <div className={`mt-2 float-right mr-2 w-[150px] h-[75px] cursor-pointer relative z-50  ${isOpen ? 'active' : 'hidden' }`}>
            <div className="bg-white shadow-xl flex-wrap rounded-md mb-2">
                 <div className="flex justify-center items-center pt-4">
                    <p className="mr-2 text-lg font-semibold" onClick={Handlerdashboard}>Dashboard</p>
                    <IoHomeOutline />
                 </div>
                 <div className="flex justify-center items-center pb-4">
                    <p className="mr-2 text-lg font-semibold" onClick={Handlerlogout}>Log Out</p>
                    <PiSignOutBold className="text-red"/>
                 </div>
            </div>
         </div>
        </div>

          
        </>
    )
}

export default Navbar

import { useNavigate } from "react-router-dom"
import { useState } from "react"
import Button from "../components/Buttons/Button"
import Input from "../components/Inputs/Inputs"
import axios from "axios"
import Login from "../fragments/Login"


const Loginpage = () => {
 const [user, setUser] = useState(null)
 const [eror, setEror] = useState(false)
 const userDashboard = useNavigate();
 const Navigateregister = useNavigate();

const Url =`https://rapicoffieshop.000webhostapp.com/api/auth/login`;
 const handelchange = (e) =>{
     setUser({
       ...user,
       [e.target.name]: e.target.value
     })
   }
  const Hendlelogin = (e) => {
     e.preventDefault()
     axios.post(Url, {email: user.email, password: user.password })
     .then((response)=> {
           userDashboard("/userpage")
           localStorage.setItem("token", response.data.access_token)
    }).catch(()=>{
       setEror(!eror)
    });
   

  }
  const Handleregister =() => {
       Navigateregister("/register")
  }
  
    return(

      <Login >
          <p className={`text-sm text-red-500 font-semibold ${eror ? "default" : "hidden"}`}>username or password is incorrect</p>
          <Input placeholder="example@gmail.com" type="text" name="email" onChange={handelchange}/>
          <Input placeholder="*******" type="password" name="password"  onChange={handelchange} />
          <Button onClick={Hendlelogin} className={`mt-5`}>Login</Button>
           <div className="mb-6">
              <p className="font-semibold text-black">Don't have an account ? <span className="font-bold text-blue-700 cursor-pointer" onClick={Handleregister}>Register now</span></p>
           </div>
        </Login>
       
    )
}
   
export default Loginpage



import { useState } from "react"
import Button from "../components/Buttons/Button"
import Input from "../components/Inputs/Inputs"
import axios from "axios"
import Login from "../fragments/Login"


const Loginpage = () => {
 const [user, setUser] = useState(null)
 const [eror, setEror] = useState(false)

const Url =`https://fakestoreapi.com/auth/login`;
 const handelchange = (e) =>{
     setUser({
       ...user,
       [e.target.name]: e.target.value
     })
   }
  const Hendlelogin = (e) => {
     e.preventDefault()
     axios.post(Url, {username: user.email, password: user.password })
     .then((response)=> {
           window.location.href = "http://localhost:5173/userpage";
           localStorage.setItem("token", response.data.token)
    }).catch(()=>{
       setEror(!eror)
    });
    
  }
  
    return(

      <Login >
          <p className={`text-sm text-red-500 font-semibold ${eror ? "default" : "hidden"}`}>username or password is incorrect</p>
          <Input placeholder="example@gmail.com" type="text" name="email" onChange={handelchange}/>
          <Input placeholder="*******" type="password" name="password"  onChange={handelchange} />
          <Button onClick={Hendlelogin}>Login</Button>
           <div className="mb-6">
              <p className="font-semibold text-black">Don't have an account ? <span className="font-bold text-blue-700 cursor-pointer">Register now</span></p>
           </div>
        </Login>
       
    )
}
   
export default Loginpage


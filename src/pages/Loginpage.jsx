<<<<<<< HEAD
import { useNavigate } from "react-router-dom"
=======

>>>>>>> eb8cec3f899655433a24cc571bf5acc7fd307395
import { useState } from "react"
import Button from "../components/Buttons/Button"
import Input from "../components/Inputs/Inputs"
import axios from "axios"
import Login from "../fragments/Login"


const Loginpage = () => {
 const [user, setUser] = useState(null)
 const [eror, setEror] = useState(false)
<<<<<<< HEAD
 const userDashboard = useNavigate();
 const Navigateregister = useNavigate();

const Url =`http://127.0.0.1:8000/api/auth/login`;
=======

const Url =`https://fakestoreapi.com/auth/login`;
>>>>>>> eb8cec3f899655433a24cc571bf5acc7fd307395
 const handelchange = (e) =>{
     setUser({
       ...user,
       [e.target.name]: e.target.value
     })
   }
  const Hendlelogin = (e) => {
     e.preventDefault()
<<<<<<< HEAD
     axios.post(Url, {email: user.email, password: user.password })
     .then((response)=> {
            userDashboard("/userpage");
           localStorage.setItem("token", response.data.access_token)
           
    }).catch(()=>{
       setEror(!eror)
      
       
    });
    
    
  }

  const navigateregister = () =>{
       Navigateregister("/register")
=======
     axios.post(Url, {username: user.email, password: user.password })
     .then((response)=> {
           window.location.href = "http://localhost:5173/userpage";
           localStorage.setItem("token", response.data.token)
    }).catch(()=>{
       setEror(!eror)
    });
    
>>>>>>> eb8cec3f899655433a24cc571bf5acc7fd307395
  }
  
    return(

      <Login >
          <p className={`text-sm text-red-500 font-semibold ${eror ? "default" : "hidden"}`}>username or password is incorrect</p>
<<<<<<< HEAD
          <Input placeholder="example@gmail.com" type="email" name="email" onChange={handelchange}/>
          <Input placeholder="*******" type="password" name="password"  onChange={handelchange} />
          <Button onClick={Hendlelogin}>Login</Button>
           <div className="mb-6">
              <p className="font-semibold text-black">Don't have an account ? <span className="font-bold text-blue-700 cursor-pointer" onClick={navigateregister}>Register now</span></p>
=======
          <Input placeholder="example@gmail.com" type="text" name="email" onChange={handelchange}/>
          <Input placeholder="*******" type="password" name="password"  onChange={handelchange} />
          <Button onClick={Hendlelogin}>Login</Button>
           <div className="mb-6">
              <p className="font-semibold text-black">Don't have an account ? <span className="font-bold text-blue-700 cursor-pointer">Register now</span></p>
>>>>>>> eb8cec3f899655433a24cc571bf5acc7fd307395
           </div>
        </Login>
       
    )
}
   
export default Loginpage


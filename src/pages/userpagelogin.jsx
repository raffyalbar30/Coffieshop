import { useState } from "react"
import Benner from "../components/Corusellbener/Benner"
import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navigation/Navbar"
import Menus from "../fragments/Menus"
import Modals from "../fragments/Modal"


const Userpagelogin = () =>{
  const [isOpen, setisOpen] = useState(false)
  const Hendleropenscart = () =>{
    setisOpen(true)
    }
  const Handlercloseopencart = () => {
     setisOpen(false)
  }
    return(
      <>
      <Navbar Hendleropenscart={Hendleropenscart}/>
      <Benner/>
      <Menus/>
      <Footer/>
      {isOpen ? <Modals Handlercloseopencart={Handlercloseopencart}></Modals> : null}
      </>
    )
}

export default Userpagelogin
import React from 'react'
import Navbar from '../route/Navbar'
import Beneruser from '../route/Beneruser'
import Menuuser from '../route/Menuuser'
import Footeruser from '../route/Footeruser'
import { useState } from "react"
import Modallogin from '../fragments/Modallogin'

export default function Userpage() {
      const [isopenModal, setisopenmodal] = useState(false);
      const Handlermodal = () => {
        setisopenmodal(true);
      }

      const Handlerclosemodal = () => {
        setisopenmodal(false);
      }
  return (
    <>
      <Navbar Handlermodal={Handlermodal}></Navbar>
      <Beneruser Handlermodal={Handlermodal}></Beneruser>
      <Menuuser Handlermodal={Handlermodal}></Menuuser>
      <Footeruser Handlermodal={Handlermodal}></Footeruser>

      {isopenModal ? <Modallogin Handlerclosemodal={Handlerclosemodal} ></Modallogin> : null}
    </>
  )
}

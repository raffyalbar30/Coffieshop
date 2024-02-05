import React from 'react'
import Modal from '../components/Modals/Modalspopup'
import Carts from '../components/Cart/Carts'
<<<<<<< HEAD
import Cartfalse from '../components/Cart/Cartfalse';


function Modals({Handlercloseopencart}) {
  
  return (
     <Modal>
     <Carts Handlercloseopencart={Handlercloseopencart}/>
=======

function Modals({Handlercloseopencart}) {
  return (
     <Modal>
           <Carts Handlercloseopencart={Handlercloseopencart}/> 
>>>>>>> eb8cec3f899655433a24cc571bf5acc7fd307395
     </Modal>
  )
}

export default Modals
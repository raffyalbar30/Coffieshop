import React from 'react'
import Modal from '../components/Modals/Modalspopup'
import Carts from '../components/Cart/Carts'

function Modals({Handlercloseopencart}) {
  return (
     <Modal>
           <Carts Handlercloseopencart={Handlercloseopencart}/> 
     </Modal>
  )
}

export default Modals
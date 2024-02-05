import ReactDOM from 'react-dom';




function Modalspopup() {
  return (
    <div className='fixed top-0 left-0 w-full h-screen z-20 bg-black bg-opacity-75'></div>
  )
}

const Modaloverlay = ({children}) => {

   return(
    <div className='fixed top-0 left-0 w-full h-screen z-30 flex items-center justify-center'>
       <div className='bg-white p-4 rounded-lg shadow-lg mx-2'>
         {children}
       </div>
    </div>
   );
}

const portalElement = document.getElementById("modalportal");
const Modal = ({children}) =>{
    return(
       <>
       {ReactDOM.createPortal(<Modalspopup/>, portalElement)}
       {ReactDOM.createPortal(<Modaloverlay>{children}</Modaloverlay>, portalElement)}
       </>
    )
}

export default Modal
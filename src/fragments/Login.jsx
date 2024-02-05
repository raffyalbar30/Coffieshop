

const Login = (props) =>{
    const {children} = props
    return(
        <div className="flex justify-center min-h-screen items-center">
           <div className="w-full max-w-xs border border-solid rounded-md">
               <img src="/img/logo.png" alt="" className="mx-auto"/>
               <div className="grid place-items-center">
                 {children}
               </div>
           </div>
        </div>
    )
}

export default Login
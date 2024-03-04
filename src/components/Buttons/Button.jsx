

const Button = (props) => {
    const {children, onClick, className} = props
    return(
        <div className=" mb-2">
             <button className={`text-lg font-semibold md:px-28 px-8 py-2 text-white bg-blue-700 rounded-md ${className}`} onClick={onClick}>{children}</button>
        </div>
    )
}

export default Button
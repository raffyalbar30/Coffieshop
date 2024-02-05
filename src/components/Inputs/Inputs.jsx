const Input = (props) => {
    const {placeholder, type, name, onChange, classname} = props
    return (
        <div className="mt-2">
            <input type={type} name={name} placeholder={placeholder} onChange={onChange} 
            className={`px-4 p-2 rounded-md border border-solid font-semibold placeholder:text-lg text-center ${classname}`}/>  
        </div>
    )
}
export default Input 
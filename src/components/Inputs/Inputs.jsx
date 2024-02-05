const Input = (props) => {
<<<<<<< HEAD
    const {placeholder, type, name, onChange, classname} = props
    return (
        <div className="mt-2">
            <input type={type} name={name} placeholder={placeholder} onChange={onChange} 
            className={`px-4 p-2 rounded-md border border-solid font-semibold placeholder:text-lg text-center ${classname}`}/>  
=======
    const {placeholder, type, name, onChange} = props
    return (
        <div className="mt-2">
            <input type={type} name={name} placeholder={placeholder} onChange={onChange} 
            className="px-4 p-2 rounded-md border border-solid font-semibold placeholder:text-lg text-center" />  
>>>>>>> eb8cec3f899655433a24cc571bf5acc7fd307395
        </div>
    )
}
export default Input 
import Button from "../components/Buttons/Button";
import { useDispatch} from "react-redux";
import { addTocart } from "../redux/slices/Cartslice";




const menus = [
    {
      id: 1,
      img : "img/coffiecapucino.png",
      name : "Coffie Capucino",
      price : 10000,

    },
    {
      id: 2,
      img : "img/lemonice.png",
      name : "Orange Jus",
      price : 5000,

    },
    {
      id: 3,
      img : "img/alpukatice.png",
      name : "Avocado Jus",
      price : 8000,
      
    }
  ];


  

  //redering by data menus and maping dispacth to store & Carts Conditional Rendering use hooks usestate 
  const Menus = () => {
    const dispacth = useDispatch();
   
   
  return(
    <>
    
        <div className={`ml-4 md:ml-28 md:mt-24 `} >
          <h1 className={`font-bold text-lg`}>PILIH MENU</h1>
          <div className="flex justify-between items-center mt-8">
              {menus.map((all)=> (
                 <div className="mr-4 md:mr-12" key={all.id}>
                    <img src={all.img} alt="" className="md:w-[120px] mx-auto"/>
                    <p className="md:text-xl mt-2 items-center font-serif font-bold text-xs text-center">{all.name}</p>
                    <p className="md:text-xl items-center font-serif text-sm text-center">Rp. {all.price}</p>
                    <Button className="md:px-16 py-2 px-12 items-center mx-auto inline-block rounded bg-primary hover:bg-blue-800 focus:outline-none hover:to-lime-200" 
                    onClick={()=> { dispacth(addTocart(all))}}>Buy</Button>
                 </div>
              ))}
          </div>
        </div>    
         
         
    </>
              
  )
}
export default Menus
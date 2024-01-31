import React from 'react'
import Button from "../components/Buttons/Button";

const menuuser = [
    {
      id: 1,
      img : "img/coffiecapucino.png",
      name : "Coffie Capucino",
      price : 10000,

    },
    {
      id: 2,
      img : "img/lemonice.png",
      name : "Lemon Ice",
      price : 5000,

    },
    {
      id: 3,
      img : "img/alpukatice.png",
      name : "Alpukat Ice",
      price : 8000,
      
    }
  ];
export default function Menuuser({Handlermodal}) {
  return (
    <>
        <div className={`ml-4 md:ml-28 md:mt-24`} onClick={Handlermodal}>
          <h1 className={`font-bold text-lg`}>PILIH MENU</h1>
          <div className="flex justify-between items-center mt-8">
              {menuuser.map((all)=> (
                 <div className="mr-4 md:mr-12" key={all.id}>
                    <img src={all.img} alt="" className="md:w-[120px] mx-auto"/>
                    <p className="md:text-xl mt-2 items-center font-serif font-bold text-xs text-center">{all.name}</p>
                    <p className="md:text-xl items-center font-serif text-sm text-center">Rp. {all.price}</p>
                    <Button className="md:px-16 py-2 px-12 items-center mx-auto" onClick={Handlermodal}>Buy</Button>
                 </div>
              ))}
          </div>
        </div>    
    </>
  )
}

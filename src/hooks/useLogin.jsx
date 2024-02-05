import { useEffect} from "react";


<<<<<<< HEAD


export const useLogin = () => {
=======
export const useLogin = () => {
   
>>>>>>> eb8cec3f899655433a24cc571bf5acc7fd307395
    useEffect(()=>{
        const token = localStorage.getItem("token");
        if (!token) {
            window.location.href = "http://localhost:5173/login"
        } 
    }, []);
   return ;

}


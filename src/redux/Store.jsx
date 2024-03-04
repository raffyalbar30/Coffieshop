import { configureStore } from "@reduxjs/toolkit";
import AddcartReducer from './slices/Cartslice';





const Store = configureStore({
    reducer: {
        cart: AddcartReducer,
    },
});


Store.subscribe(()=> {
   Store.getState()
   
})



export default Store;
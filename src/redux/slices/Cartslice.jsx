import { createSlice } from '@reduxjs/toolkit'
 
const initialState = {
    cart:  JSON.parse(localStorage.getItem("order")) || [],
    qty : [],
}



const AddcartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:
        {
            addTocart(state,action) {
                const addfind = state.cart.findIndex(cartitem => cartitem.id === action.payload.id)
                if (addfind>=0) {
                    state.cart[addfind].qty +=1
                    
                }else{
                    const addqyt = {...action.payload, qty:1}
                    state.cart.push(addqyt);
                }
            },
            deleteitem(state, action){
                state.cart = state.cart.filter(cartdelete=> cartdelete.id !== action.payload.id)
                console.log(action)
            }
        }
    

})

export const {addTocart, deleteitem} = AddcartSlice.actions
export default AddcartSlice.reducer

//selecttore

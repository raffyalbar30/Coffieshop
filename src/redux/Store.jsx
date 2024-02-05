import { configureStore } from "@reduxjs/toolkit";
import AddcartReducer from './slices/Cartslice';

const Store = configureStore({
    reducer: {
        cart: AddcartReducer,
<<<<<<< HEAD
      
    },
});

Store.subscribe(()=>  Store.getState())

=======
    },
});

Store.subscribe(()=> Store.getState())
>>>>>>> eb8cec3f899655433a24cc571bf5acc7fd307395


export default Store;
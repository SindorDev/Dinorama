import { configureStore } from "@reduxjs/toolkit";
import { api } from "../api/index"
import {reducer as cartReducer} from "../slice/Cart"
import {reducer as likesReducer} from "../slice/Likes"
import authReducer from "../slice/authSlice"
const store = configureStore({
     reducer: {
          cart: cartReducer,
          likes: likesReducer,
          auth: authReducer,
          [api.reducerPath]:  api.reducer
     },
     middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware)
})

export default store
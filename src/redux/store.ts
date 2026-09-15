import { configureStore } from "@reduxjs/toolkit";
import  authSlice  from "./reducers/authSlice";
export type AppDispatch = typeof store.dispatch;
export const store = configureStore({
    reducer:{
        auth: authSlice
    }
})
import { configureStore } from "@reduxjs/toolkit";
import  authSlice  from "./reducers/authSlice";
import  permissionsSlice  from "./reducers/permissionsSlice";
import  dashboardSlice  from "./reducers/dashboardSlice";
import  carsSlice  from "./reducers/carsSlice";
import  rentalsSlice  from "./reducers/rentalsSlice";
export const store = configureStore({
    reducer:{
        auth: authSlice,
        permissions: permissionsSlice,
        dashboard: dashboardSlice,
        cars: carsSlice,
        rentals: rentalsSlice
    }
})
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>; // useselector-da state type mueyyen etmek ucun
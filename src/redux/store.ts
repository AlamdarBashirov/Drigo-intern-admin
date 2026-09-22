import { configureStore } from "@reduxjs/toolkit";
import  authSlice  from "./reducers/authSlice";
import  permissionsSlice  from "./reducers/permissionsSlice";
import  dashboardSlice  from "./reducers/dashboardSlice";
export const store = configureStore({
    reducer:{
        auth: authSlice,
        permissions: permissionsSlice,
        dashboard: dashboardSlice
    }
})
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>; // useselector-da state type mueyyen etmek ucun
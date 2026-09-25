import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetCars } from "../../api/carsApi";
import type { CarsQueryParams, CarsState } from "../../types/carsTypes";

export const GetCarsThunk = createAsyncThunk("cars/get-cars", async(params: CarsQueryParams) => {
    const res = await GetCars(params)
    return res
})

const initialState:CarsState = {
    loading: false,
    error: null,
    cars: null
}

export const carsSlice = createSlice({
    name: "cars",
    initialState,
    reducers:{},
    extraReducers: builder => 
        builder

    //get cars
    .addCase(GetCarsThunk.fulfilled, (state, action) => {
        state.loading = false
        state.error = null,
        state.cars = action.payload
    })
    .addCase(GetCarsThunk.pending, (state) => {
        state.loading = true
        state.error = null
    })
    .addCase(GetCarsThunk.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || "Fetching Cars Error"
    })
})

export default carsSlice.reducer
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetCarById, GetCars } from "../../api/carsApi";
import type { CarsQueryParams, CarsState } from "../../types/carsTypes";

export const GetCarsThunk = createAsyncThunk("cars/get-cars", async(params: CarsQueryParams) => {
    const res = await GetCars(params)
    return res
})

export const GetCarByIdThunk = createAsyncThunk("cars/get-by-id", async (id : number | string) => {
    const res = await GetCarById(id)
    return res
})

const initialState:CarsState = {
    loading: false,
    error: null,
    cars: null,
    car: null
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

    // get car by id thunk
    .addCase(GetCarByIdThunk.fulfilled, (state, action) => {
        state.loading = false
        state.error = null,
        state.car = action.payload
    })
    .addCase(GetCarByIdThunk.pending, (state) => {
        state.loading = true
        state.error = null
    })
    .addCase(GetCarByIdThunk.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || "Fetching Car Details Error"
    })
})

export default carsSlice.reducer
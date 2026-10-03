import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetRentals } from "../../api/rentalsApi";
import type { RentalsQueryParams, RentalState } from "../../types/rentalsTypes";

export const GetRentalsThunk = createAsyncThunk("rentals/get", async(params:RentalsQueryParams) => {
    const res = await GetRentals(params)
    return res
})

const initialState:RentalState = {
    loading: false,
    error: null,
    rentals: null
}

export const rentalsSlice = createSlice({
    name: "rentals",
    initialState,
    reducers:{},
    extraReducers: builder => 
        builder


    //get renntals
    .addCase(GetRentalsThunk.fulfilled, (state, action) => {
        state.loading = false,
        state.error = null,
        state.rentals = action.payload
    })
    .addCase(GetRentalsThunk.pending, (state) => {
        state.loading = true,
        state.error = null
    })
    .addCase(GetRentalsThunk.rejected, (state, action) => {
        state.loading = false,
        state.error = null,
        state.error = action.error.message || "Rentals fetch Error"
    })
})


export default rentalsSlice.reducer
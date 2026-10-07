import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetRentalById, GetRentalPayment, GetRentals } from "../../api/rentalsApi";
import type { RentalsQueryParams, RentalState } from "../../types/rentalsTypes";

export const GetRentalsThunk = createAsyncThunk("rentals/get", async(params:RentalsQueryParams) => {
    const res = await GetRentals(params)
    return res
})

export const GetRentalByIdThunk = createAsyncThunk("rentals/get-by-id", async(id:number) => {
    const res = await GetRentalById(id)
    return res
})

export const GetRentalPaymentInfoThunk = createAsyncThunk("rentals/get-payment-info", async (id: number) => {
    const res = await GetRentalPayment(id)
    return res
})

const initialState:RentalState = {
    loading: false,
    error: null,
    rentals: null,
    rental: null,

    paymentLoading: false,
    paymentError: null,
    rentalPayment: null
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
        state.error = action.error.message || "Rentals fetch Error"
    })

    //get rental by id (detail page)
    .addCase(GetRentalByIdThunk.fulfilled, (state, action) => {
        state.loading = false,
        state.error = null,
        state.rental = action.payload
    })
    .addCase(GetRentalByIdThunk.pending, (state) => {
        state.loading = true,
        state.error = null
    })
    .addCase(GetRentalByIdThunk.rejected, (state, action) => {
        state.loading = false,
        state.error = action.error.message || "Rental by id fetch Error"
    })

    //get rental payment information thunk
    .addCase(GetRentalPaymentInfoThunk.fulfilled, (state, action) => {
        state.paymentLoading = false,
        state.paymentError = null,
        state.rentalPayment = action.payload
    })
    .addCase(GetRentalPaymentInfoThunk.pending, (state) => {
        state.paymentLoading = true,
        state.paymentError = null
    })
    .addCase(GetRentalPaymentInfoThunk.rejected, (state, action) => {
        state.paymentLoading = false,
        state.paymentError = action.error.message || "Rental by id fetch Error"
    })
})


export default rentalsSlice.reducer
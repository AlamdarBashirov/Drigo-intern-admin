import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AddCar, GetBrandColors, GetBrands, GetCarById, GetCarFeatures, GetCars, GetCities, GetFuelTypes, GetModels } from "../../api/carsApi";
import type { CarsQueryParams, CarsState, CreateCarData } from "../../types/carsTypes";
import apiClient from "../../api/apiClient";

export const GetCarsThunk = createAsyncThunk("cars/get-cars", async (params: CarsQueryParams) => {
    const res = await GetCars(params)
    return res
})

export const GetCarByIdThunk = createAsyncThunk("cars/get-by-id", async (id: number | string) => {
    const res = await GetCarById(id)
    return res
})

export const AddCarThunk = createAsyncThunk("cars/create-car", async (data: CreateCarData) => {
    const res = await AddCar(data)
    return res
})

export const GetBrandsThunk = createAsyncThunk("cars/get-brands", async () => {
    return await GetBrands()
})

export const GetModelsThunk = createAsyncThunk("cars/get-models", async (brandId: number) => {
    return await GetModels(brandId)
})

export const GetBrandColorsThunk = createAsyncThunk("cars/get-brand-colors", async (brandId: number) => {
    return await GetBrandColors(brandId)
})

export const GetFuelTypesThunk = createAsyncThunk("cars/get-fuel-types", async () => {
    return await GetFuelTypes()
})

export const GetCitiesThunk = createAsyncThunk("cars/get-cities", async () => {
    return await GetCities()
})

export const GetCarFeaturesThunk = createAsyncThunk("cars/get-car-features", async () => {
    return await GetCarFeatures()
})

const initialState: CarsState = {
    loading: false,
    error: null,
    cars: null,
    car: null,
    brands: null,
    models: [],
    colors: [],
    fuelTypes: [],
    cities: [],
    carFeatures: [],
    lookupsError: null,
    lookupsLoading: false
}

export const carsSlice = createSlice({
    name: "cars",
    initialState,
    reducers: {},
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

            //add car thunk
            .addCase(AddCarThunk.fulfilled, (state, action) => {
                state.loading = false
                state.error = null,
                    state.car = action.payload
            })
            .addCase(AddCarThunk.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(AddCarThunk.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message || "Adding car Error"
            })

            //get brands
            .addCase(GetBrandsThunk.fulfilled, (state, action) => {
                state.brands = action.payload
                state.lookupsLoading = false
                state.lookupsError = null
            })
            .addCase(GetBrandsThunk.pending, (state, action) => {
                state.lookupsLoading = true
            })
            .addCase(GetBrandsThunk.rejected, (state, action) => {
                state.lookupsLoading = false
                state.lookupsError = action.error.message || "Error Brand Fetching"
            })

            //get models thunk
            .addCase(GetModelsThunk.fulfilled, (state, action) => {
                state.models = action.payload
            })
            .addCase(GetModelsThunk.pending, (state, action) => {
                state.lookupsLoading = true
            })
            .addCase(GetModelsThunk.rejected, (state, action) => {
                state.lookupsLoading = false
                state.lookupsError = action.error.message || "Error Brand Fetching"
            })

            //get brand colors thunk
            .addCase(GetBrandColorsThunk.fulfilled, (state, action) => {
                state.colors = action.payload
            })
            .addCase(GetBrandColorsThunk.pending, (state, action) => {
                state.lookupsLoading = true
            })
            .addCase(GetBrandColorsThunk.rejected, (state, action) => {
                state.lookupsLoading = false
                state.lookupsError = action.error.message || "Error Brand Fetching"
            })

            //get fuelType thunk
            .addCase(GetFuelTypesThunk.fulfilled, (state, action) => {
                state.fuelTypes = action.payload
            })
            .addCase(GetFuelTypesThunk.pending, (state, action) => {
                state.lookupsLoading = true
            })
            .addCase(GetFuelTypesThunk.rejected, (state, action) => {
                state.lookupsLoading = false
                state.lookupsError = action.error.message || "Error Brand Fetching"
            })

            //get cities thunk
            .addCase(GetCitiesThunk.fulfilled, (state, action) => {
                state.cities = action.payload
            })
            .addCase(GetCitiesThunk.pending, (state, action) => {
                state.lookupsLoading = true
            })
            .addCase(GetCitiesThunk.rejected, (state, action) => {
                state.lookupsLoading = false
                state.lookupsError = action.error.message || "Error Brand Fetching"
            })

            //get car features
            .addCase(GetCarFeaturesThunk.fulfilled, (state, action) => {
                state.carFeatures = action.payload
            })
            .addCase(GetCarFeaturesThunk.pending, (state, action) => {
                state.lookupsLoading = true
            })
            .addCase(GetCarFeaturesThunk.rejected, (state, action) => {
                state.lookupsLoading = false
                state.lookupsError = action.error.message || "Error Brand Fetching"
            })
})

export default carsSlice.reducer
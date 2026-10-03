import type { CarsQueryParams, CreateCarData, UpdateCarData } from "../types/carsTypes"
import apiClient from "./apiClient"

export const GetCars = async (params: CarsQueryParams) => {
    const response = await apiClient.get("api/admin/cars", {
        params
    })
    return response.data
}
export const GetCarById = async(id:number | string) => {
    const response = await apiClient.get(`api/admin/cars/${id}`)
    console.log(response.data);
    
    return response.data
}

//create car
export const AddCar = async (data: CreateCarData) => {
    const response = await apiClient.post("api/admin/cars", data)
    return response.data
}

//update car
export const UpdateCar = async (id: number, data: UpdateCarData) => {
    const response = await apiClient.put(`api/admin/cars/${id}`, data)
    return response.data
}

//delete car 
export const DeleteCar = async (id: number) => {
    const response = await apiClient.delete(`api/admin/cars/${id}`)
    return response.data
}

//isActive status (true, false)
export const ToggleCarActive = async (id: number) => {
    const response = await apiClient.get(`api/admin/cars/${id}/toggle-active`)
    return response.data
}

//get brands
export const GetBrands = async() => {
    const response = await apiClient.get("api/admin/brands")
    return response.data
}

//get models
export const GetModels = async(brandId: number) => {
    const response = await apiClient.get(`api/admin/brands/${brandId}/models`)
    return response.data
}

//get brand colors
export const GetBrandColors = async(brandId: number) => {
    const response = await apiClient.get(`api/admin/brands/${brandId}/colors`)
    return response.data
}

//get fuel type
export const GetFuelTypes = async() => {
    const response = await apiClient.get(`api/admin/cars/fuel-types`)
    return response.data
}

//get cities
export const GetCities = async() => {
    const response = await apiClient.get(`api/admin/cities`)
    return response.data
}

//car features
export const GetCarFeatures = async() => {
    const response = await apiClient.get(`api/admin/cars/car-features`)
    return response.data
}
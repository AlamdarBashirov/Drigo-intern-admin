import type { CarsQueryParams } from "../types/carsTypes"
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
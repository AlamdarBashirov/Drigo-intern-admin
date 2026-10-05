import type { RentalsQueryParams } from "../types/rentalsTypes";
import apiClient from "./apiClient"

export const GetRentals = async (params: RentalsQueryParams) => {
    const response = await apiClient.get("api/admin/rentals", {params})
    console.log(response.data);
    return response.data
}

export const GetRentalById = async (id:number) => {
    const response = await apiClient.get(`api/admin/rentals/${id}`)
    console.log(response.data)
    return response.data
}
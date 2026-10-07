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

// get rentals payments rentals/:id/payments

export const GetRentalPayment = async(id: number) => {
    const response = await apiClient.get(`/api/admin/rentals/${id}/payments`)
    return response.data
}
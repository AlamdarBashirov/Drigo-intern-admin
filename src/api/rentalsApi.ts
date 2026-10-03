import type { RentalsQueryParams } from "../types/rentalsTypes";
import apiClient from "./apiClient"

export const GetRentals = async (params: RentalsQueryParams) => {
    const response = await apiClient.get("api/admin/rentals", {params})
    console.log(response.data);
    return response.data
}
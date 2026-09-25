export type CarData = {
    activeRentalId: number | null,
    brandName: string,
    colorHexCode: string, 
    colorName: string,
    createdAt: string,
    endTripAvailableCities: string[],
    fuelLevel: number,
    id: number,
    imei: string,
    isActive: boolean,
    manufactureYear: number,
    modelName: string,
    plateNumber: string
}

export type CarsResponse = {
    data: CarData[],
    page: number,
    pageSize: number,
    total: number
}

//for redux 

export type CarsState = { 
    error: string | null,
    loading: boolean,
    cars: CarsResponse | null
}

export type CarsQueryParams = {
   page?: number
   pageSize?: number
   search? :string
   sortBy? :string
   sortOrder?: "asc" | "desc"
}
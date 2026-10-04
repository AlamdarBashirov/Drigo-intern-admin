export type RentalData = {
    car: RentalCarData,
    currentPeriod: number,
    debtPaidAmount: number,
    discountAmount: number,
    endDate: string | null,
    extraKmAmount: number,
    extraKmDistance: number,
    hasTarsContract: boolean,
    id:number,
    nextPaymentTotal: number | null,
    route: RentalRouteData,
    startDate: string,
    status: string,
    tariffName: string,
    totalDistance: number,
    totalPaid: number,
    totalPrice: number
    user: RentalUserData,
    userTotalDebt:number
}

type RentalCarData = {
    brand: string,
    color: string,
    id: number,
    model: string,
    plateNumber: string,
    year: number
}

type RentalRouteData = {
    endLatitude: number | null,
    endLongitude: number | null,
    startLatitude: number,
    startLongitude: number
}

type RentalUserData = {
    email: string | null,
    fullName: string,
    id: string,
    phoneNumber: string
}

export type RentalsResponse ={ 
    data: RentalData[]
    page: number,
    pageSize: number,
    total: number
}


//for redux 
export type RentalState = {
    loading: boolean,
    error: string | null,
    rentals: RentalsResponse | null
}



// query params

export const rentalStatuses = [
    "Active",
    "Started",
    "Completed",
    "PaymentPending",
    "Cancelled",
    "Accident"
] as const;

export type RentalStatus = typeof rentalStatuses[number];

export type RentalsQueryParams = {
    page?: number,
    pageSize?: number,
    status?: RentalStatus,
    sortBy?: string,
    sortOrder?: "asc" | "desc" | "",
    carId?: number,
    userId?: number
}
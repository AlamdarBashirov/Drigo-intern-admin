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



// rental get by id (detail)

export type RentalDetailResponse = {
    actionHistory: DetailActionHistory[],
    bonusEarned: number,
    bonusUsed: number,
    booking: null, //type namelum
    cancelReason: string | null,
    car: DetailRentalCar,
    carSegments: DetailRentalCarSegment[]
    carServiceId: number | null,
    compensationDistanceThisPeriod: number,
    compensationDistanceTotal: number,
    createdAt: string,
    currentPeriod: number,
    customerBonusBalance: number,
    debts: DetailRentalDebt[],
    discountAmount: number,
    discountName: string | null,
    distanceUsedThisPeriod: number,
    endDate:string | null,
    endPhotoUrls: string[],
    freeTimeEnd: string,
    hasAccident: boolean,
    id: number,
    insurance: DetailRentalInsurance,
    isMonthlySubscription: boolean,
    isPackageExpired: boolean,
    lastPaymentAt: string,
    nextPaymentBaseAmount: number | null,
    nextPaymentBonusAmount: number | null,
    nextPaymentBundledDebts: number | null,
    nextPaymentDiscountAmount: number | null,
    nextPaymentDue: string | null,
    nextPaymentOverageAmount: number | null,
    nextPaymentServiceFee: number | null,
    nextPaymentTotal: number | null,
    nextPaymentTripFee: number | null,
    packageStartDate: string,
    paymentGracePeriodUntil: string | null,
    paymentRetryState: DetailRentalPaymentRetryState | null,
    problemNote: string | null,
    purchasedDistanceThisPeriod: number,
    purchasedDistanceTotal: number,
    route: DetailRentalRoute,
    startDate: string,
    startPhotoUrls: string[],
    status: RentalStatus,
    tariff: DetailRentalTariff,
    tarsContractDid: string | null,  //tarslar hamsi null gelib
    tarsError: string | null,
    tarsRequestId: number | null,
    totalDebt: number,
    totalDistance: number,
    totalPrice: number,
    updatedAt: string,
    useBonus: boolean,
    user: DetailRentalUser,
    userEndLocation: DetailRentalUserEndLocation | null
    userRentalHistory: DetailRentalUserRentalHistory[]
}

type DetailActionHistory = {
    action: string,
    at: string,
    by: string,
    id: number,
    note: string | null
}

type DetailRentalCar = {
    brand?: string,
    color?: string,
    fuelType?: string | null,
    id?: number,
    model?: string,
    plateNumber?: string,
    year?: number | null
}

type DetailRentalCarSegment = {
    carId: number,
    from: string,
    plateNumber: string,
    to: string | null
}

type DetailRentalInsurance = {
    dailyPrice: number,
    deductible: number,
    id: number,
    name: string
}

type DetailRentalRoute = {
    distance: number,
    endLatitude: number | null,
    endLongitude: number | null,
    startLatitude: number,
    startLongitude: number
}

type DetailRentalTariff = {
    activePrice: number,
    id: number,
    includedDistance: number,
    packageName: string,
    timeUnit: string,
    unitCount: number
}
type DetailRentalUser = {
    email: string,
    fullName: string,
    id: string,
    phoneNumber: string
}

type DetailRentalUserEndLocation = {
    latitude: number,
    longitude: number
}

type DetailRentalUserRentalHistory = {
    endDate: string | null,
    id:number,
    startDate: string,
    status: string,
    totalPrice: number
}

type DetailRentalPaymentRetryState = {
    attempts: number,
    lastError: string,
    nextRetryAt: string,
    amountDue: number
}
type DetailRentalDebt = {
    amount: number,
    createdAt: string,
    currency: string,
    description: string,
    id: number,
    isPaid: boolean,
    type: string
}


// rental payment types

export type RentalPaymentResponse = {
    amount: number,
    createdAt: string,
    currency: string,
    failureReason: string | null,
    id: number,
    isFinalPayment: boolean,
    periodEnd: string | null,
    periodStart: string | null,
    serviceFee: number,
    status: string,
    transactionType: string
}


//for redux 
export type RentalState = {
    loading: boolean,
    error: string | null,
    rentals: RentalsResponse | null,
    rental: RentalDetailResponse | null,
    paymentLoading: boolean,
    paymentError: string | null,
    rentalPayment: RentalPaymentResponse[] | null
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
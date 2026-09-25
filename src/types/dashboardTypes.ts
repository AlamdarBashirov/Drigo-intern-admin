export type DashboardKpis = {
    activeRentals: number,
    activeReservations: number,
    androidUsers: number,
    approvedMembers: number,
    averageVerificationTimeHours: number,
    iosUsers: number,
    monthlyRevenue: number,
    onlineDrivers: number,
    openSupportTickets: number,
    pendingVerificationCount: number,
    stripeMonthlyRevenue: number,
    stripeTotalRevenue: number,
    todayRevenue: number,
    totalCars: number,
    totalDebt: number,
    //totalDebtBreakdown
    totalDebtBreakdown: TotalDebtBreakdown
    totalDeliveryDrivers:number,
    totalMembers:number,
    totalRevenue: number
}

type TotalDebtBreakdown = {
    company: number,
    customer: number
}

//trends

export type TrendCountItem = {
    date: string,
    count: number
}

export type RevenueTrendItem ={
    date: string,
    revenue: number
}

export type DashboardTrends = {
    rentalTrends: TrendCountItem[],
    reservationTrends: TrendCountItem[],
    revenueTrends: RevenueTrendItem[],
    userRegistrationTrends:TrendCountItem[]
}

//fleet 
export type FleetCityItem = {
    city: string,
    count: number
}

export type DashboardFleet = {
    available: number,
    byCity: FleetCityItem[],
    inactive:number,
    lowFuel: number,
    online: number,
    rented: number,
    total: number
}

//online users

export type OnlineUser = {
    fullName: string,
    lastLoginAt: string,
    latitude: number,
    platform: string,
    userId: string
}

//recent activity

type RecentActivityItem = {
    at: string,
    id: number,
    message: string,
    refId: number | null,
    type: string
}

type RecentRental = {
    //car
    car: RecentRentalCarItem
    currentPeriod: number,
    debtPaidAmount: number,
    discountAmount:number,
    endDate:string,
    extraKmAmount: number,
    extraKmDistance: number,
    hasTarsContract: boolean,
    id: number,
    nextPaymentTotal: number | null,
    //route
    route: RecentRentalRouteItem
    startDate: string,
    status: string,
    tariffName: string,
    totalDistance: number,
    totalPaid: number,
    totalPrice: number,
    //user
    user: RecentRentalUserItem
    userTotalDebt: number
}

type RecentRentalCarItem ={
    brand: string,
    color: string,
    id: number,
    model: string,
    plateNumber:string,
    year: number
}
type RecentRentalRouteItem ={
    endLatitude: number,
    endLongitude: number,
    startLatitude: number,
    startLongitude: number,
}
type RecentRentalUserItem ={ 
    email:string | null,
    fullName: string,
    id: string, 
    phoneNumber: string
}

type RecentReservations = {
    carName: string, 
    createdAt: string,
    customerName: string,
    customerPhone: string,
    deliveryAddress: string,
    driverName: string | null,
    id: number,
    isImmediate: boolean,
    plateNumber: string, 
    reservationDate: string,
    scheduledDeliveryDate: string,
    status: string,
    totalPrice: number
}

type RecentSupportMessages = {
    createdAt: string,
    createdBy: string,
    id: number,
    isOperator: boolean,
    message: string, 
    supportId: number
}

export type DashboardRecentActivity ={ 
    activity: RecentActivityItem[],
    recentRentals: RecentRental[],
    recentReservations: RecentReservations[],
    recentSupportMessages: RecentSupportMessages[]
}


//for redux
export type DashboardState = {
    kpis: DashboardKpis | null,
    trends: DashboardTrends | null,
    fleet: DashboardFleet | null,
    onlineUsers: OnlineUser[] | null,
    recentActivity: DashboardRecentActivity | null,
    loading: boolean,
    error: string | null
}
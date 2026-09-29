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

//car detail
export type CarDetailResponse ={
    bodyType:string,
    brandId: number,
    brandName: string,
    //carFeatures
    carFeatures: DetailCarFeaturesType[]
    chassisNumber:string,
    color:string,
    colorId:number,
    colorName:string,
    createdAt: string,
    distance: number,
    //endTripAvailableCities
    endTripAvailableCities: DetailEndTripAvailableCities[]
    engineCapacity: number,
    engineUnit: string,
    engineVolume: string,
    freeFuel: boolean,
    freeInsurance: boolean,
    freeParking: boolean,
    fuelLevel: number,
    fuelPercentage: number,
    fuelTankCapacity: number,
    fuelType: string,
    fuelTypeId: number,
    fuelTypeName: string,
    hasCarplay: boolean,
    id: number,
    imageUrl: string,
    imei: string,
    //includedGasStations
    includedGasStations: DetailIncludedGasStations[]
    //includedParkingZones
    includedParkingZones: DetailIncludedParkingZones[]
    insurance: boolean,
    isActive: boolean,
    isUsable: boolean,
    keylessEntry: boolean,
    //location
    location: DetailCarLocation
    locationId:number,
    locationMapUrl: string,
    manufactureYear: number,
    maxSpeed: number,
    mediumUrl: string,
    model: string,
    modelId: number,
    modelName: string,
    plateNumber:string,
    price: number,
    seats: number,
    tariffPackageId: number,
    tarsVehicleDid: string | null,
    thumbnailUrl: string,
    transmission: number,
    year: number
}

type DetailCarFeaturesType = {
    icon: string | null,
    id: number,
    name: string
}

type DetailEndTripAvailableCities = {
    id: number,
    name: string
}

type DetailIncludedGasStations = {
    brand: string, 
    createdAt: string,
    id: number,
    latitude: number,
    longitude: number,
    name: string
}

type DetailIncludedParkingZones = {
    createdAt: string, 
    id: number,
    isFree: boolean,
    latitude: number,
    longitude: number,
    name: string,
    radiusMeters: number
}

type DetailCarLocation = {
    address: string,
    city: string,
    latitude: number,
    longitude: number
}
//for redux 

export type CarsState = { 
    error: string | null,
    loading: boolean,
    cars: CarsResponse | null
    car: CarDetailResponse | null
}

export type CarsQueryParams = {
   page?: number
   pageSize?: number
   search? :string
   sortBy? :string
   sortOrder?: "asc" | "desc"
}
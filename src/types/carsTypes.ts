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
export type CarDetailResponse = {
    bodyType: string,
    brandId: number,
    brandName: string,
    //carFeatures
    carFeatures: DetailCarFeaturesType[]
    chassisNumber: string,
    color: string,
    colorId: number,
    colorName: string,
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
    locationId: number,
    locationMapUrl: string,
    manufactureYear: number,
    maxSpeed: number,
    mediumUrl: string,
    model: string,
    modelId: number,
    modelName: string,
    plateNumber: string,
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


//create car type
export type CreateCarData = {
    brandId: number
    modelId?: number
    colorId?: number
    fuelTypeId?: number
    manufactureYear?: number
    engineCapacity?: number
    engineUnit?: string
    transmission?: number
    maxSpeed?: number
    distance?: number
    plateNumber?: string
    chassisNumber?: string
    imei?: string
    latitude?: number
    longitude?: number
    address?: string
    city?: string
    carFeatureIds?: number[]
    count?: number
}

//update car type
export type UpdateCarData = {
    brandId?: number
    modelId?: number
    colorId?: number
    fuelTypeId?: number
    manufactureYear?: number
    engineCapacity?: number
    engineUnit?: string
    distance?: number
    maxSpeed?: number
    transmission?: number
    plateNumber?: string
    chassisNumber?: string
    freeInsurance?: boolean
    fuelTankCapacity?: number
}

//car form data (update, add cars)
export type CarFormData = CreateCarData & {
    freeInsurance?: boolean
    fuelTankCapacity?: number
}

//brands
export type BrandType = {
    id: number
    name: string
    isActive: boolean
    carCount: number
    createdAt: string
    logoUrl: string
    mediumUrl: string
    thumbnailUrl: string
}

export type BrandsResponse = {
    data: BrandType[]
    total: number
    page: number
    pageSize: number
}

//car model 
export type CarModelType = {
    id: number
    brandId: number
    name: string
    seats: number
    maxSpeed: number
    bodyType: {
        id: number
        name: string
    }
    createdAt: string
}

//brand color
export type BrandColorType = {
    id: number
    brandId: number
    name: string
    code: string
    hexCode: string
    createdAt: string
}

//fuel type 
export type FuelType = {
    id: number
    name: string
    createdAt: string
}

//get city
export type CityType = {
    id: number
    name: string
    countryId: number
}

//car features
export type CarFeatureType = {
    id: number
    name: string
    icon: string | null
}
//for redux 

export type CarsState = {
    error: string | null,
    loading: boolean,
    cars: CarsResponse | null
    car: CarDetailResponse | null,
    brands: BrandsResponse | null,
    models: CarModelType[],
    colors: BrandColorType[],
    fuelTypes: FuelType[],
    cities: CityType[],
    carFeatures: CarFeatureType[],
    lookupsLoading: boolean, //models, fuel types (selectler ucun)
    lookupsError: string | null
}

export type CarsQueryParams = {
    page?: number
    pageSize?: number
    search?: string
    sortBy?: string
    sortOrder?: "asc" | "desc" | ""
}
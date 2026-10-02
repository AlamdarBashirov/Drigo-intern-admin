import styles from './CarsDetail.module.scss'
import { useDispatch, useSelector } from "react-redux"
import { type AppDispatch, type RootState } from "../../../redux/store"
import { useEffect } from "react"
import { GetCarByIdThunk } from "../../../redux/reducers/carsSlice"
import { useNavigate, useParams } from "react-router-dom"

const CarsDetail = () => {
    //id ye gore melumatlar cekilecek tariflerde api varsa

    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()
    const { id } = useParams()
    const carId = Number(id)

    const { car, loading, error } = useSelector((state: RootState) => state.cars)

    useEffect(() => {
        dispatch(GetCarByIdThunk(carId))
    }, [])

    console.log(car);

    return (
        <>
            <div className={styles.carDetailPage}>
                <div className={styles.carDetailContainer}>
                    <div className={styles.carDetailActions}>
                        <button
                            className={styles.editButton}
                            onClick={() => navigate(`/cars/${car?.id}/edit`)}
                        >
                            Edit Car
                        </button>
                    </div>
                    <div className={styles.Overview}>
                        <div className={styles.carImage}>
                            <img src={car?.imageUrl} alt={car?.brandName} />
                        </div>
                        <div className={styles.Summary}>
                            <h2>{car?.brandName} {car?.modelName} <span>{car?.bodyType}</span></h2>
                            <span>Price: {car?.price} AED</span>
                            <div className={styles.specifications}>
                                <h3>Spesifications</h3>
                                <div className={styles.spesificationsContainer}>
                                    <span>Transmisson: {car?.transmission === 0 ? "Automatic" : "Manual"}</span>
                                    <span>Color: {car?.colorName}</span>
                                    <span>Car Type: {car?.bodyType}</span>
                                    <span>Plate Number: {car?.plateNumber}</span>
                                    <span>Seats: {car?.seats}</span>
                                    <span>Year: {car?.year}</span>
                                    <span>Engine: {car?.engineVolume}</span>
                                    <span>Fuel Type: {car?.fuelType}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.allDetails}>
                        <h3>All Details</h3>

                        <div className={styles.detailGroup}>
                            <h4>Basic Information</h4>
                            <div className={styles.detailGroupContainer}>
                                <span>ID: {car?.id}</span>
                                <span>Brand ID: {car?.brandId}</span>
                                <span>Brand: {car?.brandName}</span>
                                <span>Model ID: {car?.modelId}</span>
                                <span>Model: {car?.model}</span>
                                <span>Model Name: {car?.modelName}</span>
                                <span>Body Type: {car?.bodyType}</span>
                                <span>Manufacture Year: {car?.manufactureYear}</span>
                                <span>Year: {car?.year}</span>
                                <span>Color ID: {car?.colorId}</span>
                                <span>Color: {car?.color}</span>
                                <span>Color Name: {car?.colorName}</span>
                                <span>Plate Number: {car?.plateNumber}</span>
                                <span>Chassis Number: {car?.chassisNumber}</span>
                                <span>Seats: {car?.seats}</span>
                                <span>Price: {car?.price}</span>
                                <span>
                                    Created At: {car?.createdAt ? new Date(car.createdAt).toLocaleString() : "time not recorded"}
                                </span>
                            </div>
                        </div>

                        <div className={styles.detailGroup}>
                            <h4>Technical Specifications</h4>
                            <div className={styles.detailGroupContainer}>
                                <span>
                                    Transmission: {car?.transmission === 0 ? "Automatic" : "Manual"}
                                </span>
                                <span>Engine Capacity: {car?.engineCapacity}</span>
                                <span>Engine Unit: {car?.engineUnit}</span>
                                <span>Engine Volume: {car?.engineVolume}</span>
                                <span>Max Speed: {car?.maxSpeed} km/h</span>
                                <span>Distance: {car?.distance.toFixed(2)} km</span>
                            </div>
                        </div>

                        <div className={styles.detailGroup}>
                            <h4>Fuel Information</h4>
                            <div className={styles.detailGroupContainer}>
                                <span>Fuel Type ID: {car?.fuelTypeId}</span>
                                <span>Fuel Type: {car?.fuelType}</span>
                                <span>Fuel Type Name: {car?.fuelTypeName}</span>
                                <span>Fuel Level: {car?.fuelLevel.toFixed(2)}%</span>
                                <span>Fuel Percentage: {car?.fuelPercentage.toFixed(2)}%</span>
                                <span>Fuel Tank Capacity: {car?.fuelTankCapacity}</span>
                                <span>Free Fuel: {car?.freeFuel ? "Yes" : "No"}</span>
                            </div>
                        </div>

                        <div className={styles.detailGroup}>
                            <h4>Status</h4>
                            <div className={styles.detailGroupContainer}>
                                <span>Active: {car?.isActive ? "Yes" : "No"}</span>
                                <span>Usable: {car?.isUsable ? "Yes" : "No"}</span>
                                <span>Insurance: {car?.insurance ? "Yes" : "No"}</span>
                                <span>
                                    Free Insurance: {car?.freeInsurance ? "Yes" : "No"}
                                </span>
                                <span>Free Parking: {car?.freeParking ? "Yes" : "No"}</span>
                            </div>
                        </div>

                        <div className={styles.detailGroup}>
                            <h4>Features</h4>
                            <div className={styles.detailGroupContainer}>
                                <span>CarPlay: {car?.hasCarplay ? "Yes" : "No"}</span>
                                <span>
                                    Keyless Entry: {car?.keylessEntry ? "Yes" : "No"}
                                </span>
                                <div className={styles.featuresList}>
                                    <h5>Car Features</h5>
                                    {car?.carFeatures?.length ? (
                                        car.carFeatures.map((feature) => (
                                            <div
                                                className={styles.featureItem}
                                                key={feature.id}
                                            >
                                                <span>ID: {feature.id}</span>
                                                <span>Name: {feature.name}</span>
                                                {feature.icon && <span>Icon: {feature.icon}</span>}
                                            </div>
                                        ))
                                    ) : (
                                        <span>No car features</span>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className={styles.detailGroup}>
                            <h4>Device Information</h4>
                            <div className={styles.detailGroupContainer}>
                                <span>IMEI: {car?.imei}</span>
                                <span>
                                    TARS Vehicle DID: {car?.tarsVehicleDid || "Not connected="}
                                </span>
                            </div>
                        </div>

                        <div className={styles.detailGroup}>
                            <h4>Tariff Information</h4>
                            <div className={styles.detailGroupContainer}>
                                <span>Tariff Package ID: {car?.tariffPackageId}</span>
                            </div>
                        </div>

                        <div className={styles.locationDetails}>
                            <h4>Current Location</h4>
                            <div className={styles.detailGroupContainer}>
                                <span>Location ID: {car?.locationId}</span>
                                <span>City: {car?.location.city}</span>
                                <span>Address: {car?.location.address}</span>
                                <span>Latitude: {car?.location.latitude}</span>
                                <span>Longitude: {car?.location.longitude}</span>
                                <span>
                                    Map URL:
                                    {car?.locationMapUrl ? (
                                        <a
                                            href={car.locationMapUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Open in Google Maps
                                        </a>
                                    ) : (
                                        "There is no location"
                                    )}
                                </span>
                                {car?.location && (
                                    <iframe
                                        src={`https://maps.google.com/maps?q=${car.location.latitude},${car.location.longitude}&z=15&output=embed`}
                                        width="100%"
                                        height="250"
                                        loading="lazy"
                                        title="Car Location"
                                    />
                                )}
                            </div>
                        </div>

                        <div className={styles.detailGroup}>
                            <h4>End Trip Available Cities</h4>
                            <div className={styles.detailGroupContainer}>
                                {car?.endTripAvailableCities?.length ? (
                                    car.endTripAvailableCities.map((city) => (
                                        <div
                                            className={styles.cityItem}
                                            key={city.id}
                                        >
                                            <span>ID: {city.id}</span>
                                            <span>Name: {city.name}</span>
                                        </div>
                                    ))
                                ) : (
                                    <span>No available cities</span>
                                )}
                            </div>
                        </div>

                        <div className={styles.detailGroup}>
                            <h4>Included Parking Zones</h4>
                            <div className={styles.detailGroupContainer}>
                                {car?.includedParkingZones?.length ? (
                                    <div className={styles.parkingZones}>
                                        {car.includedParkingZones.map((zone) => (
                                            <div
                                                className={styles.parkingZone}
                                                key={zone.id}
                                            >
                                                <h5>{zone.name}</h5>
                                                <span>ID: {zone.id}</span>
                                                <span>Name: {zone.name}</span>
                                                <span>
                                                    Type: {zone.isFree ? "Free" : "Paid"}
                                                </span>
                                                <span>
                                                    Radius: {zone.radiusMeters} m
                                                </span>
                                                <span>Latitude: {zone.latitude}</span>
                                                <span>Longitude: {zone.longitude}</span>
                                                <span>
                                                    Created At: {new Date(zone.createdAt).toLocaleString()}
                                                </span>

                                                <iframe
                                                    src={`https://maps.google.com/maps?q=${zone.latitude},${zone.longitude}&z=15&output=embed`}
                                                    width="100%"
                                                    height="200"
                                                    loading="lazy"
                                                    title={`${zone.name} Location`}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <span>No included parking zones</span>
                                )}
                            </div>
                        </div>

                        <div className={styles.detailGroup}>
                            <h4>Included Gas Stations</h4>
                            <div className={styles.detailGroupContainer}>
                                {car?.includedGasStations?.length ? (
                                    <div className={styles.gasStations}>
                                        {car.includedGasStations.map((station) => (
                                            <div
                                                className={styles.gasStation}
                                                key={station.id}
                                            >
                                                <h5>{station.name}</h5>
                                                <span>ID: {station.id}</span>
                                                <span>Name: {station.name}</span>
                                                <span>Brand: {station.brand}</span>
                                                <span>
                                                    Latitude: {station.latitude}
                                                </span>
                                                <span>
                                                    Longitude: {station.longitude}
                                                </span>
                                                <span>
                                                    Created At:{new Date(station.createdAt).toLocaleString()}
                                                </span>

                                                <iframe
                                                    src={`https://maps.google.com/maps?q=${station.latitude},${station.longitude}&z=15&output=embed`}
                                                    width="100%"
                                                    height="200"
                                                    loading="lazy"
                                                    title={`${station.name} Location`}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <span>No included gas stations</span>
                                )}
                            </div>
                        </div>

                    </div>
                </div>
            </div >
        </>
    )
}

export default CarsDetail
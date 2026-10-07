import { useDispatch, useSelector } from 'react-redux'
import styles from './RentalRoutes.module.scss'
import type { AppDispatch, RootState } from '../../../../redux/store'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { GetRentalRoutesThunk } from '../../../../redux/reducers/rentalsSlice'
import { MapContainer, TileLayer, Polyline, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const RentalRoutes = () => {
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()
    const { id } = useParams()
    const rentalId = Number(id)

    const { rentalRoute, routeLoading, routeError } = useSelector((state: RootState) => state.rentals)

    useEffect(() => {
        dispatch(GetRentalRoutesThunk(rentalId))
    }, [])

    const routePositions: [number, number][] = rentalRoute
        ? rentalRoute.coordinates.map((coordinate) => [
            coordinate.latitude,
            coordinate.longitude
        ])
        : []

    if (!rentalRoute) {
        return null
    }
    return (
        <>
            {rentalRoute && rentalRoute.coordinates.length > 0 && (
                <div className={styles.routeDetailPage}>
                    <div className={styles.routeDetailContainer}>
                        <div className={styles.routeDetailActions}>
                            <button
                                className={styles.backButton}
                                onClick={() => navigate(`/rentals/${rentalId}`)}
                            >
                                Back to Rental
                            </button>
                        </div>

                        <div className={styles.Overview}>
                            <div className={styles.routeMain}>
                                <h2>Rental #{rentalRoute.rentalId} Route</h2>

                                <div className={styles.mainInformation}>
                                    <span>
                                        Distance: {rentalRoute.distance} km
                                    </span>

                                    <span>
                                        Route Points: {rentalRoute.coordinates.length}
                                    </span>
                                </div>
                            </div>

                            <div className={styles.Summary}>
                                <h3>Route Summary</h3>

                                <span>
                                    Start: {rentalRoute.coordinates[0].latitude},{" "}
                                    {rentalRoute.coordinates[0].longitude}
                                </span>

                                <span>
                                    End: {rentalRoute.coordinates[rentalRoute.coordinates.length - 1].latitude},{" "}
                                    {rentalRoute.coordinates[rentalRoute.coordinates.length - 1].longitude}
                                </span>

                                <span>
                                    Started At:{" "}
                                    {new Date(rentalRoute.coordinates[0].at).toLocaleString()}
                                </span>

                                <span>
                                    Ended At:{" "}
                                    {new Date(
                                        rentalRoute.coordinates[rentalRoute.coordinates.length - 1].at
                                    ).toLocaleString()}
                                </span>
                            </div>
                        </div>

                        <div className={styles.allDetails}>
                            <h3>Route Details</h3>

                            <div className={styles.locationDetails}>
                                <h4>Route Map</h4>

                                <div className={styles.mapContainer}>
                                    <MapContainer
                                        center={[
                                            rentalRoute.coordinates[0].latitude,
                                            rentalRoute.coordinates[0].longitude
                                        ]}
                                        zoom={13}
                                        className={styles.map}
                                    >
                                        <TileLayer
                                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                        />

                                        <Polyline
                                            positions={rentalRoute.coordinates.map((coordinate) => [
                                                coordinate.latitude,
                                                coordinate.longitude
                                            ])}
                                        />

                                        <Marker
                                            position={[
                                                rentalRoute.coordinates[0].latitude,
                                                rentalRoute.coordinates[0].longitude
                                            ]}
                                        >
                                            <Popup>
                                                Start Location
                                            </Popup>
                                        </Marker>

                                        <Marker
                                            position={[
                                                rentalRoute.coordinates[rentalRoute.coordinates.length - 1].latitude,
                                                rentalRoute.coordinates[rentalRoute.coordinates.length - 1].longitude
                                            ]}
                                        >
                                            <Popup>
                                                End Location
                                            </Popup>
                                        </Marker>
                                    </MapContainer>
                                </div>
                            </div>

                            <div className={styles.detailGroup}>
                                <h4>Start Location</h4>

                                <div className={styles.detailGroupContainer}>
                                    <span>
                                        Latitude: {rentalRoute.coordinates[0].latitude}
                                    </span>

                                    <span>
                                        Longitude: {rentalRoute.coordinates[0].longitude}
                                    </span>

                                    <span>
                                        Time: {new Date(
                                            rentalRoute.coordinates[0].at
                                        ).toLocaleString()}
                                    </span>
                                </div>
                            </div>

                            <div className={styles.detailGroup}>
                                <h4>End Location</h4>

                                <div className={styles.detailGroupContainer}>
                                    <span>
                                        Latitude: {
                                            rentalRoute.coordinates[rentalRoute.coordinates.length - 1].latitude
                                        }
                                    </span>

                                    <span>
                                        Longitude: {
                                            rentalRoute.coordinates[rentalRoute.coordinates.length - 1].longitude
                                        }
                                    </span>

                                    <span>
                                        Time: {new Date(
                                            rentalRoute.coordinates[rentalRoute.coordinates.length - 1].at
                                        ).toLocaleString()}
                                    </span>
                                </div>
                            </div>

                            <div className={styles.detailGroup}>
                                <h4>Coordinate History</h4>

                                <div className={styles.coordinatesContainer}>
                                    {rentalRoute.coordinates.map((coordinate, index) => (
                                        <div
                                            className={styles.coordinateItem}
                                            key={index}
                                        >
                                            <h5>Point #{index + 1}</h5>

                                            <span>
                                                Latitude: {coordinate.latitude}
                                            </span>

                                            <span>
                                                Longitude: {coordinate.longitude}
                                            </span>

                                            <span>
                                                Time: {new Date(coordinate.at).toLocaleString()}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default RentalRoutes
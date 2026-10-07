import { useDispatch, useSelector } from 'react-redux'
import styles from './RentalDetails.module.scss'
import type { AppDispatch, RootState } from '../../../redux/store'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { GetRentalByIdThunk } from '../../../redux/reducers/rentalsSlice'
import { GetRentalPayment, GetRentalRoute } from '../../../api/rentalsApi'

const RentalDetails = () => {
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()
    const { id } = useParams()
    const rentalId = Number(id)

    const { rental, error, loading } = useSelector((state: RootState) => state.rentals)

    useEffect(() => {
        dispatch(GetRentalByIdThunk(rentalId))
    }, [])

    if (loading) return <div>Loading...</div>
    if (error) return <div>{error}</div>
    if (!rental) return null

    return (
        <>
            <div className={styles.rentalDetailPage}>
                <div className={styles.rentalDetailContainer}>
                    <div className={styles.rentalDetailActions}>
                        <button
                            className={styles.backButton}
                            onClick={() => navigate('/rentals')}
                        >
                            Back to Rentals
                        </button>
                    </div>

                    <div className={styles.Overview}>
                        <div className={styles.rentalMain}>
                            <h2>Rental #{rental.id}</h2>
                            <span>{rental.status}</span>
                            <div className={styles.mainInformation}>
                                <span>Total Price: {rental.totalPrice} AED</span>
                                <span>Total Distance: {rental.totalDistance} km</span>
                                <span>Total Debt: {rental.totalDebt} AED</span>
                                <span>Current Period: {rental.currentPeriod}</span>
                            </div>
                        </div>

                        <div className={styles.Summary}>
                            <h3>Rental Period</h3>
                            <span>
                                Start Date: {new Date(rental.startDate).toLocaleString()}
                            </span>
                            <span>
                                End Date: {rental.endDate
                                    ? new Date(rental.endDate).toLocaleString()
                                    : "Not ended"}
                            </span>
                            <span>
                                Created At: {new Date(rental.createdAt).toLocaleString()}
                            </span>
                            <span>
                                Updated At: {new Date(rental.updatedAt).toLocaleString()}
                            </span>
                        </div>
                    </div>

                    <div className={styles.allDetails}>
                        <h3>All Details</h3>

                        <div className={styles.detailGroup}>
                            <h4>Customer Information</h4>
                            <div className={styles.detailGroupContainer}>
                                <span>Full Name: {rental.user.fullName}</span>
                                <span>Phone Number: {rental.user.phoneNumber || "Not recorded"}</span>
                                <span>Email: {rental.user.email || "Not recorded"}</span>
                                <span>Bonus Balance: {rental.customerBonusBalance}</span>
                                <span>Bonus Used: {rental.bonusUsed}</span>
                                <span>Bonus Earned: {rental.bonusEarned}</span>
                            </div>
                        </div>

                        <div className={styles.detailGroup}>
                            <h4>Car Information</h4>
                            <div className={styles.detailGroupContainer}>
                                <span>ID: {rental.car.id || "Not recorded"}</span>
                                <span>Brand: {rental.car.brand || "Not recorded"}</span>
                                <span>Model: {rental.car.model || "Not recorded"}</span>
                                <span>Color: {rental.car.color || "Not recorded"}</span>
                                <span>Plate Number: {rental.car.plateNumber || "Not recorded"}</span>
                                <span>Fuel Type: {rental.car.fuelType || "Not recorded"}</span>
                                <span>Year: {rental.car.year || "Not recorded"}</span>
                            </div>
                        </div>

                        <div className={styles.detailGroup}>
                            <h4>Tariff Information</h4>
                            <div className={styles.detailGroupContainer}>
                                <span>ID: {rental.tariff.id}</span>
                                <span>Package: {rental.tariff.packageName}</span>
                                <span>Active Price: {rental.tariff.activePrice} AED</span>
                                <span>Included Distance: {rental.tariff.includedDistance} km</span>
                                <span>Time Unit: {rental.tariff.timeUnit}</span>
                                <span>Unit Count: {rental.tariff.unitCount}</span>
                            </div>
                        </div>

                        <div className={styles.detailGroup}>
                            <h4>Insurance Information</h4>
                            <div className={styles.detailGroupContainer}>
                                <span>ID: {rental.insurance.id}</span>
                                <span>Name: {rental.insurance.name}</span>
                                <span>Daily Price: {rental.insurance.dailyPrice} AED</span>
                                <span>Deductible: {rental.insurance.deductible} AED</span>
                            </div>
                        </div>

                        <div className={styles.detailGroup}>
                            <h4>Payment Information  <span className={styles.navigateLink} onClick={() => navigate(`/rentals/${rentalId}/payments`)}>View More</span></h4>
                            <div className={styles.detailGroupContainer}>
                                <span>Total Price: {rental.totalPrice} AED</span>
                                <span>Total Debt: {rental.totalDebt} AED</span>
                                <span>Discount Amount: {rental.discountAmount} AED</span>
                                <span>Discount: {rental.discountName || "No discount"}</span>
                                <span>Use Bonus: {rental.useBonus ? "Yes" : "No"}</span>
                                <span>Bonus Used: {rental.bonusUsed}</span>
                                <span>Bonus Earned: {rental.bonusEarned}</span>
                                <span>
                                    Last Payment: {rental.lastPaymentAt
                                        ? new Date(rental.lastPaymentAt).toLocaleString()
                                        : "Not recorded"}
                                </span>
                            </div>
                        </div>

                        <div className={styles.detailGroup}>
                            <h4>Next Payment Information</h4>
                            <div className={styles.detailGroupContainer}>
                                <span>Base Amount: {rental.nextPaymentBaseAmount ?? "Not recorded"}</span>
                                <span>Bonus Amount: {rental.nextPaymentBonusAmount ?? "Not recorded"}</span>
                                <span>Bundled Debts: {rental.nextPaymentBundledDebts ?? "Not recorded"}</span>
                                <span>Discount Amount: {rental.nextPaymentDiscountAmount ?? "Not recorded"}</span>
                                <span>Overage Amount: {rental.nextPaymentOverageAmount ?? "Not recorded"}</span>
                                <span>Service Fee: {rental.nextPaymentServiceFee ?? "Not recorded"}</span>
                                <span>Trip Fee: {rental.nextPaymentTripFee ?? "Not recorded"}</span>
                                <span>Total: {rental.nextPaymentTotal ?? "Not recorded"}</span>
                                <span>
                                    Due: {rental.nextPaymentDue
                                        ? new Date(rental.nextPaymentDue).toLocaleString()
                                        : "Not recorded"}
                                </span>
                            </div>
                        </div>

                        {rental.paymentRetryState && (
                            <div className={styles.detailGroup}>
                                <h4>Payment Retry</h4>
                                <div className={styles.detailGroupContainer}>
                                    <span>Attempts: {rental.paymentRetryState.attempts}</span>
                                    <span>Amount Due: {rental.paymentRetryState.amountDue} AED</span>
                                    <span>Last Error: {rental.paymentRetryState.lastError}</span>
                                    <span>
                                        Next Retry: {new Date(rental.paymentRetryState.nextRetryAt).toLocaleString()}
                                    </span>
                                </div>
                            </div>
                        )}

                        <div className={styles.detailGroup}>
                            <h4>Distance Information</h4>
                            <div className={styles.detailGroupContainer}>
                                <span>Total Distance: {rental.totalDistance} km</span>
                                <span>Distance Used This Period: {rental.distanceUsedThisPeriod} km</span>
                                <span>Purchased Distance This Period: {rental.purchasedDistanceThisPeriod} km</span>
                                <span>Purchased Distance Total: {rental.purchasedDistanceTotal} km</span>
                                <span>Compensation Distance This Period: {rental.compensationDistanceThisPeriod} km</span>
                                <span>Compensation Distance Total: {rental.compensationDistanceTotal} km</span>
                            </div>
                        </div>

                        <div className={styles.detailGroup}>
                            <h4>Rental Status Information</h4>
                            <div className={styles.detailGroupContainer}>
                                <span>Status: {rental.status}</span>
                                <span>Accident: {rental.hasAccident ? "Yes" : "No"}</span>
                                <span>Monthly Subscription: {rental.isMonthlySubscription ? "Yes" : "No"}</span>
                                <span>Package Expired: {rental.isPackageExpired ? "Yes" : "No"}</span>
                                <span>Cancel Reason: {rental.cancelReason || "No cancel reason"}</span>
                                <span>Problem Note: {rental.problemNote || "No problem"}</span>
                                <span>Car Service ID: {rental.carServiceId ?? "Not recorded"}</span>
                            </div>
                        </div>

                        <div className={styles.detailGroup}>
                            <h4>Package Information</h4>
                            <div className={styles.detailGroupContainer}>
                                <span>Current Period: {rental.currentPeriod}</span>
                                <span>
                                    Package Start Date: {rental.packageStartDate
                                        ? new Date(rental.packageStartDate).toLocaleString()
                                        : "Not recorded"}
                                </span>
                                <span>
                                    Free Time End: {rental.freeTimeEnd
                                        ? new Date(rental.freeTimeEnd).toLocaleString()
                                        : "Not recorded"}
                                </span>
                                <span>
                                    Payment Grace Period: {rental.paymentGracePeriodUntil
                                        ? new Date(rental.paymentGracePeriodUntil).toLocaleString()
                                        : "Not recorded"}
                                </span>
                            </div>
                        </div>

                        <div className={styles.locationDetails}>
                            <h4>Route Information <span className={styles.navigateLink} onClick={() => navigate(`/rentals/${rentalId}/routes`)}>View More</span></h4>
                            <div className={styles.detailGroupContainer}>
                                <span>Distance: {rental.route.distance} km</span>
                                <span>Start Latitude: {rental.route.startLatitude}</span>
                                <span>Start Longitude: {rental.route.startLongitude}</span>
                                <span>End Latitude: {rental.route.endLatitude ?? "Not recorded"}</span>
                                <span>End Longitude: {rental.route.endLongitude ?? "Not recorded"}</span>

                                <iframe
                                    src={`https://maps.google.com/maps?q=${rental.route.startLatitude},${rental.route.startLongitude}&z=13&output=embed`}
                                    width="100%"
                                    height="300"
                                    loading="lazy"
                                    title="Rental Route"
                                />
                            </div>
                        </div>

                        <div className={styles.locationDetails}>
                            <h4>End Location</h4>
                            <div className={styles.detailGroupContainer}>
                                {rental.userEndLocation ? (
                                    <>
                                        <span>Latitude: {rental.userEndLocation.latitude}</span>
                                        <span>Longitude: {rental.userEndLocation.longitude}</span>

                                        <iframe
                                            src={`https://maps.google.com/maps?q=${rental.userEndLocation.latitude},${rental.userEndLocation.longitude}&z=15&output=embed`}
                                            width="100%"
                                            height="250"
                                            loading="lazy"
                                            title="Rental End Location"
                                        />
                                    </>
                                ) : (
                                    <span>End location not recorded</span>
                                )}
                            </div>
                        </div>

                        <div className={styles.detailGroup}>
                            <h4>Car Segments</h4>
                            <div className={styles.detailGroupContainer}>
                                {rental.carSegments.length ? (
                                    <div className={styles.itemsList}>
                                        {rental.carSegments.map((segment, index) => (
                                            <div className={styles.item} key={index}>
                                                <span>Car ID: {segment.carId}</span>
                                                <span>Plate Number: {segment.plateNumber}</span>
                                                <span>From: {new Date(segment.from).toLocaleString()}</span>
                                                <span>
                                                    To: {segment.to
                                                        ? new Date(segment.to).toLocaleString()
                                                        : "Current"}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <span>No car segments</span>
                                )}
                            </div>
                        </div>

                        <div className={styles.detailGroup}>
                            <h4>Debts</h4>
                            <div className={styles.detailGroupContainer}>
                                {rental.debts.length ? (
                                    <div className={styles.itemsList}>
                                        {rental.debts.map((debt) => (
                                            <div className={styles.item} key={debt.id}>
                                                <span>ID: {debt.id}</span>
                                                <span>Type: {debt.type}</span>
                                                <span>Amount: {debt.amount} {debt.currency}</span>
                                                <span>Paid: {debt.isPaid ? "Yes" : "No"}</span>
                                                <span>Description: {debt.description}</span>
                                                <span>Created At: {new Date(debt.createdAt).toLocaleString()}</span>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <span>No debts</span>
                                )}
                            </div>
                        </div>

                        <div className={styles.detailGroup}>
                            <h4>Action History</h4>
                            <div className={styles.detailGroupContainer}>
                                {rental.actionHistory.length ? (
                                    <div className={styles.itemsList}>
                                        {rental.actionHistory.map((action) => (
                                            <div className={styles.item} key={action.id}>
                                                <span>Action: {action.action}</span>
                                                <span>By: {action.by}</span>
                                                <span>At: {new Date(action.at).toLocaleString()}</span>
                                                <span>Note: {action.note || "No note"}</span>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <span>No action history</span>
                                )}
                            </div>
                        </div>

                        <div className={styles.detailGroup}>
                            <h4>Start Photos</h4>
                            <div className={styles.photosContainer}>
                                {rental.startPhotoUrls.length ? (
                                    rental.startPhotoUrls.map((photo, index) => (
                                        <img
                                            src={photo}
                                            alt={`Rental start ${index + 1}`}
                                            key={photo}
                                        />
                                    ))
                                ) : (
                                    <span>No start photos</span>
                                )}
                            </div>
                        </div>

                        <div className={styles.detailGroup}>
                            <h4>End Photos</h4>
                            <div className={styles.photosContainer}>
                                {rental.endPhotoUrls.length ? (
                                    rental.endPhotoUrls.map((photo, index) => (
                                        <img
                                            src={photo}
                                            alt={`Rental end ${index + 1}`}
                                            key={photo}
                                        />
                                    ))
                                ) : (
                                    <span>No end photos</span>
                                )}
                            </div>
                        </div>

                        <div className={styles.detailGroup}>
                            <h4>User Rental History</h4>
                            <div className={styles.detailGroupContainer}>
                                {rental.userRentalHistory.length ? (
                                    <div className={styles.itemsList}>
                                        {rental.userRentalHistory.map((history) => (
                                            <div className={styles.item} key={history.id}>
                                                <span>Rental ID: {history.id}</span>
                                                <span>Status: {history.status}</span>
                                                <span>Start Date: {new Date(history.startDate).toLocaleString()}</span>
                                                <span>
                                                    End Date: {history.endDate
                                                        ? new Date(history.endDate).toLocaleString()
                                                        : "Not ended"}
                                                </span>
                                                <span>Total Price: {history.totalPrice} AED</span>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <span>No rental history</span>
                                )}
                            </div>
                        </div>

                        <div className={styles.detailGroup}>
                            <h4>TARS Information</h4>
                            <div className={styles.detailGroupContainer}>
                                <span>Contract DID: {rental.tarsContractDid || "Not recorded"}</span>
                                <span>Request ID: {rental.tarsRequestId ?? "Not recorded"}</span>
                                <span>Error: {rental.tarsError || "No error"}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RentalDetails
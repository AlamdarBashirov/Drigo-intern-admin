import { useDispatch, useSelector } from 'react-redux'
import styles from './RentalPaymentDetail.module.scss'
import {type AppDispatch, type RootState } from '../../../../redux/store'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { GetRentalPaymentInfoThunk } from '../../../../redux/reducers/rentalsSlice'
import { GetRentalPayment } from '../../../../api/rentalsApi'
const RentalPaymentDetail = () => {

    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()
    const { id } = useParams()
    const rentalId = Number(id)

    const { rentalPayment, paymentLoading, paymentError } = useSelector((state: RootState) => state.rentals)

    useEffect(() => {
        dispatch(GetRentalPaymentInfoThunk(rentalId))
    }, [])

    console.log(rentalPayment);
    

    if (!rentalPayment) {
        return null
    }
    return (
    <>
        {rentalPayment && (
            <div className={styles.paymentDetailPage}>
                <div className={styles.paymentDetailContainer}>
                    <div className={styles.paymentDetailActions}>
                        <button
                            className={styles.backButton}
                            onClick={() => navigate(`/rentals/${rentalId}`)}
                        >
                            Back to Rental
                        </button>
                    </div>

                    <div className={styles.allDetails}>
                        <h3>Rental Payments</h3>

                        {rentalPayment.map((payment) => (
                            <div className={styles.detailGroup} key={payment.id}>
                                <h4>Payment #{payment.id}</h4>

                                <div className={styles.detailGroupContainer}>
                                    <span>
                                        Amount: {payment.amount} {payment.currency}
                                    </span>

                                    <span>
                                        Service Fee: {payment.serviceFee} {payment.currency}
                                    </span>

                                    <span>Status: {payment.status}</span>

                                    <span>
                                        Transaction Type: {payment.transactionType}
                                    </span>

                                    <span>
                                        Final Payment: {payment.isFinalPayment ? "Yes" : "No"}
                                    </span>

                                    <span>
                                        Created At: {new Date(payment.createdAt).toLocaleString()}
                                    </span>

                                    <span>
                                        Period Start: {payment.periodStart
                                            ? new Date(payment.periodStart).toLocaleString()
                                            : "Not recorded"}
                                    </span>

                                    <span>
                                        Period End: {payment.periodEnd
                                            ? new Date(payment.periodEnd).toLocaleString()
                                            : "Not recorded"}
                                    </span>

                                    <span>
                                        Failure Reason: {payment.failureReason || "No failure"}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )}
    </>
)
}

export default RentalPaymentDetail
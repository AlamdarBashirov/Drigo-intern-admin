import styles from './KpiSection.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { type AppDispatch, type RootState } from '../../../../redux/store'
import { useEffect } from 'react'
import { GetDashboardKpisThunk } from '../../../../redux/reducers/dashboardSlice'
import KpiCard from '../../components/cards/kpiCard/KpiCard'
import Loading from '../../../../components/loading/Loading'

const KpiSection = () => {

    const dispatch = useDispatch<AppDispatch>()
    const { kpis, loading, error } = useSelector((state: RootState) => state.dashboard)

    useEffect(() => {
        dispatch(GetDashboardKpisThunk()).unwrap()
    }, [dispatch])

    if (!kpis) {
        return null
    }

    const kpiCards = [
        // Rentals & Reservations
        {
            title: "Active Rentals",
            value: kpis.activeRentals,
        },
        {
            title: "Active Reservations",
            value: kpis.activeReservations,
        },

        // Fleet & Drivers
        {
            title: "Total Cars",
            value: kpis.totalCars,
        },
        {
            title: "Online Drivers",
            value: kpis.onlineDrivers,
        },
        {
            title: "Total Delivery Drivers",
            value: kpis.totalDeliveryDrivers,
        },

        // Members
        {
            title: "Total Members",
            value: kpis.totalMembers,
        },
        {
            title: "Approved Members",
            value: kpis.approvedMembers,
        },
        {
            title: "Pending Verifications",
            value: kpis.pendingVerificationCount,
        },
        {
            title: "Average Verification Time",
            value: `${kpis.averageVerificationTimeHours} hrs`,
        },

        // Devices
        {
            title: "iOS Users",
            value: kpis.iosUsers,
        },
        {
            title: "Android Users",
            value: kpis.androidUsers,
        },

        // Support
        {
            title: "Open Support Tickets",
            value: kpis.openSupportTickets,
        },

        // Revenue
        {
            title: "Today's Revenue",
            value: `${kpis.todayRevenue.toLocaleString()} AED`,
        },
        {
            title: "Monthly Revenue",
            value: `${kpis.monthlyRevenue.toLocaleString()} AED`,
        },
        {
            title: "Total Revenue",
            value: `${kpis.totalRevenue.toLocaleString()} AED`,
        },
        {
            title: "Stripe Monthly Revenue",
            value: `${kpis.stripeMonthlyRevenue.toLocaleString()} AED`,
        },
        {
            title: "Stripe Total Revenue",
            value: `${kpis.stripeTotalRevenue.toLocaleString()} AED`,
        },
        // Debt
        {
            title: "Total Debt",
            value: `${kpis.totalDebt.toLocaleString()} AED`,
        },

        {
            title: "Customer Debt",
            value: `${kpis.totalDebtBreakdown.customer.toLocaleString()} AED`,
        },
        {
            title: "Company Debt",
            value: `${kpis.totalDebtBreakdown.company.toLocaleString()} AED`,
        },
    ];

    if (loading) {
        return <Loading/>
    }

    return (
        <div className={styles.kpiSection}>
            <div className={styles.kpiContainer}>
                {
                    kpiCards.map((item) => (
                        <KpiCard
                            title={item.title}
                            value={item.value}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default KpiSection
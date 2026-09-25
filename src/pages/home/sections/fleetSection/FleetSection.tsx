import { useDispatch, useSelector } from 'react-redux'
import styles from './FleetSection.module.scss'
import type { AppDispatch, RootState } from '../../../../redux/store'
import { useEffect } from 'react'
import { GetDashboardFleetThunk } from '../../../../redux/reducers/dashboardSlice'
import FleetCard from '../../components/cards/fleetCard/FleetCard'
import Loading from '../../../../components/loading/Loading'
import FleetChart from '../../components/charts/fleetChart/FleetChart'
const FleetSection = () => {
    const dispatch = useDispatch<AppDispatch>()
    const { fleet, loading, error } = useSelector((state: RootState) => state.dashboard)

    useEffect(() => {
        dispatch(GetDashboardFleetThunk()).unwrap()
    }, [])
    if (loading) return <Loading />

    if (!fleet) {
        return null
    }
    const fleetCards = [
        { title: "Total Cars", value: fleet?.total },
        { title: "Available", value: fleet?.available },
        { title: "Inactive", value: fleet?.inactive },
        { title: "Low Fuel", value: fleet?.lowFuel },
        { title: "Online", value: fleet?.online },
        { title: "Rented", value: fleet?.rented },
    ];


    return (
        <div className={styles.fleetSection}>
            <div className={styles.fleetContainer}>
                <h2>Fleet</h2>
                <div className={styles.fleetOverview}>
                    {
                        fleet && fleetCards.map((item) => (
                            <FleetCard
                                key={item.title}
                                value={item.value}
                                title={item.title}
                            />
                        ))
                    }
                </div>
                <FleetChart
                    title="Cars by City"
                    data={fleet.byCity}
                />
            </div>
        </div>
    )
}

export default FleetSection
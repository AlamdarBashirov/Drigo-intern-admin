import { useDispatch, useSelector } from 'react-redux'
import styles from './TrendsSection.module.scss'
import { type AppDispatch, type RootState } from '../../../../redux/store'
import { useEffect } from 'react'
import { GetDashboardTrendsThunk } from '../../../../redux/reducers/dashboardSlice'
import TrendChart from '../../components/charts/trendChart/TrendChart'
const TrendsSection = () => {
    const dispatch = useDispatch<AppDispatch>();

    const { trends } = useSelector(
        (state: RootState) => state.dashboard
    );

    useEffect(() => {
        dispatch(GetDashboardTrendsThunk());
    }, [dispatch]);

    if (!trends) return null;

    return (
        <div className={styles.trendsSection}>

            <div className={styles.trendsContainer}>
                <h2>Trends</h2>
                <TrendChart
                    dataKey='count'
                    title="Rental Trends"
                    data={trends.rentalTrends}
                />
                <TrendChart
                    dataKey='count'
                    title="Reservation Trends"
                    data={trends.reservationTrends}
                />
                <TrendChart
                    dataKey='count'
                    title="User Registration Trends"
                    data={trends.userRegistrationTrends}
                />
                <TrendChart
                    dataKey='revenue'
                    title="Revenue Trends"
                    data={trends.revenueTrends}
                />
            </div>
        </div>
    );
};

export default TrendsSection
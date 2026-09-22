import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "../../redux/store"
import { LogoutThunk } from "../../redux/reducers/authSlice"
import Loading from "../../components/loading/Loading"
import ConfirmModal from "../../components/modals/confirmModal/ConfirmModal"
import { useEffect, useState } from "react"
import { GetDashboardFleetThunk, GetDashboardKpisThunk, GetDashboardOnlineUsersThunk, GetDashboardRecentActivityThunk, GetDashboardTrendsThunk } from "../../redux/reducers/dashboardSlice"
import { GetDashboardFleet, GetDashboardOnlineUsers, GetDashboardRecentActivity, GetDashboardTrends } from "../../api/dashboardApi"

const Home = () => {
    const dispatch = useDispatch<AppDispatch>()

    const { loading, error, kpis, trends, fleet, onlineUsers, recentActivity } = useSelector((state: RootState) => state.dashboard)

    const logout = async () => {
        await dispatch(LogoutThunk()).unwrap()
    }
    // const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {
        dispatch(GetDashboardKpisThunk())
        dispatch(GetDashboardTrendsThunk())
        dispatch(GetDashboardFleetThunk())
        dispatch(GetDashboardOnlineUsersThunk())
        dispatch(GetDashboardRecentActivityThunk())
    }, [])

    if (loading) {
        return <Loading />
    }

    console.log(recentActivity);
    
    return (
        <>
            <div>
                {/* <h1>Home</h1> */}
                {/* <button onClick={logout}>Logout</button> */}
                {/* <ConfirmModal
                    isOpen={isOpen}
                    title="Delete Car"
                    onClose={() => setIsOpen(false)}
                    onConfirm={() => console.log("Confirmed")}
                >
                    Are you sure you want to delete this car?
                </ConfirmModal> */}


                {/* <span>{kpis?.activeRentals}</span>
                {trends?.rentalTrends.map((rentalItem) => (
                    <span>{rentalItem.date}</span>
                ))}
                {
                    fleet?.available
                }
                {onlineUsers?.map((user) => (
                    <span>fullname: {user.fullName}</span>
                ))} */}
                    {
                        recentActivity?.activity?.map((activity) => (
                            <span>{activity.refId}</span>
                        ))
                    }
                    {
                        recentActivity?.recentRentals.map((rental) => (
                            <span>car: {rental.car.brand} {rental.car.model}</span>
                        ))
                    }

            </div>
        </>
    )
}

export default Home
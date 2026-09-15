import { useSelector } from "react-redux"
import type { RootState } from "../../redux/store"
import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = () => {
    const {user, loading, error, initialized} = useSelector((state:RootState) => state.auth)
    if (loading) {
        return <div>Loading...</div>
    }
    if(initialized && !user){
        return <Navigate to="/login"/>
    }
  return (
    <Outlet/>
  )
}

export default ProtectedRoute
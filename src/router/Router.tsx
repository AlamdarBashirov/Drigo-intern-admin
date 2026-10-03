import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginPage from "../pages/auth/login/LoginPage"
import VerifyOtp from "../pages/auth/verify/VerifyOtp"
import ProtectedRoute from "../components/protectedRoute/ProtectedRoute"
import Home from "../pages/home/Home"
import AdminLayout from "../layout/adminLayout/AdminLayout"
import PermissionRoute from "../components/permissionRoute/PermissionRoute"
import Cars from "../pages/cars/Cars"
import CarsDetail from "../pages/details/carsDetail/CarsDetail"
import AddCars from "../pages/cars/addCars/AddCars"
import EditCars from "../pages/cars/editCars/EditCars"
import Rentals from "../pages/rentals/Rentals"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<ProtectedRoute />}>
                    <Route element={<AdminLayout />}>
                        <Route element={<PermissionRoute requiredPermission="dashboard.view" />}>
                            <Route path="/" element={<Home />} />
                        </Route>

                        {/* {Cars} */}
                        <Route element={<PermissionRoute requiredPermission="cars.view" />}>
                            <Route path="/cars" element={<Cars />} />
                        </Route>
                        <Route element={<PermissionRoute requiredPermission="cars.view" />}>
                            <Route path="/cars/:id" element={<CarsDetail />} />
                        </Route>
                        <Route element={<PermissionRoute requiredPermission="cars.create" />}>
                            <Route path="/cars/add" element={<AddCars />} />
                        </Route>
                        <Route element={<PermissionRoute requiredPermission="cars.edit" />}>
                            <Route path="/cars/:id/edit" element={<EditCars />} />
                        </Route>

                        {/* {Rentals} */}
                        <Route element={<PermissionRoute requiredPermission="rentals.view" />}>
                            <Route path="/rentals" element={<Rentals />} />
                        </Route>

                    </Route>
                </Route>
                <Route path="/login" element={<LoginPage />} />
                {/* <Route element={<PermissionRoute requiredPermission="reservations.view" />}> */}
                    <Route path="/verify-otp" element={<VerifyOtp />} />
                {/* </Route> */}
            </Routes>
        </BrowserRouter>
    )
}

export default Router
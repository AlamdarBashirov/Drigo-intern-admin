import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginPage from "../pages/auth/login/LoginPage"
import VerifyOtp from "../pages/auth/verify/VerifyOtp"
import ProtectedRoute from "../components/protectedRoute/ProtectedRoute"
import Home from "../pages/auth/home/Home"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<ProtectedRoute />}>
                    <Route path="/" element={<Home />} />
                </Route>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/verify-otp" element={<VerifyOtp />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginPage from "../pages/auth/login/LoginPage"
import VerifyOtp from "../pages/auth/verify/VerifyOtp"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/verify-otp" element={<VerifyOtp />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
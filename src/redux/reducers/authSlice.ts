import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCurrentUser, login, logout, verifyOtp, type LoginData, type VerifyOtpData } from "../../api/authApi";
import type { Admin, AuthState } from "../../types/authTypes";

export const LoginThunk = createAsyncThunk("auth/login", async (data: LoginData) => {
    const res = await login(data)
    return res
})

export const VerifyOtpThunk = createAsyncThunk("auth/verify", async (data: VerifyOtpData) => {
    const res = await verifyOtp(data)
    return res
})

export const GetCurrentUserThunk = createAsyncThunk("auth/me", async () => {
    const res = await getCurrentUser()
    console.log("user", res);
    
    return res
})

export const LogoutThunk = createAsyncThunk("auth/logout", async () => {
    const res = await logout()
    return res
})



const initialState: AuthState = {
    user: null,
    error: null,
    loading: false,
    initialized: false
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder

            //login thunk 
            .addCase(LoginThunk.fulfilled, (state, action) => {
                state.loading = false
                // state.user = action.payload
                state.error = null
            })
            .addCase(LoginThunk.pending, (state, action) => {
                state.loading = true
                state.error = null
            })
            .addCase(LoginThunk.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message || "Login failed"
            })

            //verify otp thunk
            .addCase(VerifyOtpThunk.fulfilled, (state, action) => {
                state.loading = false
                state.error = null
            })
            .addCase(VerifyOtpThunk.pending, (state, action) => {
                state.loading = true
                state.error = null
            })
            .addCase(VerifyOtpThunk.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message || "otp verify failed"
            })

            //get current user thunk
            .addCase(GetCurrentUserThunk.fulfilled, (state, action) => {
                state.loading = false
                state.user = action.payload
                state.error = null
                state.initialized = true
            })
            .addCase(GetCurrentUserThunk.pending, (state, action) => {
                state.loading = true
                state.error = null
                state.initialized = false
            })
            .addCase(GetCurrentUserThunk.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message || "Failed getting your profile"
                state.initialized = true
            })

            //logout thunk
            .addCase(LogoutThunk.fulfilled, (state, action) => {
                state.loading = false
                state.user = null
                state.error = null
            })
            .addCase(LogoutThunk.pending, (state, action) => {
                state.loading = true
                state.error = null
            })
            .addCase(LogoutThunk.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message || "Error during logout"
            })
});

export default authSlice.reducer
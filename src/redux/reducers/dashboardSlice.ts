import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetDashboardFleet, GetDashboardKpis, GetDashboardOnlineUsers, GetDashboardRecentActivity, GetDashboardTrends } from "../../api/dashboardApi";
import type { DashboardState } from "../../types/dashboardTypes";

export const GetDashboardKpisThunk = createAsyncThunk("dashboard/kpis", async () => {
    const res = await GetDashboardKpis()
    return res
})

export const GetDashboardTrendsThunk = createAsyncThunk("dashboard/trends", async() => {
    const res = await GetDashboardTrends()
    return res
})

export const GetDashboardFleetThunk = createAsyncThunk("dashboard/fleet", async() => {
    const res = await GetDashboardFleet()
    return res
})

export const GetDashboardOnlineUsersThunk = createAsyncThunk("dashboard/online-users", async() => {
    const res = await GetDashboardOnlineUsers()
    return res
})

export const GetDashboardRecentActivityThunk = createAsyncThunk("dashboard/recent-activity", async() => {
    const res = await GetDashboardRecentActivity()
    return res
})

const initialState: DashboardState ={
    kpis: null,
    trends: null,
    fleet: null,
    recentActivity: null,
    onlineUsers: null,
    loading: false,
    error: null
}
export const dashboardSlice = createSlice({
    name: "dashboard",
    initialState,
    reducers:{},
    extraReducers:builder => 
        builder

    //get kpis thunk
    .addCase(GetDashboardKpisThunk.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.kpis = action.payload
    })
    .addCase(GetDashboardKpisThunk.pending, (state) => {
        state.loading = true
        state.error = null
    })
    .addCase(GetDashboardKpisThunk.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || "Failed to get dashboard KPIs"
    })


    //get trends thunk
    .addCase(GetDashboardTrendsThunk.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.trends = action.payload
    })
    .addCase(GetDashboardTrendsThunk.pending, (state) => {
        state.loading = true
        state.error = null
    })
    .addCase(GetDashboardTrendsThunk.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || "Failed to get dashboard Trends"
    })

    //get fleet thunk
    .addCase(GetDashboardFleetThunk.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.fleet = action.payload
    })
    .addCase(GetDashboardFleetThunk.pending, (state) => {
        state.loading = true
        state.error = null
    })
    .addCase(GetDashboardFleetThunk.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || "Failed to get dashboard Fleet"
    })

    //get online users
    .addCase(GetDashboardOnlineUsersThunk.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.onlineUsers = action.payload
    })
    .addCase(GetDashboardOnlineUsersThunk.pending, (state) => {
        state.loading = true
        state.error = null
    })
    .addCase(GetDashboardOnlineUsersThunk.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || "Failed to get dashboard Online users"
    })

    //recent-activity
    .addCase(GetDashboardRecentActivityThunk.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.recentActivity = action.payload
    })
    .addCase(GetDashboardRecentActivityThunk.pending, (state) => {
        state.loading = true
        state.error = null
    })
    .addCase(GetDashboardRecentActivityThunk.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || "Failed to get dashboard Online users"
    })

})

export default dashboardSlice.reducer
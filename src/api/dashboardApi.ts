import apiClient from "./apiClient"

export const GetDashboardKpis = async () => {
    const response = await apiClient.get("/api/admin/dashboard/kpis")    
    return response.data
}

export const GetDashboardTrends = async () => {
    const response = await apiClient.get("api/admin/dashboard/trends")
    return response.data
}

export const GetDashboardFleet = async () => {
    const response = await apiClient.get("api/admin/dashboard/fleet")
    return response.data
}

export const GetDashboardOnlineUsers = async () => {
    const response = await apiClient.get("api/admin/dashboard/online-users")    
    return response.data
}

export const GetDashboardRecentActivity = async () => {
    const response = await apiClient.get("api/admin/dashboard/recent-activity")  
    return response.data
}


//GET /dashboard/online-users — online users
// GET /dashboard/recent-activity — son fəaliyyət
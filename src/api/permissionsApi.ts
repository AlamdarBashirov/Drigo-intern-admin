import apiClient from "./apiClient";

export const getMyPermissions = async () => {
    const response = await apiClient.get("/api/admin/permissions/my-permissions")
    return response.data
}
import apiClient from "./apiClient";


export type LoginData = {
    username: string, 
    password: string
}

export type LoginResponse ={
    username: string
}

export type VerifyOtpData = {
  username: string;
  code: string;
};

export const login = async (data: LoginData) => {
    const response = await apiClient.post<LoginResponse>("api/admin/auth/login", data)
    console.log(response.data);
    
    return response.data
}

export const verifyOtp = async (data: VerifyOtpData) => {
    const response = await apiClient.post("api/admin/auth/verify", data)
    return response.data
}

export const getCurrentUser = async () => {
    const response = await apiClient.get("api/admin/auth/me")
    return response.data
}

export const logout = async () => {
    const response = await apiClient.post("api/admin/auth/logout")
    return response.data
}
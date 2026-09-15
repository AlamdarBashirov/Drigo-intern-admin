// super admin user type
export type Admin = {
    id: string,
    username: string,
    email: string,
    fullname: string,
    isSuperAdmin: boolean,
}

export type AuthState = {
    user: Admin | null,
    error: string | null,
    loading: boolean,
    initialized: boolean
}
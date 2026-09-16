export type Permission = {
    id: number,
    code: string,
    name: string,
    granted: boolean
}

export type ModulePermission = {
    moduleId:number,
    moduleCode: string,
    moduleName: string,
    permissions: Permission[]
}

export type PermissionsResponse = {
    adminId: string,
    isSuperAdmin: boolean,
    modulePermissions: ModulePermission[],
    permissionCodes : string[]
}

//states for redux
export type PermissionState = {
    permissions:  PermissionsResponse | null
    loading: boolean,
    error: string | null
}

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMyPermissions } from "../../api/permissionsApi";
import type { PermissionState } from "../../types/permissionTypes";

export const GetMyPermissionsThunk = createAsyncThunk("permissions/my-permissions", async () => {
    const res = await getMyPermissions()
    console.log(res);
    
    return res
}) 

const initialState: PermissionState = {
    permissions: null,
    loading: false,
    error: null
}

export const permissionsSlice = createSlice({
    name:"permissions",
    initialState,
    reducers:{},
    extraReducers:builder => 
        builder

    //get my permissions
    .addCase(GetMyPermissionsThunk.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.permissions = action.payload
    })
    .addCase(GetMyPermissionsThunk.pending, (state, action) => {
        state.loading = true
        state.error = ""
    })
    .addCase(GetMyPermissionsThunk.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || "Failed to get permissions"
    })
})

export default permissionsSlice.reducer
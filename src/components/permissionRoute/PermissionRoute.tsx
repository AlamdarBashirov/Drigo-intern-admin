import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { Navigate, Outlet } from "react-router-dom";

type PermissionRouteProps = {
    requiredPermission: string;
};

const PermissionRoute = ({ requiredPermission }: PermissionRouteProps) => {

    const { permissions } = useSelector((state: RootState) => state.permissions)
    const permissionCodes = permissions?.permissionCodes;

    const hasPermission = permissionCodes?.includes(requiredPermission)
    if (!hasPermission) {
       return  <Navigate to="/" />
    }

    if(hasPermission){
        return <Outlet/>
    }

}

export default PermissionRoute
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { Navigate, Outlet } from "react-router-dom";
import Loading from "../loading/Loading";

type PermissionRouteProps = {
    requiredPermission: string;
};

const PermissionRoute = ({ requiredPermission }: PermissionRouteProps) => {

    const { permissions, loading, initialized } = useSelector((state: RootState) => state.permissions)
    const permissionCodes = permissions?.permissionCodes;

    if (loading) {
        return <Loading />;
    }
    const hasPermission = permissionCodes?.includes(requiredPermission)
    if (!hasPermission && initialized) {
        return <Navigate to="/" />
    }

    if (hasPermission && initialized) {
        return <Outlet />
    }

}

export default PermissionRoute
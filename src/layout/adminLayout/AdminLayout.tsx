import { Outlet } from "react-router-dom"
import Header from "../header/Header"
import SideBar from "../sidebar/SideBar"

const AdminLayout = () => {
    return (
        <>
            <Header />
            <div>

                <SideBar />
                <main>
                    <Outlet/>
                </main>
            </div>
        </>
    )
}

export default AdminLayout